<script>
import { PatientCard } from "fire-starters";

import PatientFHIRJson from "../../fixtures/patient-example.json";

export default {
  components: {
    PatientCard,
  },
  data() {
    return {
      fhirJson: PatientFHIRJson,
    };
  },
};
</script>

<template>
  <patient-card :data="fhirJson">
    <template #avatarImageTemplate>
      <div>testing template</div>
    </template>
  </patient-card>
</template>

<style scoped></style>
