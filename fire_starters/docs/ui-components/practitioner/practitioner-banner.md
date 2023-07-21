# Practitioner Banner

## Introduction

Practitioner Banner contains content about a practitioner resource instance.

It displays and highlights the information that could be obtained from the FHIR Practitioner resource data according to the US core implementation guide.

**US Core Implementation Guide (Practitioner Resource)**<br/>
[https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-practitioner.html](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-practitioner.html)

The component can show the items including:

- Header 1 Content – Practitioner's Name
- Header 2 Content – Practitioner's Identifier
- Optional Icon Button – Nothing is shown by default
- Optional Toolbar – Nothing is shown by default
- Custom HTML Cell Content – Practitioner’s Contact
- Custom HTML Content – Practitioner’s Address

!!!note

    The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)

## Example Usage

### Basic Practitioner Banner

https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-practitioner.html

```javascript linenums="1"
<practitioner-banner :data="fhirJson" />
```

![Image]

### Practitioner Banner (Fields Props)

The example of passing in the “fields” props to the practitioner banner. It overrides the ways it displays the “identifier” field and makes the “telecom” field to be invisible.

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
  <practitioner-banner :data="fhirJson" :fields="fields"/>
</template>
```

![Image]

### Practitioner Banner (Banner Component)

For the other usage of Practitioner Banner that is applicable to all the banner components, may refer to [Banner Archetype].

## API

- [Practitioner Banner API]
