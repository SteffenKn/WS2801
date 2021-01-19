import {Config as AlexaConfig} from 'ws2801-alexa';
import {Ws2801PiConfig as LedControllerConfig} from 'ws2801-pi';
import {Config as WebserverConfig} from 'ws2801-webserver';

export const config: Config = {
  ledAmount: 10,
  ledControllerConfig: {
    debug: false,
  },
  webserverConfig: {
    port: 12345,
    useAuth: true,
    confirmationPort: 54321,
  },
  alexaConfig: {
    appKey: '',
    secretKey: '',
    deviceId: '',
    logCommands: true,
  },
};

export type Config = {
  ledAmount: number,
  ledControllerConfig?: LedControllerConfig,
  webserverConfig: WebserverConfig,
  alexaConfig: AlexaConfig,
};
