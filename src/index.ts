#! /usr/bin/env node

import { Auth } from './Commands/Auth';
import { App } from './Core/App';

const app = new App();

app.registerCommands(Auth).run();
