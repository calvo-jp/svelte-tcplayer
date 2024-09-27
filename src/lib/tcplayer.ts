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
  const appID = options.appId;
  const fileID = options.fileId;
  const others = {...options};

  delete others.appId;
  delete others.fileId;

  return new TCPlayer(target, {appID, fileID, ...others});
}
