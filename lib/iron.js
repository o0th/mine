import { Graphics } from 'pixi.js'

import { Settings } from './settings'

const random = () => '0x' + [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')

export const Iron = (x, y) => {
  const name = 'iron'

  /** Graphics */
  const graphic = new Graphics()

  graphic.beginFill(random()).drawCircle(
    x * Settings.square + Settings.square / 2,
    y * Settings.square + Settings.square / 2,
    5,
    5,
    5
  ).endFill()

  return { name, graphic, x, y }
}
