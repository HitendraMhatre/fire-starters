# Immunization Card

## Introduction

Immunization Card contains content about an immunization resource instance.

It displays and highlights the information that could be obtained from the FHIR Immunization resource data according to the US core implementation guide.

**US Core Implementation Guide (Immunization Resource)**<br/>
[https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-immunization.html](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-immunization.html)

The component can show the items including:

- Avatar Image – Immunization Image
- Header Content – Immunization's Vaccine Code
- Line 1 Content - Immunization's Occurrence Data Time (Immunization’s Dose Quantity) Immunization's Status
- Line 2 Content – Immunization's Status Reason
- Optional Toolbar – Nothing is shown by default
- Optional Icon Button – Nothing is shown by default
- Custom HTML Content Title – Nothing is shown by default
- Custom HTML Content – Immunization’s Patient and Immunization’s Primary Source

!!!note

    The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)

## Example Usage

### Basic Immunization Card

A simple example for the immunization card with no extra configuration.

```javascript linenums="1"
<immunization-card :data="fhirJson" />
```

![Image]

### Immunization Card (Fields Props)

The example of passing in the “fields” props to the immunization card. It overrides the ways it displays the “statusReason” field and also makes the “doseQuantity” field to be invisible.

```javascript linenums="1"
<script>
export default {
  data() {
    return {
      fields: {
        statusReason: {
          // overrides the way to display “statusReason” field
          value: (data) => data.statusReason ? data.statusReason : "No Reason    ",
        },
        doseQuantity: {
          // hide the “doseQuantity” field
          display: false,
        },
     }
  }
}
</script>

<template>
  <immunization-card :data="fhirJson" :fields="fields"/>
</template>
```

![Image]

### Immunization Card (Card Component)

For the other usage of Immunization Card that is applicable to all the card components, may refer to [Card Archetype].

## API

- [Immunization Card API]
