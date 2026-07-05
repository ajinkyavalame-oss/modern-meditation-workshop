/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'wistia-player': {
      'media-id'?: string;
      aspect?: string;
      class?: string;
      style?: string;
    };
  }
}
