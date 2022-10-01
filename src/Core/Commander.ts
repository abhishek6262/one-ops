import { Command } from 'commander';
import { CommandExecutor } from '../Contracts/CommandExecutor';
import { Command as ICommand } from './Command';

export class Commander implements CommandExecutor {
  private executor: Command;

  constructor() {
    this.executor = new Command();
  }

  execute(): void {
    this.executor.parse();
  }

  registerCommands(...commands: (new () => ICommand)[]) {
    for (const command of commands) {
      const obj = new command();
      this.executor.command(obj.name).description(obj.description);
    }

    return this;
  }

  setName(name: string): CommandExecutor {
    this.executor.name(name);
    return this;
  }

  setDescription(description: string): CommandExecutor {
    this.executor.description(description);
    return this;
  }

  setVersion(version: string): CommandExecutor {
    this.executor.version(version);
    return this;
  }
}
