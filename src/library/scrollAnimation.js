loop()

function loop() {
  const elementsToShow = document.querySelectorAll('.show-on-scroll')

  Array.from(elementsToShow).forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible')
    } else {
      element.classList.remove('is-visible')
    }
  })

  requestAnimationFrame(loop)
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect()
  return (
    (rect.top <= window.innerHeight && rect.bottom >= 0) ||
    ((rect.bottom >= 0 || rect.top <= window.innerHeight) &&
      rect.top <= window.innerHeight &&
      rect.bottom >= 0)
  )
}
