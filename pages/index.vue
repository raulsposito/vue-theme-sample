<template>
    <div
    class="
      relative
      bg-yellow-500
      pt-16
      pb-20
      px-4
      sm:px-6
      lg:pt-24 lg:pb-28 lg:px-8
    "
  >
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center py-20">
        <h2
          class="
            fadeOut
            scrolldown
            text-4xl
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-7xl
          "
        >
          zælot
        </h2>
        <h2
          class="
            grow
            fadeIn
            text-4xl
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-7xl
          "
        >
          You are in control.™
        </h2>
        <p class="downarrows pt-32 text-lg font-semibold text-gray-900">
          scroll down
        </p>
        <p class="downarrows pt-12 text-xl font-semibold text-gray-900">↓</p>
        <p class="downarrows pt-12 text-xl font-semibold text-gray-900">.</p>
        <p class="downarrows pt-12 text-xl font-semibold text-gray-900">.</p>
        <p class="downarrows pt-12 text-xl font-semibold text-gray-900">.</p>
        <p class="downarrows pt-12 text-xl font-semibold text-gray-900">.</p>
        <p class="fadeIn pt-12 text-xl font-semibold text-gray-900">The end :) scroll up again!</p>
      </div>
    </div>
  </div>
</template>

<script>
import lax from 'lax.js'

export default {
  mounted() {
    lax.init()
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })
    lax.addElements('.fadeIn', {
      scrollY: {
        opacity: [
          [0, 100],
          [0, 1],
        ],
      },
    })
    lax.addElements('.scrolldown', {
      scrollY: {
        'letter-spacing': [
          [0, 'screenHeight*0.75'],
          [0, 150],
          {
            cssUnit: 'px',
          },
        ],
        opacity: [
          [0, 100],
          [1, 0],
        ],
        translateX: [
          [0, 'screenHeight'],
          [0, 80],
        ],
      },
    })
    lax.addElements('.fadeOut', {
      scrollY: {
        opacity: [
          [0, 100],
          [1, 0],
        ],
      },
    })
    lax.addElements('.letter-x', {
      scrollY: {
        translateY: [
          [-400, 0],
          [100, 0],
        ],
        translateX: [
          [220, 'screenHeight'],
          [0, 400],
        ],
        opacity: [
          [0, 100],
          [0, 1],
        ],
      },
    })
    lax.addElements('.letter-a', {
      scrollY: {
        translateY: [
          [-400, 0],
          [200, 0],
        ],
        translateX: [
          [220, 'screenHeight'],
          [0, -400],
        ],
        opacity: [
          [0, 100],
          [0, 1],
        ],
      },
    })
    lax.addElements('.downarrows', {
      scrollY: {
        translateY: [
          [0, 75],
          [0, 200],
        ],
        opacity: [
          [0, 100],
          [1, 0],
        ],
      },
    })
    lax.addElements('.grow', {
      scrollY: {
        scale: [
          [30, 100],
          [0.3, 1],
        ],
      },
    })
  },
  beforeUnmount() {
    lax.removeElements(
      '.fadeIn',
      '.grow',
      '.downarrows',
      '.letter-a',
      '.letter-x',
      '.fadeOut',
      '.scrolldown'
    )
  },
}
</script>
