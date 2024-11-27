<script lang="ts">
  import {createTCPlayer} from './tcplayer.js';
  import type {Assign, TCPlayerApi, TCPlayerProps} from './types.js';
  import type {HTMLVideoAttributes} from 'svelte/elements';

  interface BaseProps extends HTMLVideoAttributes {
    ref?: HTMLVideoElement | null;
  }

  let {
    ref = $bindable(null),
    options,
    onplay,
    onplaying,
    onloadstart,
    ondurationchange,
    onloadedmetadata,
    onloadeddata,
    onprogress,
    oncanplay,
    oncanplaythrough,
    onerror,
    onpause,
    onratechange,
    onseeked,
    onseeking,
    ontimeupdate,
    onvolumechange,
    onwaiting,
    onended,
    onresolutionswitching,
    onresolutionswitched,
    onfullscreenchange,
    onwebrtcevent,
    onwebrtcstats,
    ...props
  }: Assign<BaseProps, TCPlayerProps> = $props();

  let player: TCPlayerApi | null = $state(null);

  $effect(() => {
    if (!ref) return;

    player = createTCPlayer(ref, options);
  });

  $effect(() => {
    const l = Object.entries({
      onplay: onplay,
      onplaying: onplaying,
      onloadstart: onloadstart,
      ondurationchange: ondurationchange,
      onloadedmetadata: onloadedmetadata,
      onloadeddata: onloadeddata,
      onprogress: onprogress,
      oncanplay: oncanplay,
      oncanplaythrough: oncanplaythrough,
      onerror: onerror,
      onpause: onpause,
      onratechange: onratechange,
      onseeked: onseeked,
      onseeking: onseeking,
      ontimeupdate: ontimeupdate,
      onvolumechange: onvolumechange,
      onwaiting: onwaiting,
      onended: onended,
      onresolutionswitching: onresolutionswitching,
      onresolutionswitched: onresolutionswitched,
      onfullscreenchange: onfullscreenchange,
      onwebrtcevent: onwebrtcevent,
      onwebrtcstats: onwebrtcstats,
    }) as [string, (...args: any) => void][];

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

<video bind:this={ref} autoplay muted {...props}>
  <track kind="captions" />
</video>
