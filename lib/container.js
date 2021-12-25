import { Graphics, Text } from 'pixi.js'

import { Settings } from './settings'

export const Container = (x, y) => {
  const name = 'container'

  /** Configurations */
  let input = 'left'
  let storage = 0

  /** Settings */
  let capacity = 10
  let throughput = 1

  /** Ticks */
  let seconds = 0

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

  const style = { fontFamily: 'monospace', align: 'center', fontSize: '1vw' }
  const text = new Text(storage, style)
  text.anchor.set(0.5)
  text.x = x * Settings.square + 25
  text.y = y * Settings.square + 38
  graphic.addChild(text)

  return { name, graphic, text, storage, capacity }
}

