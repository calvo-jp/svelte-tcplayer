/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type {TCPlayerApi, TCPlayerOptions} from '../types.js';

const noop = (..._args: any): any => undefined;

export function createTCPlayer(_elem: HTMLVideoElement, _opts: TCPlayerOptions): TCPlayerApi {
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
    set height(_value) {},
    get height() {
      return 0;
    },
    set width(_value) {},
    get width() {
      return 0;
    },
    get videoHeight() {
      return 0;
    },
    get videoWidth() {
      return 0;
    },
    get isFullscreen() {
      return false;
    },
    set poster(_value) {},
    get poster() {
      return '';
    },
    set volume(_value) {},
    get volume() {
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
