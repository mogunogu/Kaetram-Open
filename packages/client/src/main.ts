import $ from 'jquery';

import App from './app';
import Game from './game';
import log from './lib/log';

$(() => {

    const app = new App();
    
    app.sendStatus('게임 로딩중 ..');

    log.debug('Loading the main application...');

    if (app.config.worldSwitch) $('#worlds-switch').show();

    new Game(app);
});
