<script>
import { MedicationRequestTable } from "fire-starters";

import MedicationRequestFHIRJson from "../../fixtures/medication-request-table-example.json";

export default {
  components: {
    MedicationRequestTable,
  },
  data() {
    return {
      fhirJson: MedicationRequestFHIRJson,
    };
  },
};
</script>

<template>
  <medication-request-table :data="fhirJson"></medication-request-table>
</template>

<style scoped></style>
