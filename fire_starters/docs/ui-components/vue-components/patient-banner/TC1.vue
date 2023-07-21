<script>
import { PatientBanner } from "fire-starters";

import PatientFHIRJson from "../json/patient/patient_1.json";

export default {
  components: {
    PatientBanner,
  },
  data() {
    return {
      fhirJson: PatientFHIRJson,
    };
  },
};
</script>

<template>
  <patient-banner :data="fhirJson"></patient-banner>
</template>

<style scoped></style>
