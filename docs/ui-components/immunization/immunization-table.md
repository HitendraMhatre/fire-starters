# Immunization Table

## Introduction

Immunization Table contains content about a list of immunization resource instances.

It displays and highlights the information that could be obtained from the FHIR Immunization resource data according to the US core implementation guide.

**US Core Implementation Guide (Immunization Resource)**<br/>
[https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-immunization.html](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-immunization.html)

The component can show the items including:

- Row and Columns – Immunization’s Patient, Vaccine Code, Status, Status Reason, Dose Quantity, Occurrence Datetime, Primary Source
- Columns Header
- Table Title
- Search Field
- Pagination
- Sorted Rows

## Example Usage

### Basic Immunization Table

A simple example for the immunization table with no extra configuration.

```javascript linenums="1"
<immunization-table :data="fhirJson" />
```

![Image]

### Immunization Table (Fields Props)

There are few configurations that could be done on the specific fields by passing in the “fields” props.

```javascript linenums="1"
<script>
export default {
  data() {
   return {
     fields: [
       {
         title: "Patient ID",
         // Define how the value is rendered
         value: (data) => data.patient.reference,
         // Disable the sorting function for this field
         sortable: false,
       },
       {
         title: "Occurrence DateTime",
         value: (data) => data.occurrenceDateTime,
         // Exclude this field in the searching operation
         searchable: false,
       },
       {
         title: "Vaccine Code",
         // Render the field based on config file
         field: "vaccineCode",
       },
    ]
  }
}
</script>
<template>
  <patient-table :data="fhirJson" :fields="fields" title="Table"/>
</template>
```

![Image]

### Immunization Table (Table Component)

For the other usage of Immunization Table that is applicable to all the table components, may refer to [Table Archetype].

## API

- [Immunization Table API]
