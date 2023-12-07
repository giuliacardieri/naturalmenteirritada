<template>
  <div class="calendar">
    <div class="calendar__number">1</div>
  </div>
</template>
<style scoped>
.calendar {
  background: linear-gradient(-30deg, rgba(77, 144, 142, 0.15) 49%, #fff 50%);
  border: 1px solid var(--blue);
  border-width: 6px 2px 2px 2px;
  border-radius: 2px;
  color: var(--green);
  height: 24px;
  position: relative;
  width: 32px;
}

.calendar:after {
  background-color: var(--blue);
  border-radius: 4px;
  content: '';
  display: block;
  height: 6px;
  left: 3px;
  position: absolute;
  top: -10px;
  width: 8px;
}

.calendar:before {
  background-color: var(--blue);
  border-radius: 4px;
  content: '';
  display: block;
  height: 6px;
  position: absolute;
  right: 3px;
  top: -10px;
  width: 8px;
}

.calendar__number {
  bottom: 0px;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  position: absolute;
  text-align: center;
  width: 100%;
}
</style>
