/* @ts-expect-error "No dts available" */
import TCPlayer from 'tcplayer.js';
import type {TCPlayerApi, TCPlayerOptions} from './types.js';

/* 🐞 Fixes build "ReferenceError" in Firefox */
if (navigator.userAgent.search(/firefox/gi)) {
  (globalThis as Record<string, unknown>).hlsSrc = null;
}

export function createTCPlayer(
  target: HTMLVideoElement,
  options: TCPlayerOptions,
): TCPlayerApi {
  return new TCPlayer(target, options);
}
