<script>
import { ObservationTable } from "fire-starters";

import ObservationFHIRJson from "../../fixtures/observation-table-example.json";

export default {
  components: {
    ObservationTable,
  },
  data() {
    return {
      fhirJson: ObservationFHIRJson,
    };
  },
};
</script>

<template>
  <observation-table :data="fhirJson"></observation-table>
</template>

<style scoped></style>
