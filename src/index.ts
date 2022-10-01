#! /usr/bin/env node

import { Command } from 'commander';
import { argv } from 'process';

function main() {
  const program = new Command();

  program.parse(argv);
}

main();
