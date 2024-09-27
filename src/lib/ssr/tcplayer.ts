/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type {TCPlayerApi, TCPlayerOptions} from '../types.js';

const noop = (..._: any): any => undefined;

export function createTCPlayer(_0: HTMLVideoElement, _1: TCPlayerOptions): TCPlayerApi {
  return {
    get buffered() {
      return undefined;
    },
    get bufferedPercent() {
      return 0;
    },
    get currentTime() {
      return 0;
    },
    get duration() {
      return 0;
    },
    get height() {
      return 0;
    },
    get isFullscreen() {
      return false;
    },
    get poster() {
      return '';
    },
    get videoHeight() {
      return 0;
    },
    get videoWidth() {
      return 0;
    },
    get volume() {
      return 0;
    },
    get width() {
      return 0;
    },
    on: noop,
    one: noop,
    off: noop,
    src: noop,
    play: noop,
    pause: noop,
    ready: noop,
    dispose: noop,
    requestFullscreen: noop,
    exitFullscreen: noop,
  };
}
