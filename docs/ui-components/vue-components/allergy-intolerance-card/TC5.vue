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
  <allergy-intolerance-card :data="fhirJson">
    <template #line2Template>
      <div>testing template</div>
    </template>
  </allergy-intolerance-card>
</template>

<style scoped></style>
