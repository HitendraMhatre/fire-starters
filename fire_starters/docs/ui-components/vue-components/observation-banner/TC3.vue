<script>
import { ObservationBanner } from "fire-starters";

import ObservationFHIRJson from "../../fixtures/observation-example.json";

export default {
  components: {
    ObservationBanner,
  },
  data() {
    return {
      fhirJson: ObservationFHIRJson,
    };
  },
};
</script>

<template>
  <observation-banner :data="fhirJson">
    <template #heading2Template>
      <div>testing template</div>
    </template>
  </observation-banner>
</template>

<style scoped></style>
