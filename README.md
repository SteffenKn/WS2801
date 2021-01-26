# WS2801

WS2801 is a ready-to-use package that combines [WS2801-Pi](https://www.npmjs.com/package/ws2801-pi), its [webserver](https://www.npmjs.com/package/ws2801-pi), and the [Alexa voice command handler](https://www.npmjs.com/package/ws2801-alexa).

## Wiring

The wiring of the Pi is described [here](https://github.com/SteffenKn/WS2801-PI#wiring).

## Usage

There are basically two ways to use WS2801:

### Using this repository

1. Clone this repository
2. Edit the config file as described [here](#Configuration)
3. Run the build script: `npm run build`
4. Run the start script: `npm start`

### Using the npm module

1. Create a new npm project folder
2. Install this module: `npm i ws2801`

```typescript
import {Ws2801PiConfig} from 'ws2801-pi';
import {
  AlexaConfig,
  LedControllerConfig,
  WebserverConfig,
  WS2801,
  WS2801Config,
} from './src/index';

const webserverConfig: WebserverConfig = {
  port: 45451,
  confirmationPort: 45452,
  useAuth: true,
};

const ledControllerConfig: LedControllerConfig = {
  debug: true,
};

const alexaConfig: AlexaConfig = {
  appKey: '<your-sinricpro-app-key>',
  secretKey: '<your-sinricpro-secret-key>',
  deviceId: '<your-sinricpro-device-id>',
};

const config: WS2801Config = {
  ledAmount: 10,
  ledControllerConfig: ledControllerConfig,
  webserverConfig: webserverConfig,
  alexaConfig: alexaConfig,
};

const ws2801: WS2801 = new WS2801(config);

ws2801.start();
```

## Configuration

The config can be specified when initializing WS2801.
If no config was specified or if the repository is used, the defaultConfig which is stored [here](./src/config.ts).

The config can look like this:
```
{
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
```

- `ledAmount` is used to specify how many leds are connected to the Pi.

- `ledControllerConfig` is described [here](https://github.com/SteffenKn/WS2801-pi#config).
- `webserverConfig` is described [here](https://github.com/SteffenKn/WS2801-webserver#configuration).
- `alexaConfig` is described [here](https://github.com/SteffenKn/WS2801-alexa#ws2801-alexa-1).
## Functions

### constructor

#### Parameters:

- `config`
  - optional
  - Type: [Config](./src/config.ts)
  - The config for this module, as described [here](#Configuration). If no value is set, the [default config](./src/config.ts) is used.

### start

Starts the webserver and the alexa device handler.

### stop

Stops the webserver and the alexa device handler.

## Routes

The available routes are described [here](https://github.com/SteffenKn/WS2801-webserver#routes).
