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
  <immunization-card :data="fhirJson"></immunization-card>
</template>

<style scoped></style>
