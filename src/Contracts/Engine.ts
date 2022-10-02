import { AbstractCommand } from '../Core/AbstractCommand';

export type Command = new () => AbstractCommand;

export interface Engine {
  registerCommands(...commands: Command[]): Engine;

  setName(name: string): Engine;

  setDescription(description: string): Engine;

  setVersion(version: string): Engine;

  start(): void;
}
