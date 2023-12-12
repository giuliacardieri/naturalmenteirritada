<template>
  <div class="cross"></div>
</template>
<style scoped>
.cross {
  height: 24px;
  position: relative;
  width: 20px;
}

.cross:before {
  background-color: var(--black);
  content: "";
  height: 24px;
  left: 8px;
  position: absolute;
  top: 0;
  width: 4px;
}

.cross:after {
  background-color: var(--black);
  content: "";
  height: 4px;
  left: 0px;
  position: absolute;
  top: 9px;
  width: 20px;
}
</style>
