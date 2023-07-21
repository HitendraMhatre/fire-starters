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
      options: {
        pagination: false,
      },
    };
  },
};
</script>

<template>
  <observation-table :data="fhirJson" :options="options"></observation-table>
</template>

<style scoped></style>
