import { Graphics } from 'pixi.js'
import { ease } from 'pixi-ease'

import { Settings } from './settings'

export const Iron = (args) => {
  /** Constructor */
  const { x, y } = args

  /** Defaults */
  const name = 'iron'

  /** Graphics */
  const graphic = new Graphics()

  graphic.beginFill(0x3366ff).drawCircle(
    x * Settings.square + Settings.square / 2,
    y * Settings.square + Settings.square / 2,
    Settings.square / 8
  ).endFill()

  graphic.alpha = 0
  graphic.zIndex = 1

  /** Methods */
  const animate = (args) => {
    const { x, y } = args
    const opts = { repeat: false, ease: 'linear', duration: 1000 }
    const animation = { position: { x, y } }
    ease.removeEase(graphic)
    ease.add(graphic, animation, opts)
  }

  return { name, x, y, graphic, animate }
}
