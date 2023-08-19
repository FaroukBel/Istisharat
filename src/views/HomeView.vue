<script setup>
import { useStore } from '../stores/langStore'; // Update the path accordingly
import { onMounted, ref, computed, watch } from 'vue';
import { VCard, VCardText, VCardTitle } from 'vuetify/components/VCard'

const store = useStore();
const lang = store.lang;


const specialtySearch = ref('');
const specNameSearch = ref('');
const startDateSearch = ref('');
const endDateSearch = ref('');

const selected = ref(null);
const options = [
          { value: null, text: 'Please select some item' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Default Selected Option' },
          { value: 'c', text: 'This is another option' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ];

</script>

<template>
  <main :class="{ 'rtl': lang === 'ar', 'arabic-font': lang === 'ar' }" class="english-font">
    <section>
      <div class="main-background-img">

      </div>
      <div class="container home-container">

        <div class="row">
          <div>
            <h1 class="home-title">{{ $t("HomeTitle", {}, { locale: lang }) }}</h1>
            <h2 class="home-subtitle">{{ $t("HomeTitle2", {}, { locale: lang }) }}</h2>
          </div>
          <div class="container inner-main-container mt-5">
            <div class="row">
              <div class="col-sm-12 col-lg-6 p-4 d-flex flex-column">
                <h4>Search by specialty or interests</h4>
                <b-form-input class="p-2" v-model="specialtySearch" placeholder="Start typing a specialty"></b-form-input>

              </div>

              <div class="col-sm-12 col-lg-6 p-4 d-flex flex-column">
                <h4>Specialist's name</h4>
                <b-form-input class="p-2" v-model="specNameSearch" placeholder="Search for specialists by name"></b-form-input>


              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-lg-6 p-4 d-flex flex-column">
                <h4>Fees</h4>
                <b-form-select class="border rounded p-2" v-model="selected"  :options="options"></b-form-select>

              </div>


              <div class="col-sm-12 col-lg-6 p-4 d-flex flex-column">
                <h4>Availability</h4>
                <div class="row">
                  <b-form-datepicker id="startdate-datepicker"  type="text" locale="en-US" v-model="startDateSearch" class="mb-2 col "></b-form-datepicker>
                <b-form-datepicker id="endate-datepicker" v-model="endDateSearch" class="mb-2 col ml-2"></b-form-datepicker>
                </div>
                
                <div class="w-100 d-flex justify-content-end">
                  <button class="main-button w-100" style="margin-top: 40px;">
                    {{ $t("HomeButtom", {}, { locale: lang }) }}
                  </button>
                </div>

              </div>
            </div>
          </div>
          <!-- <div class="col-md-6 d-flex flex-column align justify-content-center">
            <h1 class="home-title">{{ $t("HomeTitle", {}, { locale: lang }) }}</h1>
            <h2 class="home-subtitle">{{ $t("HomeTitle2", {}, { locale: lang }) }}</h2>
            <button class="main-button" style="margin-top: 40px;">
              {{ $t("HomeButtom", {}, { locale: lang }) }}
            </button>
          </div>
          <div class="col-sm-4 col-md-6 d-flex align-items-center justify-content-end ">
            <img src="../assets/img/svg/therapy-home.svg" style="max-width: 700px;" />
          </div> -->

        </div>
      </div>
    </section>

    <section>

      <div class="container px-4">
        <div class="row find-title text-center">
          <h2><strong>Find your speacialist in 3 easy steps</strong></h2>
        </div>
        <div class="row">
          <div class="px-2 col-lg-4 col-md-4 .col-sm-12">
            <div class="card">
              <div class="box">
                <div class="first-step-content">
                  <h2>01</h2>
                  <h3>Sign-up as a customer</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore
                    inventore?
                  </p>
                  <a href="#">Read More</a>
                  <img src="../assets/img/svg/sign-up.svg" />
                </div>
              </div>
            </div>
          </div>

          <div class="px-2 col-lg-4 col-md-4 .col-sm-12">

            <div class="card  ">
              <div class="box">
                <div class="second-step-content">
                  <h2>02</h2>
                  <h3>Book your session</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore
                    inventore?
                  </p>
                  <a href="#">Read More</a>
                  <img src="../assets/img/svg/booking-svg.svg" />

                </div>
              </div>
            </div>
          </div>
          <div class="px-2 col-lg-4 col-md-4 .col-sm-12">

            <div class="card  ">
              <div class="box">
                <div class="third-step-content">
                  <h2>03</h2>
                  <h3>Start your journey</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore
                    inventore?
                  </p>
                  <a href="#">Read More</a>
                  <img src="../assets/img/svg/journey.svg" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="family-therapy-section my-5 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class=" col-md-6 col-lg-6">
            <h3>Family therapy</h3>
            <p>Meet experienced therapists who will walk with you on your journey. Our website connects you with skilled
              professionals in family therapy. These experts help improve understanding and communication in your family.
              With their guidance, you'll work together to solve problems and get closer as a family. Join hands with our
              therapists to make your family bonds stronger and happier.</p>
            <button class="service-button">Find your therapists</button>
          </div>
          <div class="group-therapy-img col-md-6 col-lg-6">
            <img src="../assets/img/svg/happy-family.svg" alt="Group therapy">
          </div>
        </div>
      </div>


    </section>
    <section class="specialist-section">
      <div class="d-flex justify-content-center my-5">
        <h3><strong> {{ $t("section2Title", {}, { locale: lang }) }}</strong></h3>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex justify-content-center">
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
                <p class="text-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum necessitatibus iusto
                  labore sequi, totam reprehenderit quos? Numquam, nostrum blanditiis quasi, rem, eaque tempora est sint
                  esse iste officia molestias quidem!</p>

              </div>
              <button class="card-button">More info</button>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex justify-content-center">
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
                <p class="text-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam accusamus
                  reiciendis cupiditate minima architecto esse deleniti. Sit vitae nostrum unde sunt reiciendis a
                  dignissimos sint commodi, natus expedita fugit optio.</p>

              </div>
              <button class="card-button">More info</button>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex justify-content-center">
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
                <p class="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reprehenderit quia
                  laboriosam, est vel quidem libero dolorum neque sit. Harum dicta pariatur assumenda ab soluta et
                  voluptatibus repellendus veniam temporibus.</p>

              </div>
              <button class="card-button">More info</button>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex justify-content-center">
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
                <p class="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ab exercitationem
                  ipsam vero nobis expedita unde. Impedit incidunt veritatis animi aperiam non deserunt et accusamus,
                  nobis distinctio voluptate commodi quia.</p>
              </div>
              <button class="card-button">More info</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="group-therapy-section my-5 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class=" col-md-6 col-lg-6">
            <h3>Group therapy</h3>
            <p>Meet experienced therapists who will walk with you on your journey. Our website connects you with skilled
              professionals in family therapy. These experts help improve understanding and communication in your family.
              With their guidance, you'll work together to solve problems and get closer as a family. Join hands with our
              therapists to make your family bonds stronger and happier.</p>
            <button>More info</button>
          </div>
          <div class="group-therapy-img col-md-6 col-lg-6">
            <img src="../assets/img/svg/group-therapy.svg" alt="Group therapy">
          </div>
        </div>
      </div>


    </section>
    <section class="specialist-section">
      <div class="d-flex justify-content-center my-5">
        <h3><strong> {{ $t("section2Title", {}, { locale: lang }) }}</strong></h3>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex justify-content-center">
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
                <p class="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla quaerat nisi,
                  magnam accusamus nihil dolorum aliquam ex. Laudantium commodi obcaecati quam nemo aut officiis dolores!
                  Harum rem culpa sint!</p>

              </div>
              <button class="card-button">More info</button>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex justify-content-center">
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
                <p class="text-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum voluptas, saepe
                  officia sint consequuntur reprehenderit totam vitae. Repellendus eligendi, laborum asperiores corporis
                  accusamus id pariatur odio nesciunt quo modi ipsum.</p>

              </div>
              <button class="card-button">More info</button>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex justify-content-center">
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
                <p class="text-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, officia! Nihil
                  alias dignissimos blanditiis temporibus ducimus at quidem obcaecati, tempora cumque iusto sunt, eaque
                  eum libero architecto voluptate laboriosam ullam.</p>

              </div>
              <button class="card-button">More info</button>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex justify-content-center">
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
                <p class="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati velit
                  nemo necessitatibus odio quidem, minus dolores tempora. Esse veniam voluptate ut illo quas quam
                  blanditiis modi iusto quaerat. Dolore?</p>
              </div>
              <button class="card-button">More info</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="group-therapy-section">
      <div class="w-100">


      </div>
    </section>




  </main>
  <Footer></Footer>
</template>

<style>
.home-container {
  margin-bottom: 200px;
  position: relative;
}

.main-background-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 550px !important;
  z-index: 0;
  background-image: url("../assets/img/main-img-happy-family.avif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.home-title {
  font-size: 70px;
  font-weight: 700;
}

.home-subtitle {
  font-size: 40px;
  margin-top: 10px;
}

.inner-main-container {

  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.134);
  width: 1000px !important;

}


.main-button {
  border: none;
  color: white;
  background-color: #5479f7;
  border-radius: 15px;
  padding: 10px;
  max-width:200px;
}

.card {
  position: relative;
  height: 554px;
  margin-top: 14px;
  border-radius: 30px !important;
  background: #f5f5f5;
  position: relative;
  padding: 1.8rem;
  border: 1px solid #c3c6ce;
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

.card h2 {
  position: absolute;
  top: -10px;
  right: 30px;
  font-size: 6rem;
  color: rgba(0, 0, 0, 0.064);
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

.specialist-section {
  height: 100%;
}

.group-therapy-section {

  width: 100%;
  height: 70vh;
  background-color: white;
}

.family-therapy-section {

  width: 100%;
  height: 70vh;
  background-color: white;

}

.home-service-card {
  width: 80%;
  height: 250px;
  padding: 20px;

  margin-top: 30px;
  margin-left: 30px;
}

.service-button {
  background-color: #008bf8;
  border-radius: 20px;
  padding: 10px;
  color: white;
}

.first-step-content img {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100px;
}

.second-step-content img {
  position: absolute;
  bottom: -70px;
  right: 0;
  width: 150px;
}

.third-step-content img {
  position: absolute;
  top: -88px;
  right: 0;
  width: 100px;
}


/* RESPONSIVE */

@media (max-width:992px) {
  .home-title {
    font-size: 40px;
    font-weight: 700;
  }

  .find-title {
    margin-bottom: 100px;
  }

  .home-subtitle {
    font-size: 30px;
    margin-top: 10px;
  }
}

@media (max-width: 767px) {
  .third-step-content img {
    position: absolute;
    top: 96px;
    right: 0;
    width: 100px;
  }

}
</style>
