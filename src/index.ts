#! /usr/bin/env node

import { App } from './Core/App';
import { Auth } from './Commands/Auth';
import { Commander } from './Core/Commander';

new App(new Commander()).registerCommands(Auth).run();
