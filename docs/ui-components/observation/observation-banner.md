# Observation Banner

## Introduction

Observation Banner contains content about an observation resource instance.

It displays and highlights the information that could be obtained from the FHIR Observation resource data.

**Observation Resource**<br/>
[https://hl7.org/fhir/R4/observation.html](https://hl7.org/fhir/R4/observation.html)

The component can show the items including:

- Header 1 Content – Type of Observation
- Header 2 Content – Actual result
- Optional Icon Button – Nothing is shown by default
- Optional Toolbar – Nothing is shown by default
- Custom HTML Cell Content – Effective Value (Status)
- Custom HTML Content – Subject and Category

!!!note

    The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)

## Example Usage

### Basic Observation Banner

A simple example for the observation banner with no extra configuration.

```javascript linenums="1"
<observation-banner :data="fhirJson" />
```

![Image]

### Observation Banner (Fields Props)

The example of passing in the “fields” props to the observation banner. It overrides the ways it displays the “status” field and makes the “category” field to be invisible.

```javascript linenums="1"
<script>
export default {
  data() {
    return {
      fields: {
        status: {
          // overrides the way to display “status” field
          value: (data) => data?.status
        },
        category: {
          // hide the “category” field
          display: false,
        },
     }
  }
}
</script>

<template>
  <observation-banner :data="fhirJson" :fields="fields"/>
</template>
```

![Image]

### Observation Banner (Banner Component)

For the other usage of Observation Banner that is applicable to all the banner components, may refer to [Banner Archetype].

## API

- [Observation Banner API]
