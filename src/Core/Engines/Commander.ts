import { Command as BaseCommand } from 'commander';
import { AbstractEngine, Command } from '../AbstractEngine';

export class Commander extends AbstractEngine {
  private instance: BaseCommand;

  constructor () {
    super();
    this.instance = new BaseCommand();
  }

  registerCommands(...commands: Command[]) {
    for (const command of commands) {
      const commandInstance = new command();
      const commanderInstance = this.instance.command(commandInstance.name);

      commanderInstance
        .command(commandInstance.name)
        .description(commandInstance.description);

      for (const arg of commandInstance.args) {
        commanderInstance.argument(this.formatArg(arg), arg.description);
      }

      commanderInstance.action(() => commandInstance.execute());
    }

    return this;
  }

  setName(name: string) {
    this.instance.name(name);
    return this;
  }
  
  setDescription(description: string) {
    this.instance.description(description);
    return this;
  }
  
  setVersion(version: string) {
    this.instance.version(version);
    return this;
  }
  
  start(): void {
    this.instance.parse();
  }
}
