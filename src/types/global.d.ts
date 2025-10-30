import { CMS } from 'netlify-cms';

declare global {
  interface Window {
    CMS: typeof CMS;
  }
}

export {}; // This file needs to be a module
