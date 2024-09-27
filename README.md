# svelte-tcplayer

TCPlayer for svelte

## Features

- type safe
- ssr compatible

## Usage

```svelte
<script>
  import {TCPlayer} from 'svelte-tcplayer';
</script>

<TCPlayer
  options={{
    licenseUrl: '',
    sources: [
      {
        src: '',
      },
    ],
  }}
  onerror={function () {
    // logic...
  }}
/>
```
