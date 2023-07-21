# Observation Table

## Introduction

Observation Table contains content about a list of observation resource instances.

It displays and highlights the information that could be obtained from the FHIR Observation resource data.

**Observation Resource**<br/>
[https://hl7.org/fhir/R4/observation.html](https://hl7.org/fhir/R4/observation.html)

The component can show the items including:

- Row and Columns – Status, Category, Code, Subject, Effective, Value
- Columns Header
- Table Title
- Search Field
- Pagination
- Sorted Rows

## Example Usage

### Basic Observation Table

A simple example for the observation table table with no extra configuration.

```javascript linenums="1"
<observation-table :data="fhirJson" />
```

![Image]

### Observation Table (Fields Props)

There are few configurations that could be done on the specific fields by passing in the “fields” props.

```javascript linenums="1"
<script>
export default {
  data() {
   return {
     fields: [
       {
          title: "Code",
          // Render the field based on config file
          field: "code",
        },
        {
          title: "Value",
          // Define how the value is rendered
          value: (data) =>
            data.valueQuantity.value + " " + data.valueQuantity.unit,
          // Exclude this field in the searching operation
          searchable: false,
        },
        {
          title: "Interpretation",
          value: (data) =>
            data.interpretation
              .map((i) => i.coding.map((c) => c.display).join(","))
              .join(","),
          // Disable the sorting function for this field
          sortable: false,
        },
        {
          title: "Subject",
          // Render the field based on config file
          field: "subject",
        },
    ]
  }
}
</script>
<template>
  <observation-table :data="fhirJson" :fields="fields" />
</template>

```

![Image]

### Observation Table (Table Component)

For the other usage of Observation Table that is applicable to all the table components, may refer to [Table Archetype].

## API

- [Observation Table API]
