import { Command } from '../Core/Command';

export interface CommandExecutor {
  registerCommands(...commands: (new () => Command)[]): CommandExecutor;
  setName(name: string): CommandExecutor;
  setDescription(description: string): CommandExecutor;
  setVersion(version: string): CommandExecutor;
  execute(): void;
}
