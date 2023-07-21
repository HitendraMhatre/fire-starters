<script>
import { ObservationCard } from "fire-starters";

import ObservationFHIRJson from "../../fixtures/observation-example.json";

export default {
  components: {
    ObservationCard,
  },
  data() {
    return {
      fhirJson: ObservationFHIRJson,
    };
  },
};
</script>

<template>
  <observation-card :data="fhirJson">
    <template #avatarImageTemplate>
      <div>testing template</div>
    </template>
  </observation-card>
</template>

<style scoped></style>
