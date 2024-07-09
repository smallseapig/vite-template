import { defineStore } from "pinia";

export default defineStore("common", {
  state: () => ({
    config: null,
    reqInstance: null
  }),
  getters: {
    getConfig(state) {
      return state.config || {};
    },
    getReq(state) {
      return state.reqInstance;
    }
  },
  actions: {
    setReq(val) {
      this.reqInstance = val;
    },
    setConfig(val) {
      this.config = val || {};
    }
  }
});
