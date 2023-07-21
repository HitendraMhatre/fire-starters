# Allergy Intolerance Table

## Introduction

Allergy Intolerance Table contains content about a list of allergy intolerance resource instances.

It displays and highlights the information that could be obtained from the FHIR Allergy Intolerance resource data according to the US core implementation guide.

**US Core Implementation Guide (Allergy Intolerance Resource)**<br/>
[https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html)

The component can show the items including:

- Row and Columns – Allergy / Intolerance Name, Clinical Status, Verification Status, Patient, Reactions
- Columns Header
- Table Title
- Search Field
- Pagination
- Sorted Rows

## Example Usage

### Basic Allergy Intolerance Table

https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-allergyintolerance.html

```javascript linenums="1"
<allergy-intolerance-table :data="fhirJson" title="Allergy Intolerance" />
```

![Image]

### Allergy Intolerance Table (Fields Props)

There are few configurations that could be done on the specific fields by passing in the “fields” props.

```javascript linenums="1"
<script>
export default {
  data() {
    return {
      fields: [
        {
          title: "Allergy / Intolerance Name",
          // Define how the value is rendered
          value: (data) => `${data.code.text} (${data.code.coding[0].display})`,
          // Disable the sorting function for this field
          sortable: false,
        },
        {
          title: "Clinical Status",
          value: (data) =>
            String(data?.clinicalStatus?.coding?.[0]?.code).toUpperCase(),
          // Exclude this field in the searching operation
          searchable: false,
        },
        {
          title: "Verification Status",
          // Render the field based on config file
          field: "verificationStatus",
        },
      ],
    };
  },
};
</script>

<template>
  <allergy-intolerance-table
    :data="fhirJson"
    :fields="fields"
    title="Allergy Intolerance"
  />
</template>
```

![Image]

### Allergy Intolerance Table (Table Component)

For the other usage of Allergy Intolerance Table that is applicable to all the table components, may refer to [Table Archetype].

## API

- [Allergy Intolerance Table API]
