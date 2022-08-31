#! /usr/bin/env node

import "reflect-metadata";
import { Command } from 'commander';
import { argv } from 'process';
import { container } from "./Framework/Container";
import * as commands from "./Commands";

function main() {
    const program = new Command();

    program.version('0.1.0').description('One-Ops is a cli tool for managing your devops needs');

    for (const className of Object.values(commands)) {
        const commandInstance = container.resolve(className);
        const command = program
            .command(commandInstance.getName())
            .description(commandInstance.getDescription());

        for (const arg of commandInstance.getArgs())
            command.argument(arg.getFormattedName(), arg.getDescription());

        command.action(commandInstance.execute);
    }

    program.parse(argv);
}

main();
