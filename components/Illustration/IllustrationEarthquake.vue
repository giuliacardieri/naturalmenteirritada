<template>
  <div class="scale">
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
    <div class="line line-4"></div>
    <div class="line line-5"></div>
    <div class="line line-6"></div>
    <div class="line line-7"></div>
  </div>
</template>
<style scoped>
.scale {
  height: 24px;
  position: relative;
  width: 32px;
}

.line {
  background-color: var(--green);
  height: 2px;
  position: absolute;
}

.line-1 {
  bottom: 8px;
  left: 0;
  width: 7px;
}

.line-2 {
  left: 4px;
  top: 10px;
  transform: rotate(-75deg);
  width: 8px;
}

.line-3 {
  left: 2px;
  top: 15px;
  transform: rotate(75deg);
  width: 18px;
}

.line-4 {
  bottom: 9px;
  left: 5px;
  transform: rotate(-80deg);
  width: 22px;
}

.line-5 {
  bottom: 10px;
  left: 9px;
  transform: rotate(80deg);
  width: 22px;
}

.line-6 {
  bottom: 8px;
  right: -1px;
  transform: rotate(-80deg);
  width: 18px;
}

.line-7 {
  bottom: 16px;
  right: 0;
  width: 7px;
}
</style>
