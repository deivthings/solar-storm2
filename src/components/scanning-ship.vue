<template>
  <!-- https://cssloaders.github.io/ -->
  <section class="wrapper-component">
    <div class="wapper-loader text-center">
      <h3 class="loader-text">SCANNING SHIP</h3>
      <span class="loader"></span>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.wrapper-component {
  position: relative;
  height: 300px;
}
.wapper-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loader-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  color: var(--color-primary);
  font-weight: normal;
  font-size: 1.3rem;
  letter-spacing: 4px;
  z-index: 1;
  padding-right: 1rem;
  padding-left: 1rem;
  border-radius: 10px;
  min-width: 250px;
  font-family: 'Kdam Thmor Pro', sans-serif;
  padding-top: .2rem;
  padding-bottom: .2rem;
}
.loader {
  width: 148px;
  height: 148px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #FFF #FFF transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px solid;
  border-color: transparent var(--color-primary) var(--color-primary);
  width: 124px;
  height: 124px;
  border-radius: 50%;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}


</style>