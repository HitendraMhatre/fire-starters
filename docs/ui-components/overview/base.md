# Base Components

## Introduction

Base components provide a list of prebuilt components with out-of-the-box customizable basic features.

## BaseButtonClose

The BaseButtonClose component renders a close icon button with close control.

```javascript linenums="1"
<script>
  methods: {
    setShow(data){
      this.show = data;
    },
  },
</script>

<template>
  <base-button-close @show=”setShow” />
</template>
```

![Image]

### Props

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- |
|      |      |           |         |             |

### Events

| Name | Parameter | Description                                              |
| ---- | --------- | -------------------------------------------------------- |
| show | false     | Event that will be triggered when the button is clicked. |

### CSS Class Names

| Name           | Description             |
| -------------- | ----------------------- |
| base-btn-close | Close button class name |

## BaseButtonDownload

The BaseButtonDownload component renders a download button with three dropdown options: Download JSON, download XML and download PDF.

```javascript linenums="1"
<script>
  methods: {
    downloadXML(){
      // optional, custom download XML logic
    },
    downloadJSON(){
      // optional, custom download JSON logic
    },
    downloadPDF(){
      // optional, custom download PDF logic
    },
  },
  data(){
    return {
      data: { // data to download }
    }
  }
</script>

<template>
  <p class=”custom-p”>Target component to download as PDF</p>
  <base-button-download @downloadXML=”downloadXML” @downloadJSON=”downloadJSON” @downloadPDF=”downloadPDF” :data=”data” componentId=”custom-p” />
</template>
```

![Image]

### Props

| Name        | Type   | Required? | Default | Description                                                                        |
| ----------- | ------ | --------- | ------- | ---------------------------------------------------------------------------------- |
| data        | Object | No        | null    | If passed, trigger the built-in download JSON and download XML functions on click. |
| componentId | string | No        | null    | If passed, trigger the built-in download PDF function on click.                    |

### Events

| Name         | Parameter | Description                                                            |
| ------------ | --------- | ---------------------------------------------------------------------- |
| downloadJSON |           | Event that will be triggered when the download JSON button is clicked. |
| downloadXML  |           | Event that will be triggered when the download XML button is clicked.  |
| downloadPDF  |           | Event that will be triggered when the download PDF button is clicked.  |

### CSS Class Names

| **Name**                        | **Description**                               |
| ------------------------------- | --------------------------------------------- |
| base-btn-download               | Download button class name                    |
| base-btn-download-dropdown      | Download button dropdown menu class name      |
| base-btn-download-dropdown-item | Download button dropdown menu item class name |

## BaseButtonInfo

The BaseButtonInfo component renders an info button with a default "open new tab" feature.

```javascript linenums="1"
<script>
  methods: {
    info(){
      // optional, custom info logic
    },
  },
  data(){
    return {
      link: { // link to open }
    }
  }
</script>

<template>
  <base-button-info @info=”info” :link=”link” />
</template>
```

![Image]

### Props

| **Name** | **Type** | **Required?** | **Default** | **Description**                        |
| -------- | -------- | ------------- | ----------- | -------------------------------------- |
| link     | string   | No            | null        | If passed, open the link in a new tab. |

### Events

| Name | Parameter | Description                                              |
| ---- | --------- | -------------------------------------------------------- |
| info |           | Event that will be triggered when the button is clicked. |

### CSS Class Names

| **Name**      | **Description**        |
| ------------- | ---------------------- |
| base-btn-info | Info button class name |

## BaseButtonNo

The BaseButtonNo component renders a no button with close control.

```javascript linenums="1"
<script>
  methods: {
    setShow(data){
      this.show = data;
    },
  },
</script>

<template>
  <base-button-no @show=”setShow” />
</template>
```

![Image]

### Props

| Name | Type | Required? | Default | Description |
| ---- | ---- | --------- | ------- | ----------- |
|      |      |           |         |             |

### Events

| Name | Parameter | Description                                              |
| ---- | --------- | -------------------------------------------------------- |
| show | false     | Event that will be triggered when the button is clicked. |

### CSS Class Names

| **Name**    | **Description**      |
| ----------- | -------------------- |
| base-btn-no | No button class name |

## BaseToolbar

The base toolbar component renders a list of children components at the toolbar section.

```javascript linenums="1"
<script>
  data() {
    return [Component1, Component2];
  },
</script>

<template>
  <base-toolbar :components=”components” />
</template>
```

![Image]()

### Props

!!! note

    The BaseToolbar component will pass all props to its children components.

| **Name**   | **Type** | **Required?** | **Default** | **Description**                                  |
| ---------- | -------- | ------------- | ----------- | ------------------------------------------------ |
| components | Array    | No            | null        | List of components to be rendered at the toolbar |

### Events

| **Name** | **Parameter** | **Description** |
| -------- | ------------- | --------------- |

### CSS Class Names

| **Name**     | **Description**         |
| ------------ | ----------------------- |
| base-toolbar | Base toolbar class name |
