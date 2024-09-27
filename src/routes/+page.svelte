<script lang="ts">
  import '$lib/tcplayer.css';

  import {browser} from '$app/environment';
  import {env} from '$env/dynamic/public';
  import type {TCPlayerProps} from '$lib/types.js';
  import type {Component} from 'svelte';

  let TCPlayer: Component<TCPlayerProps>;

  if (browser) {
    import('$lib/tcplayer.svelte').then((m) => (TCPlayer = m.default));
  } else {
    import('$lib/ssr/tcplayer.svelte').then((m) => (TCPlayer = m.default));
  }

  const src =
    'webrtc://global-lebtest-play.myqcloud.com/live/lebtest?txSecret=f22a813b284137ed10d3259a7b5c224b&txTime=69f1eb8c&tabr_bitrates=d1080p,d540p,d360p&tabr_start_bitrate=d1080p';
</script>

<div class="container">
  {#if TCPlayer}
    <TCPlayer
      options={{
        licenseUrl: env.PUBLIC_LICENSE_URL,
        sources: [
          {
            src,
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
