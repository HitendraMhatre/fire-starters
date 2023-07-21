<script>
import { MedicationRequestCard } from "fire-starters";

import MedicationRequestFHIRJson from "../../fixtures/medication-request-example.json";

export default {
  components: {
    MedicationRequestCard,
  },
  data() {
    return {
      fhirJson: MedicationRequestFHIRJson,
    };
  },
};
</script>

<template>
  <medication-request-card :data="fhirJson">
    <template #line1Template>
      <div>testing template</div>
    </template>
  </medication-request-card>
</template>

<style scoped></style>
