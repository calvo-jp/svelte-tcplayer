/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type {TCPlayerApi, TCPlayerOptions} from '../types.js';

const noop = (..._: any): any => undefined;

export function createTCPlayer(
  _0: HTMLVideoElement,
  _1: TCPlayerOptions,
): TCPlayerApi {
  return {
    buffered: noop,
    bufferedPercent: noop,
    currentTime: noop,
    dispose: noop,
    duration: noop,
    exitFullscreen: noop,
    height: noop,
    isFullscreen: noop,
    off: noop,
    on: noop,
    one: noop,
    poster: noop,
    ready: noop,
    requestFullscreen: noop,
    src: noop,
    videoHeight: noop,
    videoWidth: noop,
    volume: noop,
    width: noop,
    pause: noop,
    play: noop,
  };
}
