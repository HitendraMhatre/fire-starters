<script>
import { PatientTable } from "fire-starters";

import PatientFHIRJson from "../../fixtures/patient-table-example.json";

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
