import { Graphics, Text } from 'pixi.js'

import { Settings } from './settings'

export const MineMk1 = (x, y, output) => {
  const name = 'mine'
  const model = 'mk1'

  /** Configurations */
  let storage = 0

  /** Settings */
  let capacity = 50
  let production = 1

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

  graphic.beginFill(0xcccccc).drawRoundedRect(
    x * Settings.square + 3,
    y * Settings.square + 3,
    Settings.square - 6,
    Settings.square - 6,
    5
  ).endFill()

  graphic.beginFill(0xfefefe).drawRoundedRect(
    x * Settings.square + 5,
    y * Settings.square + 5,
    Settings.square - 10,
    Settings.square - 10,
    5
  ).endFill()

  if (output === 'right') {
    graphic.beginFill(0xcccccc).drawRect(
      x * Settings.square + Settings.square - 3,
      y * Settings.square + 8,
      3,
      Settings.square - 16,
    ).endFill()

    graphic.beginFill(0xdddddd).drawRect(
      x * Settings.square + Settings.square - 3,
      y * Settings.square + 10,
      3,
      Settings.square - 20
    ).endFill()
  }

  if (output === 'left') {
    graphic.beginFill(0xcccccc).drawRect(
      x * Settings.square,
      y * Settings.square + 8,
      3,
      Settings.square - 16,
    ).endFill()

    graphic.beginFill(0xdddddd).drawRect(
      x * Settings.square,
      y * Settings.square + 10,
      3,
      Settings.square - 20
    ).endFill()
  }

  if (output === 'up') {
    graphic.beginFill(0xcccccc).drawRect(
      x * Settings.square + 8,
      y * Settings.square,
      Settings.square - 16,
      3,
    ).endFill()

    graphic.beginFill(0xdddddd).drawRect(
      x * Settings.square + 10,
      y * Settings.square,
      Settings.square - 20,
      3
    ).endFill()
  }

  if (output === 'down') {
    graphic.beginFill(0xcccccc).drawRect(
      x * Settings.square + 8,
      y * Settings.square + Settings.square - 3,
      Settings.square - 16,
      3,
    ).endFill()

    graphic.beginFill(0xdddddd).drawRect(
      x * Settings.square + 10,
      y * Settings.square + Settings.square - 3,
      Settings.square - 20,
      3
    ).endFill()
  }

  graphic.zIndex = 2

  return { name, model, output, graphic, x, y }
}
