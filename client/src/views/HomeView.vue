<script setup>
import { useStore } from '../stores/langStore'; // Update the path accordingly
import { onMounted, ref } from 'vue';

const store = useStore();
const lang = store.lang;


</script>

<template>
  <main  :class="{'rtl': lang === 'ar' }">

    <div class="container home-container" >
        <div class="row">
          <div class="col-md-6 d-flex flex-column align justify-content-center">
                <h1 style="font-size: 70px;">{{ $t("HomeTitle", {},{locale:lang}) }}</h1>
                <h2 style="margin-top: 10px; font-size: 40px;">{{ $t("HomeTitle2", {},{locale:lang}) }}</h2>
                <button class="main-button" style="margin-top: 40px;">
                  {{ $t("HomeButtom", {},{locale:lang}) }}
                </button>
            </div>
            <div class="col-md-6 d-flex align-items-center ">
              <img src="../assets/img/svg/therapy-home.svg" style="width: 700px;" />
            </div>
         
        </div>
    </div>

    <div class="container home-container" :class="{ 'rtl': lang === 'ar' }">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center">
                <h1>{{ $t("HomeTitle", {},{locale:lang}) }}</h1>
            </div>
            <div class="col-md-6 d-flex align-items-center ">
              <img src="../assets/img/therapy-home.jpg" style="width: 700px;"/>
            </div>
         
        </div>
    </div>
  </main>
</template>

<style>
.home-container{
  height: 1000px;
}
.main-button{
  border: none;
  background-color: aquamarine;
  border-radius: 15px;
  padding: 10px;
  max-width: 300px;
}
</style>
