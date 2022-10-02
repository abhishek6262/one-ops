import { Command as BaseCommand } from 'commander';
import { CommandArg } from '../../Contracts/Command';
import { AbstractEngine, Command } from '../AbstractEngine';

export class Commander extends AbstractEngine {
  private instance: BaseCommand = new BaseCommand();

  registerCommands(...commands: Command[]) {
    for (const command of commands) {
      const commandInstance = new command();
      const commanderInstance = this.instance.command(commandInstance.name);
      
      commanderInstance.description(commandInstance.description);
      
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

  private formatArg(arg: CommandArg) {
    return this.isArgRequired(arg) ? `<${arg.name}>` : `[${arg.name}]`;
  }
}
