# Practitioner Card

## Introduction

Practitioner Card contains content about a practitioner resource instance.

It displays and highlights the information that could be obtained from the FHIR Practitioner resource data according to the US core implementation guide.

**US Core Implementation Guide (Practitioner Resource)**<br/>
[https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-practitioner.html](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-practitioner.html)

The component can show the items including:

- Avatar Image – Practitioner Image according to the gender
- Header Content – Practitioner's Name
- Line 1 Content – Practitioner's Identifier
- Line 2 Content – Practitioner's Contact
- Optional Toolbar – Nothing is shown by default
- Optional Icon Button – Nothing is shown by default
- Custom HTML Content Title – Nothing is shown by default
- Custom HTML Content – Practitioner’s Address

!!!note

    The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)

## Example Usage

### Basic Practitioner Card

A simple example for the practitioner card with no extra configuration.

```javascript linenums="1"
<practitioner-card :data="fhirJson" />
```

![Image]

### Practitioner Card (Fields Props)

The example of passing in the “fields” props to the practitioner card. It overrides the ways it displays the “identifier” field and makes the “telecom” field to be invisible

```javascript linenums="1"
<script>
export default {
  data() {
    return {
      fields: {
        identifier: {
          // overrides the way to display “identifier” field
          value: (data) => "Secret Identifier"
        },
        telecom: {
          // hide the “telecom” field
          display: false,
        },
     }
  }
}
</script>

<template>
  <practitioner-card :data="fhirJson" :fields="fields"/>
</template>
```

![Image]

### Practitioner Card (Card Component)

For the other usage of Practitioner Card that is applicable to all the card components, may refer to [Card Archetype].

## API

- [Practitioner Card API]
