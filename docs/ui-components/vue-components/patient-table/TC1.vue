<script>
import { PatientTable } from "fire-starters";

import PatientFHIRJson from "../json/patient/patient-table.json";

export default {
  components: {
    PatientTable,
  },
  data() {
    return {
      fhirJson: PatientFHIRJson,
    };
  },
};
</script>

<template>
  <patient-table :data="fhirJson"></patient-table>
</template>

<style scoped></style>
