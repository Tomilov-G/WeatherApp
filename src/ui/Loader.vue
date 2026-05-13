<script setup>
defineProps({
  label: {
    type: String,
    default: "Загрузка...",
  },
});
</script>

<template>
  <div class="weatherLoader" role="status" :aria-label="label">
    <div class="sky">
      <div class="sun"></div>
      <div class="cloud">
        <span class="cloudPart cloudPartLeft"></span>
        <span class="cloudPart cloudPartCenter"></span>
        <span class="cloudPart cloudPartRight"></span>
        <span class="cloudBase"></span>
      </div>
      <div class="rain">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <span class="visuallyHidden">{{ label }}</span>
  </div>
</template>

<style scoped lang="scss">
.weatherLoader {
  position: relative;
  width: 112px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sky {
  width: 86px;
  height: 72px;
  position: relative;
}

.sun {
  position: absolute;
  top: 0;
  right: 5px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffcc4d;
  box-shadow: 0 0 0 7px #ffcc4d33;
  animation: sunPulse 1.8s ease-in-out infinite;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: -9px;
    border-radius: inherit;
    border: 2px solid #ffcc4d;
    opacity: 0.28;
  }

  &::after {
    inset: -16px;
    opacity: 0.14;
  }
}

.cloud {
  position: absolute;
  left: 1px;
  top: 23px;
  width: 68px;
  height: 34px;
  animation: cloudFloat 1.7s ease-in-out infinite;
}

.cloudPart,
.cloudBase {
  position: absolute;
  display: block;
  background: var(--mainComponent-background-default);
  border: 2px solid $color-blue;
  box-shadow: 0 8px 18px #4793ff26;
}

.cloudPart {
  border-radius: 50%;
}

.cloudPartLeft {
  left: 5px;
  bottom: 7px;
  width: 25px;
  height: 25px;
}

.cloudPartCenter {
  left: 21px;
  bottom: 12px;
  width: 33px;
  height: 33px;
}

.cloudPartRight {
  right: 4px;
  bottom: 8px;
  width: 24px;
  height: 24px;
}

.cloudBase {
  left: 3px;
  right: 2px;
  bottom: 0;
  height: 20px;
  border-radius: 14px;
}

.rain {
  position: absolute;
  left: 17px;
  right: 22px;
  top: 57px;
  display: flex;
  justify-content: space-between;
}

.rain span {
  width: 4px;
  height: 14px;
  border-radius: 999px;
  background-color: $color-blue;
  animation: rainDrop 1s ease-in infinite;

  &:nth-child(2) {
    animation-delay: 0.16s;
  }

  &:nth-child(3) {
    animation-delay: 0.32s;
  }
}

.visuallyHidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes sunPulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.9;
  }

  50% {
    transform: scale(1.08);
    opacity: 1;
  }
}

@keyframes cloudFloat {
  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(6px);
  }
}

@keyframes rainDrop {
  0% {
    transform: translateY(-3px);
    opacity: 0;
  }

  35% {
    opacity: 1;
  }

  100% {
    transform: translateY(13px);
    opacity: 0;
  }
}
</style>
