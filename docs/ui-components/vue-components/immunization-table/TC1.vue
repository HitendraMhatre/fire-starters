<script>
import { ImmunizationTable } from "fire-starters";

import ImmunizationFHIRJson from "../../fixtures/immunization-table-example.json";

export default {
  components: {
    ImmunizationTable,
  },
  data() {
    return {
      fhirJson: ImmunizationFHIRJson,
    };
  },
};
</script>

<template>
  <immunization-table :data="fhirJson"></immunization-table>
</template>

<style scoped></style>
