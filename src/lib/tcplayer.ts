/* @ts-expect-error "No dts available" */
import TCPlayer from 'tcplayer.js';
import type { TCPlayerApi, TCPlayerOptions } from './types.js';

export function createTCPlayer(
  target: HTMLVideoElement,
  options: TCPlayerOptions,
): TCPlayerApi {
  return new TCPlayer(target, options);
}
