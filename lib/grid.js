import { Settings } from './settings'
import { MineMk1 } from './minemk1'
import { Empty } from './empty'

export const Grid = (viewport) => {
  let grid = Array.from(Array(Settings.world.width), () => new Array(Settings.world.height))

  const init = () => {
    for (let i = 0; i < Settings.world.width; i++) {
      for (let j = 0; j < Settings.world.height; j++) {
        if (i === 1 && j === 1) {
          const minemk1 = MineMk1(i, j)
          grid[i][j] = minemk1
          viewport.addChild(minemk1.graphic)
        } else {
          const empty = Empty(i, j)
          grid[i][j] = empty
          viewport.addChild(empty.graphic)
        }
      }
    }
  }

  const tick = (delta) => {
    for (let i = 0; i < Settings.world.width; i++) {
      for (let j = 0; j < Settings.world.height; j++) {
        if (grid[i][j] && grid[i][j].tick) grid[i][j].tick(delta)
      }
    }
  }

  return { init, tick }
}


