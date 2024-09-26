/* @ts-expect-error "No dts available" */
import TCPlayer from 'tcplayer.js';
import type { TCPlayerOptions } from './types.js';

export function createTCPlayer(target: HTMLVideoElement, options: TCPlayerOptions): TCPlayer {
	return new TCPlayer(target, options);
}
