<script lang="ts">
	import { createTCPlayer } from './tcplayer.js';
	import type { TCPlayerApi, TCPlayerProps } from './types.js';

	let { options, ...events }: TCPlayerProps = $props();

	let video: HTMLVideoElement | null = $state(null);
	let player: TCPlayerApi | null = $state(null);

	$effect(() => {
		if (!video) return;

		player = createTCPlayer(video, options);
	});

	$effect(() => {
		const l = Object.entries(events);

		l.forEach(([name, handler]) => {
			player?.on(name, handler);
		});

		return () => {
			l.forEach(([name, handler]) => {
				player?.off(name, handler);
			});
		};
	});

	$effect(() => {
		return () => {
			player?.dispose();
		};
	});
</script>

<video bind:this={video}>
	<track kind="captions" />
</video>
