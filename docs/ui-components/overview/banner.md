# Banner Archetype

## Introduction

This document illustrates the usage of the components that are categorized as banner components including:

- Patient Banner
- Practitioner Banner
- Allergy Intolerance Banner
- Medication Request Banner
- Observation Banner
- Condition Banner

!!!note

    In this document, Patient Banner will be used as the example to explain the usage of the banner archetype with different configurations. The configurations explained here should be applicable to all the other banner components.

### Basic Banner

A simple example for the banner component with no extra configuration.

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
  <patient-banner :data="fhirJson" />
</template>
```

![Image]

### Banner (Icon Button)

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
  <patient-banner:data="fhirJson">
    <template #iconButtonTemplate   >
      <button
        class="btn-close base-btn-close"
        type="button"
      />
    </template>
  </patient-banner>
</template>
```

![Image]

### Banner (Toolbar)

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
<patient-banner:data="fhirJson">
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
</patient-banner>
</template>
```

![Image]

### Banner (Custom HTML)

The example of passing in the custom HTML content to be placed in the “customHtmlContentAreaTemplate” and “customHtmlCellContentAreaTemplate” placeholder.

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
<patient-banner :data="fhirJson">
  <template #customHtmlCellContentAreaTemplate>
    <strong>Custom HTML Cell Content</strong>
  </template>

  <template #customHtmlContentAreaTemplate >
    <h5>Custom HTML Content</h5>
    <a href="https://www.hl7.org/fhir/us/core/">
      FHIR US Core Implementation Guideline
    </a>
  </template>
</patient-banner>
</template>
```

![Image]

### Banner (Options Props)

The example of passing in the “options” props to the banner. The HTML components to be rendered in the placeholder for “toolbar”, “iconButton”, “customHtml”, “customHtmlCell”, “heading1” and “heading2” could also be defined here by providing the HTML components in a string form.

```javascript linenums="1"
<script>
import PatientFHIRJson from "./patient-example.json";
export default {
  data() {
    return {
      fhirJson: PatientFHIRJson,
      options: {
        iconButton: `<button> Custom Icon Button </button>`,
        heading1: (data) => data.birthDate,
        heading2: "Custom Heading 2",
        customHtml: `Custom HTML Content`,
        customHtmlCell: "Custom HTML Cell",
      }
    }
  }
}
</script>
<template>
  <patient-banner :data="fhirJson" :options="options" />
</template>
```

![Image]()

### Banner (Event)

The example of using the “errMessages” event in the banner components.

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
  <patient-banner :data="fhirJson" @errMessages="showErrorMessage"/>
</template>
```

![Image]()

## API

- [Banner Archetype API]
