import { Command } from 'commander';
import { CommandExecutor } from '../Contracts/CommandExecutor';
import { Command as ICommand } from './Command';

export class Commander implements CommandExecutor {
  private app: Command;

  constructor() {
    this.app = new Command();
  }

  execute(): void {
    this.app.parse();
  }

  registerCommands(...commands: (new () => ICommand)[]): CommandExecutor {
    for (const command of commands) {
      const obj = new command();
      this.app
        .command(obj.name)
        .description(obj.description)
        .action(() => obj.execute());
    }

    return this;
  }

  setName(name: string): CommandExecutor {
    this.app.name(name);
    return this;
  }

  setDescription(description: string): CommandExecutor {
    this.app.description(description);
    return this;
  }

  setVersion(version: string): CommandExecutor {
    this.app.version(version);
    return this;
  }
}
