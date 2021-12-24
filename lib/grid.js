import { Graphics } from 'pixi.js'

import { Settings } from './settings'

export const Grid = (viewport) => {
  let grid = Array.from(Array(Settings.world.width), () => new Array(Settings.world.height))

  const init = () => {
    for (let i = 0; i < Settings.world.width; i++) {
      for (let j = 0; j < Settings.world.height; j++) {
        const empty = Empty(i, j)
        grid[i][j] = empty
        viewport.addChild(empty)
      }
    }
  }

  return Object.freeze({ init })
}

const Empty = (x, y) => {
  const obj = new Graphics()
  obj.beginFill(Settings.foreground)
  obj.drawRect(
    x * Settings.square,
    y * Settings.square,
    Settings.square,
    Settings.square
  )

  obj.endFill()
  obj.beginFill(Settings.background)
  obj.drawRoundedRect(
    x * Settings.square + 1,
    y * Settings.square + 1,
    Settings.square - 2,
    Settings.square - 2,
    2
  )

  obj.endFill()
  return obj
}
