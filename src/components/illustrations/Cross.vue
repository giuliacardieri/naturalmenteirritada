<template>
  <div class="cross"></div>
</template>
<style scoped>
.cross {
  height: 24px;
  position: relative;
  width: 24px;
}

.cross:before {
  background-color: #c30808;
  content: '';
  height: 24px;
  left: 9px;
  position: absolute;
  top: 0;
  width: 6px;
}

.cross:after {
  background-color: #c30808;
  content: '';
  height: 6px;
  left: 0px;
  position: absolute;
  top: 9px;
  width: 24px;
}
</style>
