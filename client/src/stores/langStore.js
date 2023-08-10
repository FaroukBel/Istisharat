import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    lang: localStorage.getItem('lang') || 'en',
  }),
  actions: {
    setLang(newLang) {
      this.lang = newLang;
      localStorage.setItem('lang', newLang);
    },
  },
});