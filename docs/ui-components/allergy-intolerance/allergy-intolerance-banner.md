# Allergy Intolerance Banner

## Introduction

Allergy Intolerance Banner contains content about an allergy intolerance resource instance.

It displays and highlights the information that could be obtained from the FHIR Allergy Intolerance resource data according to the US core implementation guide.

**US Core Implementation Guide (Allergy Intolerance Resource)**<br/>
[https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html)

The component can show the items including:

- Header 1 Content – Name of the allergy / intolerance
- Header 2 Content – Clinical status of the allergy / intolerance on the patient
- Optional Icon Button – Nothing is shown by default
- Optional Toolbar – Nothing is shown by default
- Custom HTML Cell Content – Verification status of the allergy / intolerance on the patient
- Custom HTML Content – Text references of the Patient resource with the allergy / intolerance and the reactions on the patient

!!!note

    The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)

## Example Usage

### Basic Allergy Intolerance Banner

https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html

```javascript linenums="1"
<allergy-intolerance-banner :data="fhirJson" />
```

![Image]

### Allergy Intolerance Banner (Fields Props)

The example of passing in the “fields” props to the allergy intolerance banner. It overrides the ways it displays the “clinicalStatus” field and makes the “verificationStatus” field to be invisible.

```javascript linenums="1"
<script>
export default {
  data() {
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
  <allergy-intolerance-banner :data="fhirJson" :fields="fields" />
</template>
```

![Image]

### Allergy Intolerance Banner (Banner Component)

For the other usage of Allergy Intolerance Banner that is applicable to all the banner components, may refer to [Banner Archetype].

## API

- [Allergy Intolerance Banner API]
