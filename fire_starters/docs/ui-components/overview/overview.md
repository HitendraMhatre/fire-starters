# FIRE Starters - Overview

FIRE Starters is a Vue3 (Bootstrap) Open Source library that provides out-of-the-box components that integrate seamlessly with the FHIR Version R4 US Core Implementation Guide.

This library aims to assist the development of FHIR-based web applications by providing highly customizable and responsive components.

For more information on the US Core profile, visit [FHIR US Core Implementation Guide](https://build.fhir.org/ig/HL7/US-Core/).

## Installation

```
npm install --save fire-starters
```

## Quick Start

Here's a quick example to get your started:

```javascript linenums="1"
<script>
import { PatientCard } from "fire-starters";
import PatientJSON from "@/patient-fhir-example.json"; // (1)

export default {
  components: { PatientCard },
  data() {
    return {
      fhirJson: PatientJSON,
    };
  },
};
</script>
<template>
  <PatientCard :data="fhirJson" />
</template>

```

1.  Replace with the actual JSON file path
