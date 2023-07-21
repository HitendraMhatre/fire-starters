<script>
import { ConditionCard } from "fire-starters";

import ConditionFHIRJson from "../../fixtures/condition-example.json";

export default {
  components: {
    ConditionCard,
  },
  data() {
    return {
      fhirJson: ConditionFHIRJson,
    };
  },
};
</script>

<template>
  <condition-card :data="fhirJson">
    <template #line2Template>
      <div>testing template</div>
    </template>
  </condition-card>
</template>

<style scoped></style>
