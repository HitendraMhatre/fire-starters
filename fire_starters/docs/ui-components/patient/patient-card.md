# Patient Card

## Introduction

Patient Card contains content and actions about a patient resource instance.

It displays and highlights the information that could be obtained from the FHIR Patient resource data according to the US core implementation guide.

**US Core Implementation Guide (Patient Resource)**<br/>
[https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html)

The component can show the items including:

- Avatar Image - Patient Image according to the gender
- Header Content - Patient’s Name
- Line 1 Content - Patient’s Birthdate (Patient’s Age) Patient’s Gender
- Line 2 Content - Patient’s Contact
- Optional Toolbar - Nothing is shown by default
- Optional Icon Button - Nothing is shown by default
- Custom HTML Content Title - Nothing is shown by default
- Custom HTML Content - Patient’s Identifier, Patient’s Language and Patient’s Address

!!!note

    The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)

## Example Usage

### Basic Patient Card

A simple example for the patient card with no extra configuration.

```javascript linenums="1"
<patient-card :data="fhirJson">
</patient-card>
```

![Image]

### Patient Card (Fields Props)

The example of passing in the “fields” props to the patient card. It overrides the ways it displays the gender field and makes the “age” field to be invisible.

```javascript linenums="1"
<script>
export default {
  data() {
    return {
      fields: {
        gender: {
          // overrides the way to display “gender” field
          value: (data) => "(" + data?.gender + ")"    ,
        },
        age: {
          // hide the “age” field
          display: false,
        },
     }
  }
}
</script>

<template>
  <patient-card :data="fhirJson" :fields="fields"/>
</template>
```

![Image]

### Patient Card (Card Component)

For the other usage of Patient Card that is applicable to all the card components, may refer to [Card Archetype].

## API

- [Patient Card API]
