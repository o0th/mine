import { Graphics, DEG_TO_RAD } from 'pixi.js'

import { Settings } from './settings'

export const BeltMk1 = (x, y, input, output) => {
  const name = 'belt'
  const model = 'mk1'

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

  if (input === 'left' && output === 'right') {
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

    graphic.beginFill(0xcccccc).drawRegularPolygon(
      x * Settings.square + 15,
      y * Settings.square + 25,
      5,
      3,
      90 * DEG_TO_RAD
    ).endFill()

    graphic.beginFill(0xcccccc).drawRegularPolygon(
      x * Settings.square + Settings.square - 15,
      y * Settings.square + Settings.square - 25,
      5,
      3,
      90 * DEG_TO_RAD
    ).endFill()
  }

  if (input === 'right' && output === 'left') {
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

    graphic.beginFill(0xcccccc).drawRegularPolygon(
      x * Settings.square + 15,
      y * Settings.square + 25,
      5,
      3,
      270 * DEG_TO_RAD
    ).endFill()

    graphic.beginFill(0xcccccc).drawRegularPolygon(
      x * Settings.square + Settings.square - 15,
      y * Settings.square + Settings.square - 25,
      5,
      3,
      270 * DEG_TO_RAD
    ).endFill()
  }

  if (input === 'up' && output === 'down') {
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

    graphic.beginFill(0xcccccc).drawRegularPolygon(
      x * Settings.square + 25,
      y * Settings.square + 15,
      5,
      3,
      180 * DEG_TO_RAD
    ).endFill()

    graphic.beginFill(0xcccccc).drawRegularPolygon(
      x * Settings.square + Settings.square - 25,
      y * Settings.square + Settings.square - 15,
      5,
      3,
      180 * DEG_TO_RAD
    ).endFill()
  }

  if (input === 'down' && output === 'up') {
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

    graphic.beginFill(0xcccccc).drawRegularPolygon(
      x * Settings.square + 25,
      y * Settings.square + 15,
      5,
      3
    ).endFill()

    graphic.beginFill(0xcccccc).drawRegularPolygon(
      x * Settings.square + Settings.square - 25,
      y * Settings.square + Settings.square - 15,
      5,
      3
    ).endFill()
  }

  if (input === 'up' && output === 'right') {
    graphic.beginFill(0xcccccc).drawRect(
      x * Settings.square + 8,
      y * Settings.square,
      Settings.square - 16,
      10
    ).endFill()

    graphic.beginFill(0xdddddd).drawRect(
      x * Settings.square + 10,
      y * Settings.square,
      Settings.square - 20,
      10
    ).endFill()

    graphic.beginFill(0xcccccc).drawRect(
      x * Settings.square + Settings.square - 10,
      y * Settings.square + 8,
      Settings.square + 2,
      Settings.square - 16
    ).endFill()

    graphic.beginFill(0xdddddd).drawRect(
      x * Settings.square + Settings.square - 10,
      y * Settings.square + 10,
      Settings.square,
      Settings.square - 20
    ).endFill()

    graphic.beginFill(0xcccccc).drawRect(
      x * Settings.square + 8,
      y * Settings.square + 8,
      Settings.square - 16,
      Settings.square - 16
    ).endFill()

    graphic.beginFill(0xdddddd).drawRect(
      x * Settings.square + 10,
      y * Settings.square + 8,
      Settings.square - 18,
      Settings.square - 18
    ).endFill()

    graphic.beginFill(0xcccccc).drawRegularPolygon(
      x * Settings.square + 25,
      y * Settings.square + 15,
      5,
      3,
      180 * DEG_TO_RAD
    ).endFill()

    graphic.beginFill(0xcccccc).drawRegularPolygon(
      x * Settings.square + Settings.square - 15,
      y * Settings.square + Settings.square - 25,
      5,
      3,
      90 * DEG_TO_RAD
    ).endFill()
  }

  return { name, model, x, y, input, output, graphic }
}
