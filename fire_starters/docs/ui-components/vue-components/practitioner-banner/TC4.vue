<script>
import { PractitionerBanner } from "fire-starters";

import PractitionerFHIRJson from "../../fixtures/practitioner-example.json";

export default {
  components: {
    PractitionerBanner,
  },
  data() {
    return {
      fhirJson: PractitionerFHIRJson,
    };
  },
};
</script>

<template>
  <practitioner-banner :data="fhirJson">
    <template #iconButtonTemplate>
      <div>testing template</div>
    </template>
  </practitioner-banner>
</template>

<style scoped></style>
