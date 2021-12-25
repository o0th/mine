import { Settings } from './settings'
import { MineMk1 } from './minemk1'
import { BeltMk1 } from './beltmk1'
import { Container } from './container'
import { Iron } from './iron'
import { Empty } from './empty'

export const Grid = (viewport) => {
  let grid = Array.from(Array(Settings.world.width), () => new Array(Settings.world.height))

  let mines = []
  let irons = []

  const init = () => {
    for (let i = 0; i < Settings.world.width; i++) {
      for (let j = 0; j < Settings.world.height; j++) {
        if (i === 1 && j === 1) {
          const minemk1 = MineMk1(i, j)
          grid[i][j] = minemk1
          mines.push(minemk1)
          viewport.addChild(minemk1.graphic)
        } else if ((i === 2 || i === 3 || i === 4 || i === 5) && j === 1) {
          const beltmk1 = BeltMk1(i, j)
          grid[i][j] = beltmk1
          viewport.addChild(beltmk1.graphic)
        } else if (i === 6 && j === 1) {
          const container = Container(i, j)
          grid[i][j] = container
          viewport.addChild(container.graphic)
        } else {
          const empty = Empty(i, j)
          grid[i][j] = empty
          viewport.addChild(empty.graphic)
        }
      }
    }
  }

  const tick = () => {

    /** Store iron */
    irons = irons.filter((iron) => {
      if (grid[iron.x][iron.y].name === 'container') {
        const container = grid[iron.x][iron.y]
        if (container.storage < container.capacity) {
          container.storage = container.storage + 1
          container.text.text = container.storage
          viewport.removeChild(iron)
          iron.graphic.destroy()
          return false
        }
      }

      return true
    })

    /** Move iron */
    irons = irons.map((iron) => {
      if (grid[iron.x][iron.y].name !== 'container') {
        if (!irons.find(x => x.x === iron.x + 1)) {
          iron.x += 1
          iron.graphic.x += 50
        }
      }

      return iron
    })

    /** Generate iron **/
    mines.forEach((mine) => {
      if (!irons.find(iron => iron.x === mine.x && iron.y === mine.y)) {
        const iron = Iron(mine.x, mine.y)
        irons.push(iron)
        viewport.addChild(iron.graphic)
      }
    })
  }

  return { init, tick }
}

