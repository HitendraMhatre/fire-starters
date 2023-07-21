# Card Archetype

## Introduction

This document illustrates the usage of the components that are categorized as card components including:

- Patient Card
- Immunization Card
- Practitioner Card
- Allergy Intolerance Card
- Medication Request Card
- Observation Card
- Condition Card

!!!note

    In this document, Patient Card will be used as the example to explain the usage of the card components with different configurations. The configurations explained here should be applicable to all of the other card components.

### Basic Card

A simple example for the card component with no extra configuration.

```javascript linenums="1"
<script>
import PatientFHIRJson from "./patient-example.json";
export default {
  data() {
    return {
      fhirJson: PatientFHIRJson
    }
  }
}
</script>
<template>
  <patient-card :data="fhirJson" />
</template>
```

![Image]

### Card (Icon Button)

The example of passing in the custom icon button to be placed in the “iconButtonTemplate” placeholder.

```javascript linenums="1"
<script>
import PatientFHIRJson from "./patient-example.json";
export default {
  data() {
    return {
      fhirJson: PatientFHIRJson
    }
  }
}
</script>
<template>
  <patient-card :data="fhirJson">
    <template #iconButtonTemplate>
      <button
        class="btn-close base-btn-close"
        type="button"
      />
    </template>
  </patient-card>
</template>
```

![Image]

### Card (Toolbar)

The example of passing in the custom toolbar to be placed in the “toolbarTemplate” placeholder.

```javascript linenums="1"
<script>
import PatientFHIRJson from "./patient-example.json";
export default {
  data() {
    return {
      fhirJson: PatientFHIRJson
    }
  }
}
</script>
<template>
<patient-card :data="fhirJson">
  <template #toolbarTemplate>
       <button
      class="btn btn-primary dropdown-toggle text-wrap base-btn-download"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Download
        </button>
        <ul class="dropdown-menu base-btn-download-dropdown">
          <li
            class="dropdown-item base-btn-download-dropdown-item base-btn-download-dropdown-item-json"
          >
            JSON
          </li>
          <li
            class="dropdown-item base-btn-download-dropdown-item base-btn-download-dropdown-item-xml"
          >
            XML
          </li>
          <li
            class="dropdown-item base-btn-download-dropdown-item base-btn-download-dropdown-item-pdf"
          >
            PDF
          </li>
        </ul>
  </template>
</patient-card>
</template>
```

![Image]

### Card (Custom HTML)

The example of passing in the custom HTML content to be placed in the “customHtmlContentAreaTemplate” placeholder.

```javascript linenums="1"
<script>
import PatientFHIRJson from "./patient-example.json";
export default {
  data() {
    return {
      fhirJson: PatientFHIRJson
    }
  }
}
</script>
<template>
<patient-card :data="fhirJson">
  <template #customHtmlContentAreaTemplate >
    <h5>Custom HTML Content</h5>
    <a href="https://www.hl7.org/fhir/us/core/">
      FHIR US Core Implementation Guideline
    </a>
  </template>
</patient-card>
</template>
```

![Image]

### Card (Options Props)

The example of passing in the “options” props to the patient card. The HTML components to be rendered in the placeholder for “toolbar”, “iconButton”, “customHtml”, “customHtmlTitle”, “header”, “line1”, “line2” could also be defined here by providing the html components in a string form.

```javascript linenums="1"
<script>
import PatientFHIRJson from "./patient-example.json";
export default {
  data() {
    return {
      fhirJson: PatientFHIRJson,
      options: {
        iconButton: `<div> Custom Icon Button </div>`,
        header: (data) => data.birthDate,
        line1: "Custom Line1",
        hasExpandableSection: false,
      }
    }
  }
}
</script>
<template>
  <patient-card :data="fhirJson" :options="options" />
</template>
```

![Image]()

### Card (Event)

The example of using the “errMessages” event in the card component.

!!!note

    Try to delete the data from the example JSON file such as identifier field. The errMessages event will only be triggered when there is error with the data.

```javascript linenums="1"
<script>
import PatientFHIRJson from "./patient-example.json";
export default {
  data() {
   return {
      fhirJson: PatientFHIRJson
    }
  },
  methods: {
    showErrorMessage(value) {
      console.log(value);
    },
  },
}
</script>
<template>
  <patient-card :data="fhirJson" @errMessages="showErrorMessage"/>
</template>
```

![Image]()

## API

- [Card Archetype API]
