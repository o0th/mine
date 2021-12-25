import { Graphics } from 'pixi.js'

import { Settings } from './settings'

export const BeltMk1 = (x, y) => {
  const name = 'beltmk1'

  /** Configurations */
  let input = 'left'
  let output = 'right'
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

  return { name, root, input, output, graphic, x, y }
}
