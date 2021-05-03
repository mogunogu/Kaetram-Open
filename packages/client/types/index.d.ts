

import '@kaetram/common';

import './assets';


interface InsomniaPhoneGapPlugin {
    keepAwake: () => void
}
interface CordovaPlugin {
    insomnia : InsomniaPhoneGapPlugin
}
declare global {
    interface Window {
        plugins : CordovaPlugin
    }
  }