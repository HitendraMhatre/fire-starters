# Condition Table

## Introduction

Condition Table contains content about a list of condition resource instances.

It displays and highlights the information that could be obtained from the FHIR Condition resource data.

**Condition Resource**<br/>
[https://hl7.org/fhir/R4/condition.html](https://hl7.org/fhir/R4/condition.html)

The component can show the items including:

- Row and Columns – Clinical Status, Verification Status, Category, Code, Subject, Onset, Abatement
- Columns Header
- Table Title
- Search Field
- Pagination
- Sorted Rows

## Example Usage

### Basic Condition Table

A simple example for the condition table with no extra configuration.

```javascript linenums="1"
<condition-table :data="fhirJson" title="Condition" />
```

![Image]

### Condition Table (Fields Props)

There are few configurations that could be done on the specific fields by passing in the “fields” props.

```javascript linenums="1"
<script>
export default {
  data() {
    return {
      fields: [
        {
          title: "Condition Name",
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
  <condition-table
    :data="fhirJson"
    :fields="fields"
    title="Condition"
  />
</template>
```

![Image]

### Condition Table (Table Component)

For the other usage of Condition Table that is applicable to all the table components, may refer to [Table Archetype].

## API

- [Condition Table API]
