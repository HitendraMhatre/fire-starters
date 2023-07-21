<script>
import { AllergyIntoleranceBanner } from "fire-starters";

import AllergyIntoleranceFHIRJson from "../../fixtures/allergy-intolerance-example.json";

export default {
  components: {
    AllergyIntoleranceBanner,
  },
  data() {
    return {
      fhirJson: AllergyIntoleranceFHIRJson,
    };
  },
};
</script>

<template>
  <allergy-intolerance-banner :data="fhirJson">
    <template #heading2Template>
      <div>testing template</div>
    </template>
  </allergy-intolerance-banner>
</template>

<style scoped></style>
