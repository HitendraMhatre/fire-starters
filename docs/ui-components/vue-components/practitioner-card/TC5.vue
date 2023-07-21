<script>
import { PractitionerCard } from "fire-starters";

import PractitionerFHIRJson from "../../fixtures/practitioner-example.json";

export default {
  components: {
    PractitionerCard,
  },
  data() {
    return {
      fhirJson: PractitionerFHIRJson,
    };
  },
};
</script>

<template>
  <practitioner-card :data="fhirJson">
    <template #line2Template>
      <div>testing template</div>
    </template>
  </practitioner-card>
</template>

<style scoped></style>
