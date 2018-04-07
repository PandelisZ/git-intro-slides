import './lib/reveal.css'
import './lib/reveal-white.css'
import 'bulma/css/bulma.css'
// import './lib/glitch.css'
import './lib/padding.css'
import './style.css'
import 'headjs/dist/1.0.0/head.min'

window.Reveal.initialize({
  history: true,
  dependencies: [
    // d3.js library and plugin
    { src: 'https://d3js.org/d3.v4.min.js' },
    { src: '/public/d3js.js' }
  ]
})
