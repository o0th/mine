import './style.css'

import { Application } from 'pixi.js'
import { Viewport } from 'pixi-viewport'

import { Settings } from './lib/settings'
import { Grid } from './lib/grid'

const width = window.innerWidth / window.devicePixelRatio
const height = window.innerHeight / window.devicePixelRatio

/** pixi-application */
const application = new Application({
  width,
  height,
  resolution: window.devicePixelRatio,
  backgroundColor: Settings.background,
  autoResize: true,
  antialias: true
})

/** pixi-viewport */
const viewport = new Viewport({
  screenWidth: width,
  screenHeight: height,
  worldWidth: Settings.world.width * Settings.square,
  worldHeight: Settings.world.height * Settings.square,
  interaction: application.renderer.plugins.interaction
})

/** pixi-viewport settings */
viewport.drag()
viewport.pinch()
viewport.wheel()
viewport.decelerate()
viewport.clamp({ direction: 'all' })
viewport.clampZoom({ minScale: 0.5, maxScale: 1 })
viewport.position.set(width / 2, height / 2)
viewport.sortableChildren = true

const grid = Grid(viewport)
grid.init()

window.setInterval(grid.tick, 1000)

/** mount application */
application.stage.addChild(viewport)
document.body.appendChild(application.view)
