import { ease } from 'pixi-ease'

import { Settings } from './settings'
import { MineMk1 } from './minemk1'
import { BeltMk1 } from './beltmk1'
import { Container } from './container'
import { Iron } from './iron'
import { Empty } from './empty'

import { Save } from '../save'

export const Grid = (viewport) => {
  const grid = Array.from(Array(Settings.world.width), () => new Array(Settings.world.height))

  const mines = []
  let irons = []

  const init = () => {
    for (let i = 0; i < Settings.world.width; i++) {
      for (let j = 0; j < Settings.world.height; j++) {
        if (Save && Save[j] && Save[j][i]) {
          const save = Save[j][i]
          if (save.name === 'mine' && save.model === 'mk1') {
            const minemk1 = MineMk1(i, j, save.output)
            grid[i][j] = minemk1
            mines.push(minemk1)
            viewport.addChild(minemk1.graphic)
          } else if (save.name === 'belt' && save.model === 'mk1') {
            const beltmk1 = BeltMk1(i, j, save.input, save.output)
            grid[i][j] = beltmk1
            viewport.addChild(beltmk1.graphic)
          } else if (save.name === 'container') {
            const container = Container(i, j, save.input)
            grid[i][j] = container
            viewport.addChild(container.graphic)
          }
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
          // container.text.text = container.storage
          viewport.removeChild(iron)
          ease.removeEase(iron.graphic)
          iron.graphic.destroy()
          return false
        }
      }

      return true
    })

    /** Move iron */
    irons = irons.map((iron) => {
      const current = grid[iron.x][iron.y]
      if ((current.name === 'mine' || current.name === 'belt') && current.output === 'right') {
        if (irons.find(x => x.x === iron.x + 1 && x.y === iron.y)) return iron
        const next = grid[iron.x + 1][iron.y]
        if (next.input === 'left') {
          iron.x = iron.x + 1
          iron.animate({ x: iron.graphic.x + Settings.square, y: iron.graphic.y })
        }
      }

      if ((current.name === 'mine' || current.name === 'belt') && current.output === 'left') {
        if (irons.find(x => x.x === iron.x - 1 && x.y === iron.y)) return iron
        const next = grid[iron.x - 1][iron.y]
        if (next.input === 'right') {
          iron.x -= 1
          iron.animate({ x: iron.graphic.x - Settings.square, y: iron.graphic.y })
        }
      }

      if ((current.name === 'mine' || current.name === 'belt') && current.output === 'up') {
        if (irons.find(x => x.x === iron.x && x.y === iron.y - 1)) return iron
        const next = grid[iron.x][iron.y - 1]
        if (next.input === 'down') {
          iron.y -= 1
          iron.animate({ x: iron.graphic.x, y: iron.graphic.y - Settings.square })
        }
      }

      if ((current.name === 'mine' || current.name === 'belt') && current.output === 'down') {
        if (irons.find(x => x.x === iron.x && x.y === iron.y + 1)) return iron
        const next = grid[iron.x][iron.y + 1]
        if (next.input === 'up') {
          iron.y += 1
          iron.animate({ x: iron.graphic.x, y: iron.graphic.y + Settings.square })
        }
      }

      return iron
    })

    /** Generate iron **/
    mines.forEach((mine) => {
      if (!irons.find(iron => iron.x === mine.x && iron.y === mine.y)) {
        const iron = Iron({ x: mine.x, y: mine.y })
        irons.push(iron)
        viewport.addChild(iron.graphic)
        ease.add(iron.graphic, { alpha: 1, duration: 1000 })
      }
    })
  }

  return { init, tick }
}
