import { defineStore } from "pinia";

export default defineStore("common", {
  state: () => ({
    config: null
  }),
  getters: {
    getConfig(state) {
      return state.config || {};
    }
  },
  actions: {
    setConfig(val) {
      this.config = val || {};
    }
  }
});
