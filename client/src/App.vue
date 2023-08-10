
<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from './stores/langStore'; // Update the path accordingly
import { VueScrollFixedNavbar } from "vue-scroll-fixed-navbar";


const lang = ref('ar');
const store = useStore();

onMounted(() => {
  lang.value = store.lang;
});

const toggleLanguage = () => {
  const newLang = lang.value === 'en' ? 'ar' : 'en';
  store.setLang(newLang);
  lang.value = newLang;
  window.location.reload();

};

</script>

<style scoped>
.wrapper {
  box-shadow: 0 0 20px #d7d7d7;
  margin-top: 100px;
  
}
.fixed-nav{

  box-shadow: 0 0 20px #d7d7d7;
}
</style>


<template>
  <header>
    <div class="wrapper" :class="{ 'rtl': lang === 'ar' }">
      <VueScrollFixedNavbar class="fixed-nav">
        <b-navbar  toggleable="lg" class="px-5 sticky bg-white" variant="">
        <b-navbar-brand href="#">Istisharat</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">{{ $t("home", {}, { locale: lang }) }}</b-nav-item>
            <b-nav-item href="#">{{ $t("itemMenu2", {}, { locale: lang }) }}</b-nav-item>
            <b-nav-item href="#">{{ $t("itemMenu3", {}, { locale: lang }) }}</b-nav-item>
            <b-nav-item href="#">{{ $t("itemMenu4", {}, { locale: lang }) }}</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto ">
            <b-nav-item @click="toggleLanguage">{{ lang === 'en' ? 'العربية' : 'English' }}</b-nav-item>
            <b-nav-item href="#">{{ $t("signIn", {}, { locale: lang }) }}</b-nav-item>
            <b-nav-item href="#">{{ $t("signUp", {}, { locale: lang }) }}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      </VueScrollFixedNavbar>
      
    </div>
  </header>
  <RouterView />
</template>
