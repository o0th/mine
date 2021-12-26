import { Graphics, Text } from 'pixi.js'

import { Settings } from './settings'

export const Container = (x, y, input) => {
  const name = 'container'

  /** Configurations */
  let storage = 0

  /** Settings */
  let capacity = 10

  /** Graphics */
  const graphic = new Graphics()
  graphic.sortableChildren = true

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

  const style = { fontFamily: 'monospace', align: 'center', fontSize: '1vw' }
  const text = new Text(storage, style)
  text.anchor.set(0.5)
  text.x = x * Settings.square + 25
  text.y = y * Settings.square + 25
  graphic.addChild(text)

  if (input === 'left') {
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

  if (input === 'right') {
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

  if (input === 'up') {
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

  if (input === 'down') {
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

  return { name, graphic, input, text, storage, capacity }
}

