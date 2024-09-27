<script lang="ts">
  import {createTCPlayer} from './tcplayer.js';
  import type {TCPlayerProps} from './types.js';

  let {id, style, class: klass, options, ...events}: TCPlayerProps = $props();

  let video: HTMLVideoElement | null = $state(null);

  let player = $derived.by(() => {
    if (!video) return null;
    return createTCPlayer(video, options);
  });

  $effect(() => {
    const l = Object.entries(events);

    l.forEach(([name, handler]) => player?.on(name, handler));

    return () => {
      l.forEach(([name, handler]) => player?.off(name, handler));
    };
  });

  $effect(() => {
    return () => {
      player?.dispose();
    };
  });
</script>

<video {id} {style} class={klass} bind:this={video}>
  <track kind="captions" />
</video>
