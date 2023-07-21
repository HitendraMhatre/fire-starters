# Condition Banner

## Introduction

Condition Banner contains content about a condition resource instance.

It displays and highlights the information that could be obtained from the FHIR Condition resource data.

**Condition Resource**<br/>
[https://hl7.org/fhir/R4/condition.html](https://hl7.org/fhir/R4/condition.html)

The component can show the items including:

- Header 1 Content – Name of the condition
- Header 2 Content – Abatement information e.g., Date and time of abatement
- Optional Icon Button – Nothing is shown by default
- Optional Toolbar – Nothing is shown by default
- Custom HTML Cell Content – Clinic status, verification status and onset information e.g., Date and time of onset
- Custom HTML Content – Subject and category of the condition

!!!note

    The value to be shown in each field is defined according to the config file which may refer to this document: [Config File Documentation](../../config-file.md)

## Example Usage

### Basic Condition Banner

A simple example for the condition banner with no extra configuration.

```javascript linenums="1"
<condition-banner :data="fhirJson" />
```

![Image]

### Condition Banner (Fields Props)

The example of passing in the “fields” props to the condition banner. It overrides the ways it displays the “clinicalStatus” field and makes the “verificationStatus” field to be invisible.

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
  <condition-banner :data="fhirJson" :fields="fields" />
</template>
```

![Image]

### Condition Banner (Banner Component)

For the other usage of Condition Banner that is applicable to all the banner components, may refer to [Banner Archetype].

## API

- [Condition Banner API]
