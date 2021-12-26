import { Graphics } from 'pixi.js'

import { Settings } from './settings'

export const BeltMk1 = (x, y, input, output) => {
  const name = 'belt'
  const model = 'mk1'

  /** Configurations */
  let storage = 0

  /** Settings */
  let capacity = 1
  let throughput = 1

  /** */
  let root

  /** Graphics */
  const graphic = new Graphics()

  graphic.beginFill(Settings.foreground).drawRect(
    x * Settings.square,
    y * Settings.square,
    Settings.square,
    Settings.square
  ).endFill()

  graphic.beginFill(Settings.background).drawRoundedRect(
    x * Settings.square + 1,
    y * Settings.square + 1,
    Settings.square - 2,
    Settings.square - 2,
    2
  ).endFill()

  if (input === 'left' || input === 'right') {
    graphic.beginFill(0xcccccc).drawRect(
      x * Settings.square,
      y * Settings.square + 8,
      Settings.square + 2,
      Settings.square - 16
    ).endFill()

    graphic.beginFill(0xdddddd).drawRect(
      x * Settings.square,
      y * Settings.square + 10,
      Settings.square,
      Settings.square - 20
    ).endFill()
  }

  if (input === 'up' || input === 'down') {
    graphic.beginFill(0xcccccc).drawRect(
      x * Settings.square + 8,
      y * Settings.square,
      Settings.square - 16,
      Settings.square + 2
    ).endFill()

    graphic.beginFill(0xdddddd).drawRect(
      x * Settings.square + 10,
      y * Settings.square,
      Settings.square - 20,
      Settings.square
    ).endFill()
  }

  return { name, model, input, output, graphic, x, y }
}
