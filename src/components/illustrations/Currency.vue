<template>
  <div class="currency">
    <div class="currency__letter">$</div>
  </div>
</template>
<style scoped>
.currency {
  background-color: #90be6d;
  border: 4px solid rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  box-sizing: border-box;
  height: 24px;
  position: relative;
  transform: skew(-8deg);
  width: 48px;
}

.currency__letter {
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  height: 16px;
  left: 0;
  margin: auto;
  padding: 1px 5px;
  position: absolute;
  right: 0;
  top: 0px;
  width: 16px;
}

.currency__letter:after {
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  content: '';
  height: 8px;
  left: -10px;
  position: absolute;
  top: 4px;
  width: 8px;
}

.currency__letter:before {
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  content: '';
  height: 8px;
  right: -10px;
  position: absolute;
  top: 4px;
  width: 8px;
}
</style>
