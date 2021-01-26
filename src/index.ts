import {Config} from './config';
export {Config as AlexaConfig} from 'ws2801-alexa';
export {Ws2801PiConfig as LedControllerConfig} from 'ws2801-pi';
export {Config as WebserverConfig} from 'ws2801-webserver';

export * from './ws2801';

export type WS2801Config = Config;
