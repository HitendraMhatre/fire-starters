# Medication Request Banner

## Introduction

Medication Request Banner contains content about a medication request resource instance.

It displays and highlights the information that could be obtained from the FHIR Medication Request resource data according to the US core implementation guide.

**US Core Implementation Guide (Medication Request Resource)**<br/>
[https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medicationrequest.html](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medicationrequest.html)

The component can show the items including:

- Header 1 Content - Medication
- Header 2 Content – Authored On (Status)
- Optional Icon Button – Nothing is shown by default
- Optional Toolbar – Nothing is shown by default
- Custom HTML Cell Content – Dosage Instruction
- Custom HTML Content – Subject, Requester, Intent, Category, Reported and Encounter

!!!note

    The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)

## Example Usage

### Basic Medication Request Banner

A simple example for the medication request banner with no extra configuration.

```javascript linenums="1"
<medication-request-banner :data="fhirJson" />
```

![Image]

### Medication Request Banner (Fields Props)

The example of passing in the “fields” props to the medication request banner. It overrides the ways it displays the “status” field and makes the “encounter” field to be invisible.

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
        encounter: {
          // hide the “encounter” field
          display: false,
        },
     }
  }
}
</script>

<template>
  <medication-request-banner :data="fhirJson" :fields="fields"/>
</template>
```

![Image]

### Medication Request Banner (Banner Component)

For the other usage of Medication Request Banner that is applicable to all the banner components, may refer to [Banner Archetype].

## API

- [Medication Request Banner API]
