import './style.css'

import { Application } from 'pixi.js'
import { Viewport } from 'pixi-viewport'

import { settings } from './lib/settings'

const engine = (window) => {
  const application = new Application({
    resolution: window.devicePixelRatio,
    backgroundColor: settings.background,
    autoResize: true,
    antialias: true
  })

  const viewport = new Viewport({
    screenWidth: window.innerWidth / window.devicePixelRatio,
    screenHeight: window.innerHeight / window.devicePixelRatio,
    worldWidth: settings.world.width * settings.square,
    worldHeight: settings.world.height * settings.square,
    interaction: application.renderer.plugins.interaction
  })

  viewport.drag()
  viewport.pinch()
  viewport.wheel()
  viewport.decelerate()
  viewport.clamp({ direction: 'all' })
  viewport.clampZoom({ minScale: 0.5, maxScale: 1 })

  application.stage.addChild(viewport)
  document.body.appendChild(application.view)
}

engine(window, document)
