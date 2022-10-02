import {Command as BaseCommand} from '../Core/Command';

export type Command = new () => BaseCommand;

export interface Engine {
  registerCommands(...commands: Command[]): Engine;

  setName(name: string): Engine;

  setDescription(description: string): Engine;

  setVersion(version: string): Engine;

  start(): void;
}
