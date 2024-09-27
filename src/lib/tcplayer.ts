/* @ts-expect-error "No dts available" */
import TCPlayer from 'tcplayer.js';
import type {TCPlayerApi, TCPlayerOptions} from './types.js';

/* 🐞 Fixes build "ReferenceError" in Firefox */
if (navigator.userAgent.search(/firefox/gi)) {
  (globalThis as Record<string, unknown>).hlsSrc = null;
}

interface InternalTCPlayerApi {
  src(value: string): void;
  ready(callback: () => void): void;
  play(): void;
  pause(): void;
  currentTime(): number;
  currentTime(seconds: number): void;
  duration(): number;
  volume(): number;
  volume(percent: number): void;
  poster(): string;
  poster(value: string): void;
  requestFullscreen(): void;
  exitFullscreen(): void;
  isFullscreen(): boolean;
  on(event: string, listener: (...args: unknown[]) => void): void;
  one(event: string, listener: (...args: unknown[]) => void): void;
  off(event: string, listener: (...args: unknown[]) => void): void;
  buffered(): unknown;
  bufferedPercent(): number;
  width(): number;
  width(value: number): void;
  height(): number;
  height(value: number): void;
  videoWidth(): number;
  videoHeight(): number;
  dispose(): void;
}

export function createTCPlayer(elem: HTMLVideoElement, opts: TCPlayerOptions): TCPlayerApi {
  const appID = opts.appId;
  const fileID = opts.fileId;
  const language = opts.language ?? 'en-US';

  const QualitySwitcherMenuButton = opts.controlBar?.qualitySwitcherMenuButton;
  const controlBar = {
    ...opts.controlBar,
    QualitySwitcherMenuButton,
    qualitySwitcherMenuButton: undefined,
  };

  const others = {
    ...opts,
    appId: undefined,
    fileId: undefined,
  };

  const player: InternalTCPlayerApi = new TCPlayer(elem, {
    ...others,
    appID,
    fileID,
    language,
    controlBar,
  });

  return {
    get buffered() {
      return player.buffered();
    },
    get bufferedPercent() {
      return player.bufferedPercent();
    },
    get currentTime() {
      return player.currentTime();
    },
    get duration() {
      return player.duration();
    },
    set height(value) {
      player.height(value);
    },
    get height() {
      return player.height();
    },
    set width(value) {
      player.width(value);
    },
    get width() {
      return player.width();
    },
    get videoHeight() {
      return player.videoHeight();
    },
    get videoWidth() {
      return player.videoWidth();
    },
    get isFullscreen() {
      return player.isFullscreen();
    },
    set poster(value) {
      player.poster(value);
    },
    get poster() {
      return player.poster();
    },
    get volume() {
      return player.volume();
    },
    set volume(value) {
      player.volume(value);
    },
    on: player.on,
    one: player.one,
    off: player.off,
    src: player.src,
    play: player.play,
    pause: player.pause,
    ready: player.ready,
    dispose: player.dispose,
    requestFullscreen: player.requestFullscreen,
    exitFullscreen: player.exitFullscreen,
  };
}
