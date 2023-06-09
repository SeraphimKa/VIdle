// Apply upgrade effects to point store

import { usePointsStore } from "../stores/points";

const pointsStore = usePointsStore();

//// upgrade function template
// id: function upgrade[id]() {
//   --effect
// },

export default {
  1: function upgrade1() {
    pointsStore.autoClicker();
  },

  2: function upgrade2() {
    pointsStore.volume += 9;
  },
  3: function upgrade3() {
    pointsStore.speed /= 2;
  },
};
