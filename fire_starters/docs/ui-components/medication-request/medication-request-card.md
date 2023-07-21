# Medication Request Card

## Introduction

Medication Request Card contains content about a medication request resource instance.

It displays and highlights the information that could be obtained from the FHIR Medication Request resource data according to the US core implementation guide.

**US Core Implementation Guide (Medication Request Resource)**<br/>
[https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medicationrequest.html](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medicationrequest.html)

The component can show the items including:

- Avatar Image – Medication Image
- Header Content – Medication
- Line 1 Content – Authored On (Status)
- Line 2 Content – Dosage Instruction
- Optional Toolbar – Nothing is shown by default
- Optional Icon Button – Nothing is shown by default
- Custom HTML Content Title – Nothing is shown by default
- Custom HTML Content – Subject, Requester, Intent, Category, Reported and Encounter

!!!note

    The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)

## Example Usage

### Basic Medication Request Card

A simple example for the medication request card with no extra configuration.

```javascript linenums="1"
<medication-request-card :data="fhirJson" />
```

![Image]

### Medication Request Card (Fields Props)

The example of passing in the “fields” props to the medication request card. It overrides the ways it displays the status field and makes the “encounter” field to be invisible.

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
        encounter: {
          // hide the “encounter” field
          display: false,
        },
     }
  }
}
</script>

<template>
  <medication-request-card :data="fhirJson" :fields="fields"/>
</template>
```

![Image]

### Medication Request Card (Card Component)

For the other usage of Medication Request Card that is applicable to all the card components, may refer to [Card Archetype].

## API

- [Medication Request Card API]
