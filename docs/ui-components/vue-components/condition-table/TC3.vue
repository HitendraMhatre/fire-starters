<script>
import { ConditionTable } from "fire-starters";

import ConditionFHIRJson from "../../fixtures/condition-table-example.json";

export default {
  components: {
    ConditionTable,
  },
  data() {
    return {
      fhirJson: ConditionFHIRJson,
    };
  },
};
</script>

<template>
  <condition-table :data="fhirJson"></condition-table>
</template>

<style scoped></style>
