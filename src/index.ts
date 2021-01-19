import {AlexaDeviceHandler} from 'ws2801-alexa';
import LedController from 'ws2801-pi';
import {Ws2801Webserver} from 'ws2801-webserver';

import {Config, config as defaultConfig} from './config';

export type WS2801Config = Config;
export class WS2801 {
  private webserver: Ws2801Webserver;
  private alexaDeviceHandler: AlexaDeviceHandler;

  constructor(config?: Config) {
    const configToUse: Config = config ? config : defaultConfig;

    const ledController: LedController = new LedController(configToUse.ledAmount, configToUse.ledControllerConfig);
    this.webserver = new Ws2801Webserver(configToUse.webserverConfig, ledController);
    this.alexaDeviceHandler = new AlexaDeviceHandler(configToUse.alexaConfig, ledController);

    ledController.clearLeds().show();
  }

  public start(): void {
    this.webserver.start();
    this.alexaDeviceHandler.start();
  }

  public stop(): void {
    this.webserver.stop();
    this.alexaDeviceHandler.stop();
  }
}
