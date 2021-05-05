

import '@kaetram/common';

import './assets';


interface InsomniaPhoneGapPlugin {
    keepAwake: () => void
}
interface CordovaPlugin {
    insomnia : InsomniaPhoneGapPlugin
}

interface Cordova {
    plugins : CordovaPlugin
}
declare global {
    interface Window {

        cordova : Cordova
    }
  }