# Vue3-lang-js

This library is a Vue 3 plugin that wraps the [Lang.js](https://github.com/rmariuzzo/Lang.js)
library. If you're working in Laravel, you might be interested to check out 
this [package](https://github.com/rmariuzzo/Laravel-JS-Localization?tab=readme-ov-file).

This library takes inspiration from [@eli5/vue-lang-js](https://github.com/eli5-amsterdam/vue-lang-js).

## Installation 

To install this project with:

### NPM 
`npm install vue3-lang`

### Yarn 
`yarn add vue3-lang`

## Initialization 

```vue
// messages.js
export const messages = {
    "en.messages": {
        // Pipe '|' defines singular and plural values
        "buttonLabel": "Cancel|Plural",
        // Defines the amount or range accepted for each value
        'apple': '{0} There are none|[1,19] There are some|[20,*] There are many',
        "header": "Calculate weight",
        "footer": {
            "saveButtonLabel": "Save",
            "cancelButtonLabel": "Cancel"
        }
    },
    "es.messages": {
        "buttonLabel": "Cancelar",
        "header": "Calcular peso",
        "footer": {
            "saveButtonLabel": "Guardar",
            "cancelButtonLabel": "Cancelar"
        }
    }
}
```

```vue
import { createApp } from 'vue'
import App from './App.vue'

import Vue3Lang from 'vue3-lang'
import { messages } from "@/messages.js";

createApp(App).use(Vue3Lang, {
    messages: messages, // The translation source
    locale: 'en', // Set your default locale
    fallback: 'es' // Set your fallback locale
}).mount('#app')
```

## Usage

Vue3-Lang provides two methods: `$t` and its alias `$trans` that 
are injected globally in your Vue application. 

We also provide the `lang` instance that can accessed through 
the `inject` syntax (see below).

### Simple usage 

```vue
<template>
  {{ $t('messages.buttonLabel) }}
  <button>{{ cancelButton }}</button>
</template>

<script setup>
  import { inject } from "vue";

  const $t = inject('$trans') // or $t
  const cancelButton = $trans('messages.cancelButton')
</script>
```

### Get the translation value:
```vue
$trans('messages.cancelButton')
```

### Get the translation value for another locale
```vue
$trans('messages.cancelButton', {}, 'es')
```

### Get the singular translation value 
```vue
$trans('messages.cancelButton', 1)
```

### Get the plural translation value 
```vue
$trans('messages.cancelButton', 2)
```



