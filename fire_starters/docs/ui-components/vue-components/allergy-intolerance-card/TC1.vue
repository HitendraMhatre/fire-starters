<script>
import { AllergyIntoleranceCard } from "fire-starters";

import AllergyIntoleranceFHIRJson from "../../fixtures/allergy-intolerance-example.json";

export default {
  components: {
    AllergyIntoleranceCard,
  },
  data() {
    return {
      fhirJson: AllergyIntoleranceFHIRJson,
    };
  },
};
</script>

<template>
  <allergy-intolerance-card :data="fhirJson"></allergy-intolerance-card>
</template>

<style scoped></style>
