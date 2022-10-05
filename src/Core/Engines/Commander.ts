import { Command as BaseCommand } from 'commander';
import { AbstractEngine, Command } from '../AbstractEngine';
import { Argument } from '../Argument';

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

      commanderInstance.action(() => {
        const args: Record<string, unknown> = {};

        for (const [index, commandArgs] of commandInstance.args.entries()) {
          args[commandArgs.name] = commanderInstance.processedArgs[index];
        }

        commandInstance.execute(args);
      });
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

  private formatArg(arg: Argument) {
    return arg.required ? `<${arg.name}>` : `[${arg.name}]`;
  }
}
