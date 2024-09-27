# svelte-tcplayer

[TCPlayer](https://www.npmjs.com/package/tcplayer.js) for [svelte](https://github.com/sveltejs/svelte)

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

## Related

- [tcplayer.js](https://www.npmjs.com/package/tcplayer.js)
