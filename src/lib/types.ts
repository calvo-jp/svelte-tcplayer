/* eslint-disable @typescript-eslint/no-explicit-any */

export interface TCPlayerSource {
  src: string;
  type?: string;
}

export interface TCPlayerLanguage {
  [x: string]: string;
}

export interface TCPlayerControlBar {
  playToggle?: boolean;
  progressControl?: boolean;
  volumePanel?: boolean;
  currentTimeDisplay?: boolean;
  durationDisplay?: boolean;
  timeDivider?: boolean;
  playbackRateMenuButton?: boolean;
  fullscreenToggle?: boolean;
  QualitySwitcherMenuButton?: boolean;
}

export interface TCPlayerPlugin {
  ContinuePlay?: Record<string, any>;
  VttThumbnail?: Record<string, any>;
  ProgressMarker?: boolean;
  DynamicWatermark?: Record<string, any>;
  ContextMenu?: Record<string, any>;
}

export interface TCPlayerHLSConfig {
  [x: string]: any;
}

export interface TCPlayerWebRTCConfig {
  connectRetryCount?: number;
  connectRetryDelay?: number;
  receiveVideo?: boolean;
  receiveAudio?: boolean;
  showLog?: boolean;
}

export interface TCPlayerOptions {
  appId?: string;
  fileId?: string;
  sources?: TCPlayerSource[];
  width?: number;
  height?: number;
  controls?: boolean;
  controlBar?: TCPlayerControlBar;
  poster?: string;
  posterImage?: boolean;
  autoplay?: boolean;
  playbackRates?: number[];
  loop?: boolean;
  muted?: boolean;
  preload?: 'auto' | 'meta' | 'none';
  swf?: string;
  bigPlayButton?: boolean;
  language?: string;
  languages?: TCPlayerLanguage[];
  reportable?: boolean;
  plugins?: TCPlayerPlugin[];
  hlsConfig?: TCPlayerHLSConfig;
  webRTCConfig?: TCPlayerWebRTCConfig;
  licenseUrl?: string;
}

export type TCPlayerEvent =
  | 'play'
  | 'playing'
  | 'loadstart'
  | 'durationchange'
  | 'loadedmetadata'
  | 'loadeddata'
  | 'progress'
  | 'canplay'
  | 'canplaythrough'
  | 'error'
  | 'pause'
  | 'ratechange'
  | 'seeked'
  | 'seeking'
  | 'timeupdate'
  | 'volumechange'
  | 'waiting'
  | 'ended'
  | 'resolutionswitching'
  | 'resolutionswitched'
  | 'fullscreenchange'
  | 'webrtcevent'
  | 'webrtcstats'
  | (string & {});

export interface TCPlayerApi {
  src(value: string): void;
  ready(callback: () => void): void;
  play(): void;
  pause(): void;
  currentTime(seconds: number): void;
  currentTime(): number;
  duration(): number;
  volume(percent: number): void;
  volume(): number;
  poster(value: string): void;
  poster(): string;
  requestFullscreen(): void;
  exitFullscreen(): void;
  isFullscreen(): boolean;
  on(event: TCPlayerEvent, listener: (...args: any) => void): void;
  one(event: TCPlayerEvent, listener: (...args: any) => void): void;
  off(event: TCPlayerEvent, listener: (...args: any) => void): void;
  buffered(): any;
  bufferedPercent(): number;
  width(value: number): void;
  width(): number;
  height(value: number): void;
  height(): number;
  videoWidth(): number;
  videoHeight(): number;
  dispose(): void;
}

export interface TCPlayerProps {
  id?: string;
  class?: string;
  style?: string;
  options: TCPlayerOptions;
  onplay?(...args: any): void;
  onplaying?(...args: any): void;
  onloadstart?(...args: any): void;
  ondurationchange?(...args: any): void;
  onloadedmetadata?(...args: any): void;
  onloadeddata?(...args: any): void;
  onprogress?(...args: any): void;
  oncanplay?(...args: any): void;
  oncanplaythrough?(...args: any): void;
  onerror?(...args: any): void;
  onpause?(...args: any): void;
  onratechange?(...args: any): void;
  onseeked?(...args: any): void;
  onseeking?(...args: any): void;
  ontimeupdate?(...args: any): void;
  onvolumechange?(...args: any): void;
  onwaiting?(...args: any): void;
  onended?(...args: any): void;
  onresolutionswitching?(...args: any): void;
  onresolutionswitched?(...args: any): void;
  onfullscreenchange?(...args: any): void;
  onwebrtcevent?(...args: any): void;
  onwebrtcstats?(...args: any): void;
}
