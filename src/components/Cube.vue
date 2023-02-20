<template>
<div class="scene">
  <div class="cube">
  <!-- <div :class="['cube', {'is-active': active}]" @click="activeCube()"> -->
    <div class="cube__face cube__face--front"></div>
    <div class="cube__face cube__face--back"></div>
    <div class="cube__face cube__face--right"></div>
    <div class="cube__face cube__face--left"></div>
    <div class="cube__face cube__face--top"></div>
    <div class="cube__face cube__face--bottom"></div>
  </div>
</div>
</template>

<style scoped>
.scene {
  width: 100px;
  height: 100px;
  /* border: 1px solid #CCC; */
  /* margin: 80px; */
  perspective: 200px;
}

.cube {
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-50px) scale(.5);
  transition: transform 1s;
}
.scene.is-active .cube {
  box-shadow: 0 0 27px 26px rgb(255, 187, 0);
}

.cube.show-front {
  transform: translateZ(-50px) rotateY(0deg);
}

.cube.show-right {
  transform: translateZ(-50px) rotateY(-90deg);
}

.cube.show-back {
  transform: translateZ(-50px) rotateY(-180deg);
}

.cube.show-left {
  transform: translateZ(-50px) rotateY(90deg);
}

.cube.show-top {
  transform: translateZ(-50px) rotateX(-90deg);
}

.cube.show-bottom {
  transform: translateZ(-50px) rotateX(90deg);
}

.cube__face {
  position: absolute;
  width: 100px;
  height: 100px;
  /* border: 5px solid rgba(0, 0, 0, 0.706); */
  line-height: 200px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.cube__face--front {
  background: hsla(46, 100%, 50%, 0.7);
}

.cube__face--right {
  background: hsla(60, 100%, 50%, 0.7);
}

.cube__face--back {
  background: hsla(120, 100%, 50%, 0.7);
}

.cube__face--left {
  background: hsla(180, 100%, 50%, 0.7);
}

.cube__face--top {
  background: hsla(240, 100%, 50%, 0.7);
}

.cube__face--bottom {
  background: hsla(300, 100%, 50%, 0.7);
}

.cube__face--front {
  transform: rotateY(0deg) translateZ(50px);
}

.cube__face--right {
  transform: rotateY(90deg) translateZ(50px);
}

.cube__face--back {
  transform: rotateY(180deg) translateZ(50px);
}

.cube__face--left {
  transform: rotateY(-90deg) translateZ(50px);
}

.cube__face--top {
  transform: rotateX(90deg) translateZ(50px);
}

.cube__face--bottom {
  transform: rotateX(-90deg) translateZ(50px);
}

label {
  margin-right: 10px;
}
</style>