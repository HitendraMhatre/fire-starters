<script>
import { PatientBanner } from "fire-starters";

import PatientFHIRJson from "../../fixtures/patient-example.json";

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
  <patient-banner :data="fhirJson">
    <template #heading2Template>
      <div>testing template</div>
    </template>
  </patient-banner>
</template>

<style scoped></style>
