import { Graphics } from 'pixi.js'

import { Settings } from './settings'

const random = () => '0x' + [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')

export const Iron = (x, y) => {
  const name = 'iron'

  /** Graphics */
  const graphic = new Graphics()

  graphic.beginFill(0x3366ff).drawCircle(
    x * Settings.square + Settings.square / 2,
    y * Settings.square + Settings.square / 2,
    5,
    5,
    5
  ).endFill()

  graphic.alpha = 0
  graphic.zIndex = 1

  return { name, graphic, x, y }
}
