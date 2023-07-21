<script>

import PatientFHIRJson from "../json/patient/patient_1.json";

// import "bootstrap/dist/css/bootstrap.min.css"

import { onMounted, ref } from 'vue';




export default {

  components: {

    // PatientCard will be dynamically imported inside onMounted

  },

  data() {

    return {

      fhirJson: PatientFHIRJson,

      patientCard: null,

    };

  },

  setup() {

    onMounted(async () => {

      if (typeof document !== 'undefined') {

        // Dynamically import PatientCard component

        const { PatientCard } = await import('fire-starters');

        // Set the imported PatientCard component to the data property

        patientCard.value = PatientCard;




        // Import and execute bootstrap.js

        await import('bootstrap/dist/js/bootstrap.js');

      }

    });




    // Use ref for reactive data property

    const patientCard = ref(null);




    return {

      fhirJson: ref(PatientFHIRJson),

      patientCard,

    };

  },

};

</script>




<template>

  <component :is="patientCard" :data="fhirJson"></component>

</template>




<style scoped></style>