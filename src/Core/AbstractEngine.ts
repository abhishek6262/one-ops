import type { CommandArg } from "../Contracts/Command";
import { AbstractCommand } from "./AbstractCommand";

export type Command = new () => AbstractCommand;

export abstract class AbstractEngine {
  abstract registerCommands(...commands: Command[]): AbstractEngine;

  abstract setName(name: string): AbstractEngine;

  abstract setDescription(description: string): AbstractEngine;

  abstract setVersion(version: string): AbstractEngine;

  abstract start(): void;

  protected formatArg(command: CommandArg) {
    if (typeof command.required === 'boolean' && !command.required) {
      return `[${command.name}]`;
    }

    return `<${command.name}>`;
  }
}
