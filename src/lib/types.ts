/* eslint-disable @typescript-eslint/no-explicit-any */

export type Assign<Target extends Record<string, any>, Source extends Record<string, any>> = Omit<
  Target,
  keyof Source
> &
  Source;

export interface TCPlayerSource {
  src: string;
  type?: string;
}

export interface TCPlayerLanguage {
  [x: string]: string;
}

export interface TCPlayerControlBar {
  /**
   * Whether to display the play-pause toggle button.
   * @default true
   */
  playToggle?: boolean;
  /**
   * Whether to display a playback progress bar.
   * @default true
   */
  progressControl?: boolean;
  /**
   * Whether or not to display a volume control.
   * @default true
   */
  volumePanel?: boolean;
  /**
   * Whether to display the current time of the video.
   * @default true
   */
  currentTimeDisplay?: boolean;
  /**
   * Whether or not to show the length of the video.
   * @default true
   */
  durationDisplay?: boolean;
  /**
   * Whether to display a time splitter.
   * @default true
   */
  timeDivider?: boolean;
  /**
   * Whether to display the playback rate selection button.
   * @default true
   */
  playbackRateMenuButton?: boolean;
  /**
   * Whether to display a full-screen button.
   * @default true
   */
  fullscreenToggle?: boolean;
  /**
   * Whether or not to display the clarity toggle menu.
   * @default true
   */
  qualitySwitcherMenuButton?: boolean;
}

export interface TCPlayerContinuePlayPlugin {
  /**
   * Whether the Boolean automatically resumes while playing
   */
  auto?: boolean;
  /**
   * String prompt copy
   */
  text?: string;
  /**
   * String button copy
   */
  btnText?: string;
  [x: string]: any;
}

export interface TCPlayerVttThumbnailPlugin {
  /**
   * The absolute address of the vtt file, which must be transmitted
   */
  vttUrl?: string;
  /**
   * Image path, use the path of `vttUrl` when not passing
   */
  basePath?: string;
  /**
   * Image absolute address
   */
  imgUrl?: string;
  [x: string]: any;
}

export interface TCPlayerDynamicWatermarkPlugin {
  /**
   * Text watermark content, must be transmitted
   */
  content?: string;
  /**
   * Watermark movement speed. Accepts range from `0` to `1`
   */
  speed?: number;
  [x: string]: any;
}

export interface TCPlayerContextMenuPluginLevelSwitch {
  /**
   * Whether the prompt is enabled
   */
  open?: boolean;
  /**
   * The prompt text when you start toggling the clarity
   */
  switchingText?: string;
  /**
   * The prompt text when the switch is successful
   */
  switchedText?: string;
  /**
   * The prompt text when the switch fails
   */
  switchErrorText?: string;
  [x: string]: any;
}

export interface TCPlayerContextMenuPlugin {
  /**
   * Controls whether or not mirrored display is supported
   */
  mirror?: boolean;
  /**
   * Controls whether or not the data panel is supported
   */
  statistic?: boolean;
  /**
   * controls the text hint when switching the clarity
   */
  levelSwitch?: TCPlayerContextMenuPluginLevelSwitch;
  [x: string]: any;
}

export interface TCPlayerPlugin {
  /**
   * Control the resuming feature
   */
  ContinuePlay?: TCPlayerContinuePlayPlugin;
  /**
   * Control the display of thumbnails
   */
  VttThumbnail?: TCPlayerVttThumbnailPlugin;
  /**
   * Control the progress bar display
   */
  ProgressMarker?: boolean;
  /**
   * Control the display of dynamic watermarks
   */
  DynamicWatermark?: TCPlayerDynamicWatermarkPlugin;
  ContextMenu?: TCPlayerContextMenuPlugin;
}

export interface TCPlayerHLSConfig {
  [x: string]: any;
}

export interface TCPlayerWebRTCConfig {
  /**
   * The number of times the SDK reconnected to the server
   * @default 3
   */
  connectRetryCount?: number;
  /**
   * The delay between the SDK and the server is reconnected
   * @default 1
   */
  connectRetryDelay?: number;
  /**
   * Whether to pull the video stream
   * @default true
   */
  receiveVideo?: boolean;
  /**
   * Whether to pull the audio stream
   * @default true
   */
  receiveAudio?: boolean;
  /**
   * Whether to print logs in the console
   * @default false
   */
  showLog?: boolean;
}

export interface TCPlayerOptions {
  /**
   * When playing VOD media files through file ID,
   * it is required to select the app ID of the corresponding Tencent Cloud account
   */
  appId?: string;
  /**
   * The ID of the VOD media file is required when the file ID is used to play the VOD media file
   */
  fileId?: string;
  /**
   * @descriptionPlayer playback address,
   * @example
   * [
   *  {
   *    src: '/path/to/video.mp4',
   *    type: 'video/mp4',
   *  }
   * ]
   */
  sources?: TCPlayerSource[];
  /**
   * The width of the player area, in pixels, can be set as needed,
   * and the player size can be controlled by CSS.
   */
  width?: number;
  /**
   * Player area height, unit pixels, set as needed,
   * and the player size can be controlled through CSS.
   */
  height?: number;
  /**
   * Whether to display the player's control bar.
   */
  controls?: boolean;
  /**
   * The `controlBar` parameter can be used to configure the functions of the player's control bar.
   */
  controlBar?: TCPlayerControlBar;
  /**
   * Whether or not to display the cover.
   */
  posterImage?: boolean;
  /**
   * Set the full address of the cover image.
   * If the uploaded video has a cover image, the generated cover image will be used first.
   * @see https://cloud.tencent.com/document/product/266/36452
   */
  poster?: string;
  /**
   * Whether or not to play automatically.
   */
  autoplay?: boolean;
  /**
   * Set variable speed playback magnification options, only for HTML5 playback mode.
   */
  playbackRates?: number[];
  /**
   * Whether or not to play on a loop.
   */
  loop?: boolean;
  /**
   * Whether to play on silent.
   */
  muted?: boolean;
  /**
   * Whether it needs to be preloaded
   */
  preload?: 'auto' | 'meta' | 'none';
  /**
   * The URL of the Flash player swf file.
   */
  swf?: string;
  /**
   * Whether or not to display a centered play button.
   */
  bigPlayButton?: boolean;
  /**
   * Set the language
   * @default 'en-US'
   */
  language?: string;
  /**
   * Set up a multilingual dictionary.
   */
  languages?: Record<string, any>;
  /**
   * Specify whether to enable data reporting.
   */
  reportable?: boolean;
  /**
   * Set the parameter combinations of plugin function attributes
   */
  plugins?: TCPlayerPlugin[];
  /**
   * @see https://github.com/video-dev/hls.js/blob/master/docs/API.md#fine-tuning
   */
  hlsConfig?: TCPlayerHLSConfig;
  /**
   * The `webrtcConfig` parameter to control the behavior during webrtc playback
   */
  webRTCConfig?: TCPlayerWebRTCConfig;
  /**
   * Tencent License URL
   */
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
  /**
   * Set the playback address.
   */
  src(value: string): void;
  /**
   * Set the callback after the player is initialized.
   */
  ready(callback: () => void): void;
  /**
   * Play/Resume playback.
   */
  play(): void;
  /**
   * Pause playback.
   */
  pause(): void;
  /**
   * Obtain the current playback time point
   */
  readonly currentTime: number;
  /**
   * Get the video duration.
   */
  readonly duration: number;
  /**
   * Get/set the player volume
   */
  volume: number;
  /**
   * Get/set player cover.
   */
  poster: string;
  /**
   * Enter full-screen mode.
   */
  requestFullscreen(): void;
  /**
   * Exit full-screen mode.
   */
  exitFullscreen(): void;
  /**
   * Whether you have entered full-screen mode.
   */
  readonly isFullscreen: boolean;
  /**
   * Listen for events.
   */
  on(event: TCPlayerEvent, listener: (...args: any) => void): void;
  /**
   * Listen to events, and the event handler can be executed only once.
   */
  one(event: TCPlayerEvent, listener: (...args: any) => void): void;
  /**
   * Unbind an event listener.
   */
  off(event: TCPlayerEvent, listener: (...args: any) => void): void;
  /**
   * Returns the video buffer interval.
   */
  readonly buffered: any;
  /**
   * Returns the buffer length as a percentage of the video duration.
   */
  readonly bufferedPercent: number;
  /**
   * Gets/sets the player area width, which will have no effect if the player size is set via CSS.
   */
  width: number;
  /**
   * Gets/sets the player area height, which will have no effect if the player size is set via CSS.
   */
  height: number;
  /**
   * Get the width of the video resolution.
   */
  readonly videoWidth: number;
  /**
   * Get the height of the video resolution.
   */
  readonly videoHeight: number;
  /**
   * Destroy the player.
   */
  dispose(): void;
}

export interface TCPlayerProps {
  options: TCPlayerOptions;
  /**
   * If playback has started, the `play()` method is called,
   * or `autoplay` is set to `true` and triggers when it takes effect,
   * then the paused property is false.
   */
  onplay?(...args: any): void;
  /**
   * Triggered when playback resumes after pausing or stopping due to buffering,
   * the `paused` property is false.
   * Usually this event is used to mark the actual playback of the video,
   * and the `play` event just starts playing, and the picture does not start rendering.
   */
  onplaying?(...args: any): void;
  /**
   * Triggered when data starts to be loaded.
   */
  onloadstart?(...args: any): void;
  /**
   * Triggered when the duration data of the video changes.
   */
  ondurationchange?(...args: any): void;
  /**
   * The metadata of the loaded video.
   */
  onloadedmetadata?(...args: any): void;
  /**
   * The event is triggered when the data for the current frame has been loaded,
   * but there is not enough data to play the next frame of the video.
   */
  onloadeddata?(...args: any): void;
  /**
   * Triggered when media data is obtained.
   */
  onprogress?(...args: any): void;
  /**
   * Triggered when the player is able to start playing the video.
   */
  oncanplay?(...args: any): void;
  /**
   * Triggers when the player is expected to be able to continue playing the specified video
   * without buffering.
   */
  oncanplaythrough?(...args: any): void;
  /**
   * Triggered when there is an error in video playback.
   */
  onerror?(...args: any): void;
  /**
   * Triggered when paused.
   */
  onpause?(...args: any): void;
  /**
   * Triggered when the playback rate changes.
   */
  onratechange?(...args: any): void;
  /**
   * Triggers at the end of the search for the specified playback position.
   */
  onseeked?(...args: any): void;
  /**
   * Triggers when the search for a specified playback position begins.
   */
  onseeking?(...args: any): void;
  /**
   * If the current playback position has changed.
   * It can be understood that the currentTime has changed.
   */
  ontimeupdate?(...args: any): void;
  /**
   * Set the volume or muted property value to be triggered when the value is changed.
   */
  onvolumechange?(...args: any): void;
  /**
   * Playback stops and is triggered when the next frame of content is unavailable.
   */
  onwaiting?(...args: any): void;
  /**
   * Triggered when the video playback has ended.
   * The `currentTime` value is equal to the maximum value of the property.
   */
  onended?(...args: any): void;
  /**
   * The sharpness switch is in progress.
   */
  onresolutionswitching?(...args: any): void;
  /**
   * The clarity switch is complete.
   */
  onresolutionswitched?(...args: any): void;
  /**
   * Triggered when the full-screen state is switched.
   */
  onfullscreenchange?(...args: any): void;
  /**
   * A collection of events when WebRTC is played.
   */
  onwebrtcevent?(...args: any): void;
  /**
   * Stats when playing WebRTC.
   */
  onwebrtcstats?(...args: any): void;
}
