//stores
import { useUpgradesStore } from "../stores/upgrades";
import { usePointsStore } from "../stores/points";

//data
import upgrades from "../data/upgrades.json";

const upgradesStore = useUpgradesStore();
const pointsStore = usePointsStore();

export default {
  0: localStorage.points
    ? (pointsStore.points = parseInt(localStorage.points))
    : null,
  1: localStorage.upgrades
    ? (upgradesStore.upgrades = JSON.parse(localStorage.upgrades))
    : (localStorage.upgrades = JSON.stringify(upgrades)),
};
