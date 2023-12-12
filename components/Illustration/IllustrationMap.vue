<template>
  <div class="map">
    <div class="map__circle"></div>
    <div class="map__bottom"></div>
  </div>
</template>
<style scoped>
.map {
  height: 28px;
  position: relative;
  overflow: hidden;
  width: 20px;
}

.map__circle {
  background-color: var(--white);
  border: 8px solid var(--black);
  border-radius: 100%;
  display: block;
  height: 20px;
  width: 20px;
}

.map__bottom {
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid var(--black);
  height: 0;
  margin: -4px 0 0 2px;
  width: 0;
}
</style>
