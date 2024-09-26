/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { TCPlayer, TCPlayerOptions } from './types.js';

function noop(..._: any): any {}

export function createTCPlayer(target: HTMLVideoElement, options: TCPlayerOptions): TCPlayer;
export function createTCPlayer(..._: any): TCPlayer {
	const mock: TCPlayer = {
		on: noop,
		buffered: noop,
		bufferedPercent: noop,
		currentTime: noop,
		dispose: noop,
		duration: noop,
		exitFullscreen: noop,
		height: noop,
		isFullscreen: noop,
		off: noop,
		one: noop,
		pause: noop,
		play: noop,
		poster: noop,
		ready: noop,
		requestFullscreen: noop,
		src: noop,
		videoHeight: noop,
		videoWidth: noop,
		volume: noop,
		width: noop
	};

	return mock;
}
