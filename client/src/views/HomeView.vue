<script setup>
import { useStore } from '../stores/langStore'; // Update the path accordingly
import { onMounted, ref } from 'vue';
import { VCard, VCardText, VCardTitle } from 'vuetify/components/VCard'

const store = useStore();
const lang = store.lang;


</script>

<template>
  <main :class="{ 'rtl': lang === 'ar', 'arabic-font': lang === 'ar' }" class="english-font">
    <section>

      <div class="container home-container">
        <div class="row">
          <div class="col-md-6 d-flex flex-column align justify-content-center">
            <h1 class="home-title">{{ $t("HomeTitle", {}, { locale: lang }) }}</h1>
            <h2 class="home-subtitle" >{{ $t("HomeTitle2", {}, { locale: lang }) }}</h2>
            <button class="main-button" style="margin-top: 40px;">
              {{ $t("HomeButtom", {}, { locale: lang }) }}
            </button>
          </div>
          <div class="col-md-6 d-flex align-items-center ">
            <img src="../assets/img/svg/therapy-home.svg" style="max-width: 700px;" />
          </div>

        </div>
      </div>
    </section>

    <section>
      <div class="d-flex justify-content-center my-5">
        <h3><strong> {{ $t("section2Title", {}, { locale: lang }) }}</strong></h3>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="card">
              <div class="card-head d-flex align-items-center ">
                <div class="specialist-img">
                  <img src="" />

                </div>
                <div>
                  <p class="text-title mx-4">Name</p>
                  <p class="mx-4">Speciality</p>

                </div>
              </div>

              <div class="card-details">
                <p class="text-body">Description Lorem Ipsum Description Lorem Ipsum Description Lorem Ipsum Description
                  Lorem Ipsum </p>

              </div>
              <button class="card-button">More info</button>
            </div>
          </div>
          <div class="col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="card">
              <div class="card-head d-flex align-items-center ">
                <div class="specialist-img">
                  <img src="" />


                </div>
                <div>
                  <p class="text-title mx-4">Name</p>
                  <p class="mx-4">Speciality</p>

                </div>
              </div>
              <div class="card-details">
                <p class="text-body">Description Lorem Ipsum Description Lorem Ipsum Description Lorem Ipsum Description
                  Lorem Ipsum </p>

              </div>
              <button class="card-button">More info</button>
            </div>
          </div>
          <div class="col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="card">
              <div class="card-head d-flex align-items-center ">
                <div class="specialist-img">
                  <img src="" />


                </div>
                <div>
                  <p class="text-title mx-4">Name</p>
                  <p class="mx-4">Speciality</p>

                </div>
              </div>
              <div class="card-details">
                <p class="text-body">Description Lorem Ipsum Description Lorem Ipsum Description Lorem Ipsum Description
                  Lorem Ipsum </p>

              </div>
              <button class="card-button">More info</button>
            </div>
          </div>
          <div class="col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="card">
              <div class="card-head d-flex align-items-center ">
                <div class="specialist-img">
                  <img src="" />


                </div>
                <div>
                  <p class="text-title mx-4">Name</p>
                  <p class="mx-4">Speciality</p>

                </div>
              </div>

              <div class="card-details">
                <p class="text-body">Description Lorem Ipsum Description Lorem Ipsum Description Lorem Ipsum Description
                  Lorem Ipsum </p>
              </div>
              <button class="card-button">More info</button>
            </div>
          </div>
        </div>
      </div>
    </section>


  </main>
</template>

<style>
.home-container {
  margin-bottom: 200px;
}

.home-title {
  font-size: 70px;
  font-weight: 700;
}
.home-subtitle{
  font-size: 40px;
  margin-top: 10px;
}
@media (max-width:992px) {
  .home-title {
  font-size: 40px;
  font-weight: 700;
}
.home-subtitle{
  font-size: 30px;
  margin-top: 10px;
}
}
.main-button {
  border: none;
  color: white;
  background-color: #5479f7;
  border-radius: 15px;
  padding: 10px;
  max-width: 300px;
}

.card {
  width: 490px;
  height: 554px;
  margin-top: 14px;
  border-radius: 20px;
  background: #f5f5f5;
  position: relative;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;
}

.card-details {
  color: black;
  height: 100%;
  gap: .5em;
  display: grid;
  place-content: center;
}

.card-button {
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #008bf8;
  color: #fff;
  font-size: 1rem;
  padding: .5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
}

.text-body {
  color: rgb(134, 134, 134);
}

/*Text*/
.text-title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0;

}

/*Hover*/
.card:hover {
  border-color: #008bf8;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
  transform: translate(-50%, 50%);
  opacity: 1;
}

.specialist-img {
  width: 70px;
  height: 70px;
  border-radius: 9990px;
  background-color: black;
}
</style>
