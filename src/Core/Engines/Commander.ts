import { Command as BaseCommand } from 'commander';
import type { Command, Engine } from '../../Contracts/Engine';

export class Commander implements Engine {
  private instance: BaseCommand;

  constructor () {
    this.instance = new BaseCommand();
  }

  registerCommands(...commands: Command[]): Engine {
    for (const command of commands) {
      const commandInstance = new command();
      
      this.instance
        .command(commandInstance.name)
        .description(commandInstance.description);
    }

    return this;
  }

  setName(name: string): Engine {
    this.instance.name(name);
    return this;
  }
  
  setDescription(description: string): Engine {
    this.instance.description(description);
    return this;
  }
  
  setVersion(version: string): Engine {
    this.instance.version(version);
    return this;
  }
  
  start(): void {
    this.instance.parse();
  }
}
