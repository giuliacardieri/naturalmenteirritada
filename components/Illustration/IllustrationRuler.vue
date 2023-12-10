<template>
  <div class="ruler"></div>
</template>
<style scoped>
.ruler {
  background-color: var(--blue);
  border-radius: 2px;
  height: 32px;
  position: relative;
  width: 16px;
}

.ruler:after {
  background: linear-gradient(
    180deg,
    transparent 4px,
    rgba(255, 255, 255, 0.5) 5px,
    transparent 6px,
    transparent 13px,
    rgba(255, 255, 255, 0.5) 14px,
    transparent 15px,
    transparent 22px,
    rgba(255, 255, 255, 0.5) 23px,
    transparent 24px,
    transparent 31px,
    rgba(255, 255, 255, 0.5) 32px
  );
  border-radius: 2px;
  content: "";
  height: calc(100% - 1px);
  left: 1px;
  position: absolute;
  top: 1px;
  width: 60%;
}

.ruler:before {
  background: linear-gradient(
    180deg,
    transparent 1px,
    rgba(255, 255, 255, 0.5) 2px,
    transparent 3px,
    transparent 10px,
    rgba(255, 255, 255, 0.5) 11px,
    transparent 12px,
    transparent 19px,
    rgba(255, 255, 255, 0.5) 20px,
    transparent 21px,
    transparent 28px,
    rgba(255, 255, 255, 0.5) 29px,
    transparent 30px
  );
  border-radius: 2px;
  content: "";
  height: calc(100% - 1px);
  left: 1px;
  position: absolute;
  width: 30%;
}
</style>
