<script>
import { MedicationRequestBanner } from "fire-starters";

import MedicationRequestFHIRJson from "../../fixtures/medication-request-example.json";

export default {
  components: {
    MedicationRequestBanner,
  },
  data() {
    return {
      fhirJson: MedicationRequestFHIRJson,
    };
  },
};
</script>

<template>
  <medication-request-banner :data="fhirJson">
    <template #iconButtonTemplate>
      <div>testing template</div>
    </template>
  </medication-request-banner>
</template>

<style scoped></style>
