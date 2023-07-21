# Table Archetype

## Introduction

This document illustrates the usage of the components that are categorized as table components including:

- Patient Table
- Immunization Table
- Allergy Intolerance Table
- Medication Request Table
- Observation Table
- Condition Table

!!! note

    In this document, Patient Table will be used as the example to explain the usage of the table components with different configurations. The configurations explained here should be applicable to all of the other table components.

## Example Usage

### Basic Table

A simple example for the table component with no extra configuration.

```javascript linenums="1"
<script>
import PatientFHIRJson from “./patient-table-example.json”;
export default {
  data() {
    return {
      fhirJson: PatientFHIRJson
    }
  },
}
</script>
<template>
  <patient-table:data="fhirJson" />
</template>
```

![Image]

### Table (Override Search Options)

The example of disabling the search function in the table.

```javascript linenums="1"
<script>
import PatientFHIRJson from “./patient-table-example.json”;
export default {
  data() {
    return {
      fhirJson: PatientFHIRJson,
      options: {
        search: false,
      }
    }
  }
}
</script>
<template>
  <patient-table :data="fhirJson" :options="options" title="Table"/>
</template>
```

![Image]

### Table (Override Pagination Options)

The example of modifying the pagination options for the patient table.

```javascript linenums="1"
<script>
import PatientFHIRJson from “./patient-table-example.json”;
export default {
  data() {
    return {
      fhirJson: PatientFHIRJson,
      options: {
        pagination: true,
        paginationRowOptions: [5, 10, 20, 50],
        paginationRow: 20,
      }
    }
  }
}
</script>
<template>
  <patient-table :data="fhirJson" :options="options" title="Table"/>
</template>
```

![Image]

### Table (Override Sorting Options)

The example of disabling the sorting function of the patient table.

```javascript linenums="1"
<script>
import PatientFHIRJson from “./patient-table-example.json”;
export default {
  data() {
    return {
      fhirJson: PatientFHIRJson,
      options: {
        sorting: false,
      }
    }
  }
}
</script>
<template>
  <patient-table :data="fhirJson" :options="options" title="Table"/>
</template>
```

![Image]

### Table (Fields Props)

There are few configurations that could be done on the specific fields by passing in the “fields” props.

```javascript linenums="1"
<script>
import PatientFHIRJson from “./patient-table-example.json”;
export default {
  data() {
    return {
      fhirJson: PatientFHIRJson,
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
}
</script>
<template>
  <patient-table :data="fhirJson" :fields="fields" title="Table"/>
</template>
```

![Image]()

### Table (Event)

The example of using the “errMessages” event in the table component.
!!! note

    Try to delete the data from the example JSON file such as identifier field. The errMessages event will only be triggered when there is error with the data.

```javascript linenums="1"
<script>
import PatientFHIRJson from “./patient-table-example.json”;
export default {
  data() {
    return {
      fhirJson: PatientFHIRJson
    }
  },
  methods: {
    showErrorMessage(value)
      console.log(value);
    },
  },
}
</script>
<template>
  <patient-table :data="fhirJson" @errMessages="showErrorMessage"/>
</template>
```

![Image]()

## API

- [Table Archetype API]
