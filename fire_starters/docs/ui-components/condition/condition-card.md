# Condition Card

## Introduction

Condition Card contains content about a condition resource instance.

It displays and highlights the information that could be obtained from the FHIR Condition resource data.

**Condition Resource**<br/>
[https://hl7.org/fhir/R4/condition.html](https://hl7.org/fhir/R4/condition.html)

The component can show the items including:

- Avatar Image – Image or visual that illustrates the allergy or intolerance
- Header Content – Name of the condition
- Line 1 Content – Abatement information e.g., Date and time of abatement
- Line 2 Content – Clinic status, verification status and onset information e.g., Date and time of onset
- Optional Toolbar – Nothing is shown by default
- Optional Icon Button – Nothing is shown by default
- Custom HTML Content Title – Nothing is shown by default
- Custom HTML Content – Subject and category of the condition

!!!note

    The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)

## Example Usage

### Basic Condition Card

A simple example for the condition card with no extra configuration.

```javascript linenums="1"
<condition-card :data="fhirJson" />
```

![Image]

### Condition Card (Fields Props)

The example of passing in the “fields” props to the condition card. It overrides the ways it displays the “clinicalStatus” field and makes the “verificationStatus” field to be invisible.

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
  <condition-card :data="fhirJson" :fields="fields"/>
</template>

```

![Image]

### Condition Card (Card Component)

For the other usage of Condition Card that is applicable to all the card components, may refer to [Card Archetype].

## API

- [Condition Card API]
