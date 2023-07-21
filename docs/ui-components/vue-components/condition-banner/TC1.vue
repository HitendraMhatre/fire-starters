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
  <condition-banner :data="fhirJson"></condition-banner>
</template>

<style scoped></style>
