/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './pages/Login';

import {name as appName} from './app.json';
import Cadastrar from './pages/Cadastrar';

AppRegistry.registerComponent(appName, () => Cadastrar);
