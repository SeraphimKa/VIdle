import { ref, Ref, watch } from "vue";
import { defineStore } from "pinia";

export const usePointsStore = defineStore("points", () => {
  const points = ref(0);
  const volume = ref(1);
  const autoTimer = ref();
  const speed = ref(1000);

  const increment = () => {
    points.value += volume.value;
    localStorage.points = points.value;
  };

  const autoClicker = (tspeed: Ref<number> = speed) => {
    autoTimer.value = setInterval(() => {
      increment();
    }, tspeed.value);
  };

  watch(
    () => speed.value,
    () => {
      clearInterval(autoTimer.value);
      autoClicker(speed);
    }
  );

  return { points, volume, speed, autoClicker, increment };
});
