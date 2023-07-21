# Observation Card

## Introduction

Observation Card contains content about an observation resource instance.

It displays and highlights the information that could be obtained from the FHIR Observation resource data.

**Observation Resource**<br/>
[https://hl7.org/fhir/R4/observation.html](https://hl7.org/fhir/R4/observation.html)

The component can show the items including:

- Avatar Image – Observation Image
- Header Content – Type of observation
- Line 1 Content – Actual result
- Line 2 Content – Effective Value (Status)
- Optional Toolbar – Nothing is shown by default
- Optional Icon Button – Nothing is shown by default
- Custom HTML Content Title – Nothing is shown by default
- Custom HTML Content – Subject and Category

!!!note

    The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)

## Example Usage

### Basic Observation Card

A simple example for the observation card with no extra configuration.

```javascript linenums="1"
<observation-card :data="fhirJson" />
```

![Image]

### Observation Card (Fields Props)

The example of passing in the “fields” props to the observation card. It overrides the ways it displays the status field and makes the “category” field to be invisible.

```javascript linenums="1"
<script>
export default {
  data() {
    return {
      fields: {
        status: {
          // overrides the way to display “status” field
          value: (data) => data?.status,
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
  <observation-card :data="fhirJson" :fields="fields"/>
</template>
```

![Image]

### Observation Card (Card Component)

For the other usage of Observation Card that is applicable to all the card components, may refer to [Card Archetype].

## API

- [Observation Card API]
