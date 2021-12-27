import { Graphics } from 'pixi.js'
import { ease } from 'pixi-ease'

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

  if (input === 'left' && output === 'right') {
    const movement = new Graphics()
    movement.beginFill(0xbbbbbb).drawRect(
      x * Settings.square - 2,
      y * Settings.square + 12,
      2,
      2
    ).drawRect(
      x * Settings.square - 2,
      y * Settings.square + Settings.square - 14,
      2,
      2
    ).endFill()

    const opts = { repeat: true, ease: 'linear' }
    const animation = { position: { x: 50, y: 0 }, duration: 1000 }
    ease.add(movement, animation, opts)
    graphic.addChild(movement)
  }

  if (input === 'right' && output === 'left') {
    const movement = new Graphics()
    movement.beginFill(0xbbbbbb).drawRect(
      x * Settings.square + Settings.square - 2,
      y * Settings.square + 12,
      2,
      2
    ).drawRect(
      x * Settings.square + Settings.square - 2,
      y * Settings.square + Settings.square - 14,
      2,
      2
    ).endFill()

    const opts = { repeat: true, ease: 'linear' }
    const animation = { position: { x: -50, y: 0 }, duration: 1000 }
    ease.add(movement, animation, opts)
    graphic.addChild(movement)
  }

  if (input === 'up' && output === 'down') {
    const movement = new Graphics()
    movement.beginFill(0xbbbbbb).drawRect(
      x * Settings.square + 12,
      y * Settings.square,
      2,
      2
    ).drawRect(
      x * Settings.square + Settings.square - 14,
      y * Settings.square,
      2,
      2
    ).endFill()

    const opts = { repeat: true, ease: 'linear' }
    const animation = { position: { x: 0, y: 50 }, duration: 1000 }
    ease.add(movement, animation, opts)
    graphic.addChild(movement)
  }

  if (input === 'down' && output === 'up') {
    const movement = new Graphics()
    movement.beginFill(0xbbbbbb).drawRect(
      x * Settings.square + 12,
      y * Settings.square + Settings.square,
      2,
      2
    ).drawRect(
      x * Settings.square + Settings.square - 14,
      y * Settings.square + Settings.square,
      2,
      2
    ).endFill()

    const opts = { repeat: true, ease: 'linear' }
    const animation = { position: { x: 0, y: -50 }, duration: 1000 }
    ease.add(movement, animation, opts)
    graphic.addChild(movement)
  }

  return { name, model, input, output, graphic, x, y }
}
