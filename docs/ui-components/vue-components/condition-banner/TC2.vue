<script>
import { ConditionBanner } from "fire-starters";

import ConditionFHIRJson from "../../fixtures/condition-example.json";

export default {
  components: {
    ConditionBanner,
  },
  data() {
    return {
      fhirJson: ConditionFHIRJson,
    };
  },
};
</script>

<template>
  <condition-banner :data="fhirJson">
    <template #heading1Template>
      <div>testing template</div>
    </template>
  </condition-banner>
</template>

<style scoped></style>
