<script>
import { PractitionerBanner } from "fire-starters";

import PractitionerFHIRJson from "../json/practitioner/practitioner_1.json";

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
  <practitioner-banner :data="fhirJson"></practitioner-banner>
</template>

<style scoped></style>
