<template></template>

<script setup lang="ts">
class RunsFast {
  runsFast() {
    console.log('Runs fast')
  }
}

class JumpsHigh {
  jumpsHigh() {
    console.log('Jumps high')
  }
}

class Decathlete implements RunsFast, JumpsHigh {
  runsFast: () => void
  jumpsHigh: () => void
}

function mixin(a: any, b: any) {
  b.forEach((i: any) => {
    Object.getOwnPropertyNames(i.prototype).forEach((name) => {
      a.prototype[name] = i.prototype[name]
    })
  })
}

mixin(Decathlete, [RunsFast, JumpsHigh])

const c = new Decathlete()

console.log(c.runsFast())
</script>

<style scoped></style>
