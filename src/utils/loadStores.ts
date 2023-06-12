//stores
import { useUpgradesStore } from "../stores/upgrades";
import { usePointsStore } from "../stores/points";

//data
import upgrades from "../data/upgrades.json";

const upgradesStore = useUpgradesStore();
const pointsStore = usePointsStore();

export const loadStores = () => {
  if (localStorage.points) {
    pointsStore.points = parseInt(localStorage.points);
  }
  if (localStorage.upgrades) {
    upgradesStore.upgrades = JSON.parse(localStorage.upgrades);
  } else {
    localStorage.upgrades = JSON.stringify(upgrades);
  }
};
