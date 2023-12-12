<template>
  <div class="currency">
    <div class="currency__letter">$</div>
  </div>
</template>
<style scoped>
.currency {
  background-color: rgba(0, 0, 0, 0.1);
  border: 2px solid var(--black);
  border-radius: 2px;
  box-sizing: border-box;
  height: 24px;
  position: relative;
  transform: skew(-8deg);
  width: 36px;
}

.currency__letter {
  background-color: var(--black);
  border-radius: 100%;
  box-sizing: border-box;
  color: var(--white);
  font-size: 12px;
  height: 14px;
  left: 0;
  margin: auto;
  padding: 0px 3px;
  position: absolute;
  right: 0;
  top: 4px;
  width: 14px;
}

.currency__letter:after {
  background-color: var(--black);
  border-radius: 100%;
  content: "";
  height: 4px;
  left: -7px;
  position: absolute;
  top: 5px;
  width: 4px;
}

.currency__letter:before {
  background-color: var(--black);
  border-radius: 100%;
  content: "";
  height: 4px;
  right: -7px;
  position: absolute;
  top: 5px;
  width: 4px;
}
</style>
