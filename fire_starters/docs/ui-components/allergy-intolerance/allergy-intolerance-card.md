# Allergy Intolerance Card

## Introduction

Allergy Intolerance Card contains content about an allergy intolerance resource instance.

It displays and highlights the information that could be obtained from the FHIR Allergy Intolerance resource data according to the US core implementation guide.

**US Core Implementation Guide (Allergy Intolerance Resource)**<br/>
[https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html)

The component can show the items including:

- Avatar Image – Image or visual that illustrates the allergy or intolerance
- Header Content – Name of the allergy or intolerance
- Line 1 Content – Clinical status and verification status of the allergy or intolerance on a patient
- Line 2 Content – Allergy or intolerance reactions
- Optional Toolbar – Nothing is shown by default
- Optional Icon Button – Nothing is shown by default
- Custom HTML Content Title – Nothing is shown by default
- Custom HTML Content – Text reference of the Patient resource with the allergy / intolerance

!!!note

    The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)

## Example Usage

### Basic Allergy Intolerance Card

A simple example for the allergy intolerance card with no extra configuration.

```javascript linenums="1"
<allergy-intolerance-card :data="fhirJson" />
```

![Image]

### Allergy Intolerance Card (Fields Props)

The example of passing in the “fields” props to the allergy intolerance card. It overrides the ways it displays the “clinicalStatus” field and makes the “verificationStatus” field to be invisible.

```javascript linenums="1"
</script>
export default {
  data() {
    // assign the FHIR JSON data to the variable fhirJson
    return {
      fields: {
        verificationStatus: {
          display: false,
        },
        clinicalStatus: {
          value: (data) =>
            String(data?.clinicalStatus?.coding?.[0]?.code).toUpperCase(),
        },
      },
    };
  },
};
</script>

<template>
  <allergy-intolerance-card :data="fhirJson" :fields="fields"/>
</template>
```

![Image]

### Allergy Intolerance Card (Card Component)

For the other usage of Allergy Intolerance Card that is applicable to all the card components, may refer to [Card Archetype].

## API

- [Allergy Intolerance Card API]
