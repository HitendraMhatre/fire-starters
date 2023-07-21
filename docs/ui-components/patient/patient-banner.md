# Patient Banner

## Introduction

Patient Banner contains content about a patient resource instance.

It displays and highlights the information that could be obtained from the FHIR Patient resource data according to the US core implementation guide.

**US Core Implementation Guide (Patient Resource)**<br/>
[https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html)

The component can show the items including:

- Header 1 Content – Patient’s Name
- Header 2 Content – Patient’s Birthdate (Patient’s Age)
- Optional Icon Button – Nothing is shown by default
- Optional Toolbar – Nothing is shown by default
- Custom HTML Cell Content – Patient’s Gender
- Custom HTML Content – Patient’s Contact, Patient’s Identifier, Patient’s Language and Patient’s Address

!!!note

    The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)

## Example Usage

### Basic Patient Banner

A simple example for the patient banner with no extra configuration.

```javascript linenums="1"
<patient-banner :data="fhirJson" />
```

![Image]

### Patient Banner (Fields Props)

The example of passing in the “fields” props to the patient banner. It overrides the ways it displays the gender field and makes the “age” field to be invisible.

```javascript linenums="1"
<script>
export default {
  data() {
    return {
      fields: {
        gender: {
          // overrides the way to display “gender” field
          value: (data) => data?.gender    ,
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
  <patient-banner :data="fhirJson" :fields="fields"/>
</template>
```

![Image]

### Patient Banner (Banner Component)

For the other usage of Patient Banner that is applicable to all the banner components, may refer to [Banner Archetype].

## API

- [Patient Banner API]
