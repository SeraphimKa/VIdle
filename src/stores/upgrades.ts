import { ref, Ref, watch } from "vue";

import { defineStore } from "pinia";
import upgradesJSON from "../data/upgrades.json";
//types
import type { Upgrade } from "../types";

export const useUpgradesStore = defineStore("upgrades", () => {
  const upgrades: Ref<Upgrade[]> = ref(upgradesJSON);

  const setBought = (id: number, bought: boolean) => {
    upgrades.value[id - 1].bought = bought;
  };

  watch(
    () => upgrades.value,
    () => {
      console.log("upgrades changed", upgrades.value[1].bought);
      localStorage.upgrades = JSON.stringify(upgrades.value);
    }
  );

  return { upgrades, setBought };
});
