/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Routes from './src/navigation/Routes'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
