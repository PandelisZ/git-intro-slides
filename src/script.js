import './lib/reveal.css'
import './lib/reveal-white.css'
import 'bulma/css/bulma.css'
// import './lib/glitch.css'
import './lib/padding.css'
import './style.css'
import 'headjs/dist/1.0.0/head.min'
import * as Reveal from 'reveal.js'

window.Reveal = Reveal

Reveal.initialize({
  history: true,
  dependencies: [
    // d3.js library and plugin
    { src: 'https://d3js.org/d3.v3.min.js' },
    { src: '/public/d3js.js' }
  ]
})
