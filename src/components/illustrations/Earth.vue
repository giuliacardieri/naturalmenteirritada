<script setup>
defineProps({
  mad: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="[{ 'earth--mad': mad }, 'earth']">
    <div class="eye left"></div>
    <div class="eye right"></div>
    <div class="mouth"></div>
  </div>
</template>

<style scoped>
.earth {
  background-color: var(--blue);
  border-radius: 100%;
  box-shadow: inset -4px -4px rgba(0, 0, 0, 0.2);
  height: 80px;
  position: relative;
  width: 80px;
  z-index: 0;
}

.earth:not(.earth--mad) .eye:after {
  animation: earthEye 10s linear infinite;
}

.earth:not(.earth--mad) .mouth {
  animation: earthMouth 10s linear infinite;
}

.earth:before {
  background-color: var(--green);
  border-radius: 100% 70% 100% 70%;
  content: '';
  height: 40px;
  left: 8px;
  position: absolute;
  top: 30px;
  width: 30px;
  transform: rotate(-30deg);
}

.earth:after {
  background-color: var(--green);
  border-radius: 100% 70% 100% 70%;
  content: '';
  height: 42px;
  right: 16px;
  position: absolute;
  top: 4px;
  width: 16px;
  transform: rotate(-45deg);
}

.eye {
  background-color: var(--black);
  border-radius: 100%;
  height: 12px;
  position: absolute;
  top: 24px;
  width: 12px;
  z-index: 1;
}
.eye:after {
  background-color: var(--white);
  border-radius: 100%;
  content: '';
  height: 4px;
  position: absolute;
  width: 4px;
}
.earth--mad .eye:after {
  left: 1px;
  top: 4px;
}
.eye.left {
  left: 20px;
}
.eye.right {
  right: 20px;
}

.mouth {
  border-bottom: 3px solid var(--black);
  border-radius: 100%;
  bottom: 22px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  width: 32px;
}

.earth--mad .mouth {
  height: 0px;
}

@keyframes earthMouth {
  0% {
    height: 20px;
  }
  20% {
    height: 20px;
  }
  25% {
    height: 0px;
  }
  75% {
    height: 0px;
  }
  80% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}
@keyframes earthEye {
  0% {
    left: 2px;
    top: 1px;
  }
  20% {
    left: 2px;
    top: 1px;
  }
  25% {
    left: 1px;
    top: 4px;
  }
  75% {
    left: 1px;
    top: 4px;
  }
  80% {
    left: 2px;
    top: 1px;
  }
  100% {
    left: 2px;
    top: 1px;
  }
}
</style>
