<script lang="ts">
  import '$lib/tcplayer.css';

  import {browser} from '$app/environment';
  import {env} from '$env/dynamic/public';
  import type {Component} from 'svelte';

  let TCPlayer: Component<any> | null = $state(null);

  if (browser) {
    import('$lib/tcplayer.svelte').then((m) => (TCPlayer = m.default));
  } else {
    import('$lib/ssr/tcplayer.svelte').then((m) => (TCPlayer = m.default));
  }
</script>

<div class="container">
  {#if TCPlayer}
    <TCPlayer
      options={{
        licenseUrl: env.PUBLIC_LICENSE_URL,
        sources: [
          {
            src: env.PUBLIC_STREAM_URL,
          },
        ],
        width: 1920 / 3,
        height: 1080 / 3,
        language: 'en-US',
      }}
    />
  {/if}
</div>

<style>
  :global(*, *::after, *::before) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .container {
    padding: 2rem;
  }
</style>
