
<script setup>
import { useStore } from '../stores/langStore'; // Update the path accordingly
import { onMounted, ref, computed, watch } from 'vue';
import { VCard, VCardText, VCardTitle } from 'vuetify/components/VCard'
import { BIconSearch } from 'bootstrap-vue';

const store = useStore();
const lang = store.lang;

const availabilitySelected = ref([]); // Must be an array reference!
const durationSelected = ref([]);
const genderSelected = ref([]);
const feesOptions = [
    "Lowest price",
    "Highest price"
]
const availabilityOptions = [
    { text: 'Today', value: 'orange' },
    { text: 'This Week', value: 'apple' },
    { text: 'Emergency (Start now)', value: 'pineapple' }
];

const intrestOptions = [
    { value: null, text: 'Please select some item' },
    { value: 'a', text: 'This is First option' },
    { value: 'b', text: 'Default Selected Option' },
    { value: 'c', text: 'This is another option' },
    { value: 'd', text: 'This one is disabled', disabled: true }
];
const durationOptions = ["30 min.", "60 min."];
const genderOptions = ["Female", "Male"];

const specRows = [{ "name": "test1", "desc": "lorem ipsum" }, { "name": "test2", "desc": "lorem ipsum" }, { "name": "test3", "desc": "lorem ipsum" }, { "name": "test4", "desc": "lorem ipsum" }, { "name": "test5", "desc": "lorem ipsum" }];
</script>

<template>
    <div :class="{ 'rtl': lang === 'ar', 'arabic-font': lang === 'ar' }" class="english-font">
        <div class="container main-content">
            <h1 style="font-weight: 700;">Find your specialists here</h1>
            <div class="row">
                <div class="d-flex justify-content-between w-100 mt-5 p-0">
                    <b-input-group  class="w-50 d-flex align-items-center justify-content-between ">
                        <b-icon-search style="width: 30px;"></b-icon-search>
                        <b-form-input></b-form-input>
                    </b-input-group>

                    <b-form-group class="fees-group" v-slot="{ ariaDescribedby }">
                        <b-form-radio-group id="btn-radios-1" class="radio-fees" v-model="selectedFee"
                            :options="feesOptions" :aria-describedby="ariaDescribedby" name="radios-btn-default"
                            buttons></b-form-radio-group>
                    </b-form-group>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-3 col-lg-3">
                    <div class="row filter p-3">
                        <h5>Availability</h5>
                        <b-form-group v-slot="{ ariaDescribedby }">
                            <b-form-checkbox-group class="availability-group" id="checkbox-group-1"
                                v-model="availabilitySelected" :options="availabilityOptions" name="buttons-1"
                                :aria-describedby="ariaDescribedby"></b-form-checkbox-group>
                        </b-form-group>
                    </div>
                    <div class="row filter  p-3">
                        <h5>Specific date or range</h5>
                        <div class="d-flex flex-column">
                            <b-form-datepicker id="startdate-datepicker" type="text" locale="en-US"
                                v-model="startDateSearch" class="mb-2 col "></b-form-datepicker>
                            <b-form-datepicker id="endate-datepicker" v-model="endDateSearch"
                                class="mb-2 col"></b-form-datepicker>
                        </div>
                    </div>
                    <div class="row filter  p-3">
                        <h5>Areas of interest</h5>
                        <b-form-select class="border rounded p-2" v-model="selected"
                            :options="intrestOptions"></b-form-select>

                    </div>
                    <div class="row filter p-3">
                        <h5>Duration</h5>
                        <b-form-group v-slot="{ ariaDescribedby }">
                            <b-form-checkbox-group id="checkbox-group-duration" v-model="durationSelected"
                                :options="durationOptions" name="buttons-1"
                                :aria-describedby="ariaDescribedby"></b-form-checkbox-group>
                        </b-form-group>
                    </div>
                    <div class="row filter p-3">
                        <h5>Gender</h5>
                        <b-form-group v-slot="{ ariaDescribedby }">
                            <b-form-checkbox-group id="checkbox-group-gender" v-model="genderSelected"
                                :options="genderOptions" name="buttons-1"
                                :aria-describedby="ariaDescribedby"></b-form-checkbox-group>
                        </b-form-group>
                    </div>
                </div>
                <div class="col">
                    <div v-for="(row, index) in specRows" :key="index" class="row">
                        <div v-if="specRows[index * 2]" class="col-6 spec-card">
                            <div class="inner-spec-card p-3">
                                <h5>{{ specRows[index * 2].name }}</h5>
                                <p>{{ specRows[index * 2].desc }}</p>
                            </div>
                        </div>
                        <div v-if="specRows[index * 2 + 1]" class="col-6 spec-card pr-0">
                            <div class="inner-spec-card p-3">
                                <!-- Content for the second card -->
                                <h5>{{ specRows[index * 2 + 1].name }}</h5>
                                <p>{{ specRows[index * 2 + 1].desc }}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
  
<style>
@media (min-width: 1400px) {
    .container {
        max-width: 1140px !important;
    }
}

.spec-card {
    margin-bottom: 20px;

}

.fees-group {
    display: flex;
    justify-content: end;
}

.radio-fees .btn {
    background-color: white;

    border-color: rgba(194, 194, 194, 0.468);
    color: black;
}

.radio-fees .active {
    background-color: rgb(120, 120, 120) !important;
    color: rgb(255, 255, 255);
}

.radio-fees input {
    visibility: hidden;
    display: none;
}

.inner-spec-card {
    background-color: white;

    border-radius: 10px;
    height: 200px;

}

.filter {
    background-color: white;

    border: 1px solid rgba(194, 194, 194, 0.468);
    border-radius: 10px;

    margin-bottom: 20px;
}

.filter h5{
    font-weight: 600;
    margin-bottom: 20px;
}


.categ-button {
    background-color: transparent;
    color: black;
    border: none;
    text-align: left;
    transition: 0.3s ease-in-out !important;
    border-radius: 0;


}

.categ-button:hover {
    border: none !important;

    border-bottom: 1px solid rgb(0, 174, 194) !important;
    background-color: rgb(251, 251, 251) !important;
    color: black;

}

.availability-group .btn {
    display: flex;
    justify-content: space-around !important;
    background-color: white;
    border: 0;
    color: black;
}

.availability-group .btn:active {
    background-color: white;
    color: black;
}
</style>
  