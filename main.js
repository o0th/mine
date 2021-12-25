import './style.css'

import { Application } from 'pixi.js'
import { Viewport } from 'pixi-viewport'

import { Settings } from './lib/settings'
import { Grid } from './lib/grid'

/** pixi-application */
const application = new Application({
  resolution: window.devicePixelRatio,
  backgroundColor: Settings.background,
  autoResize: true,
  antialias: true
})

/** pixi-viewport */
const viewport = new Viewport({
  screenWidth: window.innerWidth / window.devicePixelRatio,
  screenHeight: window.innerHeight / window.devicePixelRatio,
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

const grid = Grid(viewport)
grid.init()

window.setInterval(grid.tick, 1000)

// application.ticker.add(grid.tick)

/** mount application */
application.stage.addChild(viewport)
document.body.appendChild(application.view)
