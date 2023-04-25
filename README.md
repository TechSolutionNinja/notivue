<div align="center">

![notivue](https://i.ibb.co/4Mq5cnX/cover.png)

# Notivue

Fully-fledged flexible notification system for Vue 3.

---

[Live Demo](https://notivue.netlify.app/) - [Documentation](https://notivuedocs.netlify.app/) - [StackBlitz]()

</div>

<br />

## Features

**🧬 JS and CSS modular**  
_Granularly bundle only what you use_

**🧚‍♂️ Zero deps and lightweight**  
_From 3.8 to 6 KB (gzipped)_

**🔰 Ships with anything you need**  
_Themes, icons, animations and much more_

**💅 Theming API**  
_Create your own theme with a breeze_

**🌀 Promise API**  
_Update pending notifications with ease_

**🧩 Custom Components API**  
_Use your own components while Notivue handles the rest_

**🎢 Slick transitions and animations**  
_Customize enter/leave animations_

**♿️ Accessible and WAI ARIA compliant**  
_Accessible notifications to everyone_

**🕉 Out-of-the box native RTL support**  
_Pure CSS RTL support_

<br />

## Installation

```bash
pnpm add notivue
```

<br />

## Your first notification

### 1. main.js

```js
import { notivue } from 'notivue'

import 'notivue/notifications.css'
import 'notivue/animations.css'

createApp(App).use(notivue).mount('#app')
```

### 2. App.vue (or anywhere else)

```vue
<script setup>
import { Notivue, notifications } from 'notivue'
</script>

<template>
  <Notivue :use="notifications" />
</template>
```

### 3. Anywhere in your app

```vue
<script setup>
import { usePush } from 'notivue'

const push = usePush()
</script>

<template>
  <button @click="push.success('Something good has been pushed!')">Push</button>
</template>
```

<br />

## Links

[Live Demo](https://notivue.netlify.app/) - [Documentation]() - [StackBlitz]()

<br />

## License

MIT Licensed - Simone Mastromattei © 2023 - Present
