import { ref, Ref, watch } from "vue";

import { defineStore } from "pinia";
import upgradesJSON from "../data/upgrades.json";
//types
import { Upgrade } from "../types";

export const useUpgradesStore = defineStore("upgrades", () => {
  const upgrades: Ref<Upgrade[]> = ref(upgradesJSON);

  const setBought = (id: number, bought: boolean) => {
    console.log(bought);
    upgrades.value[id - 1].bought = bought;
  };

  watch(upgrades.value, () => {
    console.log("upgrades changed");
    localStorage.upgrades = JSON.stringify(upgrades.value);
  });

  return { upgrades, setBought };
});
