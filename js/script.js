console.log('Hello there! Welcome to my website!')

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle' && (getViewportWidth() < 640)) {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

function getViewportWidth () {
  console.log(window.innerWidth)
  return (window.innerWidth)
}
