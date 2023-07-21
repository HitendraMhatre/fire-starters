# Patient Table

## Introduction

Patient Table contains content about a list of patient resource instances.

It displays and highlights the information that could be obtained from the FHIR Patient resource data according to the US core implementation guide.

**US Core Implementation Guide (Patient Resource)**<br/>
[https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html)

The component can show the items including:

- Row and Columns – Patient ID, Patient Name, Date of Birth, Age, Gender, Contact, Language, and Address
- Columns Header
- Table Title
- Search Field
- Pagination
- Sorted Rows

## Example Usage

### Basic Patient Table

A simple example for the patient table with no extra configuration.

```javascript linenums="1"
<patient-table :data="fhirJson" />
```

![Image]

### Patient Table (Fields Props)

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
         value: (data) => data.identifier[0].value,
         // Disable the sorting function for this field
         sortable: false,
       },
       {
         title: "Patient Name",
         value: (data) => data.name[0].given.join(" "),
         // Exclude this field in the searching operation
         searchable: false,
       },
       {
         title: "Patient Birthdate",
         // Render the field based on config file
         field: "birthDate",
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

### Patient Table (Table Component)

For the other usage of Patient Table that is applicable to all the table components, may refer to [Table Archetype].

## API

- [Patient Table API]
