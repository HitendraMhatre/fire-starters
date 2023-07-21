# Medication Request Table

## Introduction

Medication Request Table contains content about a list of medication request resource instances.

It displays and highlights the information that could be obtained from the FHIR Medication Request resource data according to the US core implementation guide.

**US Core Implementation Guide (Medication Request Resource)**<br/>
[https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medicationrequest.html](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-medicationrequest.html)

The component can show the items including:

- Row and Columns – Medication Reference, Medication Codeable Concept, Status, Authored On, Dosage Instruction
- Columns Header
- Table Title
- Search Field
- Pagination
- Sorted Rows

## Example Usage

### Basic Medication Request Table

A simple example for the patient table with no extra configuration.

```javascript linenums="1"
<medication-request-table :data="fhirJson" />
```

![Image]

### Medication Request Table (Fields Props)

There are few configurations that could be done on the specific fields by passing in the “fields” props.

```javascript linenums="1"
<script>
export default {
  data() {
   return {
     fields: [
       {
         title: "Year",
         // Define how the value is rendered
         value: (data) => data.authoredOn.slice(0,4),
         // Disable the sorting function for this field
         sortable: false,
       },
       {
         title: "Status",
         value: (data) => data.status,
         // Exclude this field in the searching operation
         searchable: false,
       },
       {
         title: "Medication",
         // Render the field based on config file
         field: "medicationCodeableConcept",
       },
    ]
  }
}
</script>
<template>
  <medication-request-table :data="fhirJson" :fields="fields" />
</template>
```

![Image]

### Medication Request Table (Table Component)

For the other usage of Medication Request Table that is applicable to all the table components, may refer to [Table Archetype].

## API

- [Medication Request Table API]
