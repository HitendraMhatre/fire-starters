<script>
import { ImmunizationCard } from "fire-starters";

import ImmunizationFHIRJson from "../../fixtures/immunization-example.json";

export default {
  components: {
    ImmunizationCard,
  },
  data() {
    return {
      fhirJson: ImmunizationFHIRJson,
    };
  },
};
</script>

<template>
  <immunization-card :data="fhirJson">
    <template #line1Template>
      <div>testing template</div>
    </template>
  </immunization-card>
</template>

<style scoped></style>
