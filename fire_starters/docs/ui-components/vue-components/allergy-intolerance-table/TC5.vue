<script>
import { AllergyIntoleranceTable } from "fire-starters";

import AllergyIntoleranceFHIRJson from "../../fixtures/allergy-intolerance-table-example.json";

export default {
  components: {
    AllergyIntoleranceTable,
  },
  data() {
    return {
      fhirJson: AllergyIntoleranceFHIRJson,
    };
  },
};
</script>

<template>
  <allergy-intolerance-table :data="fhirJson"></allergy-intolerance-table>
</template>

<style scoped></style>
