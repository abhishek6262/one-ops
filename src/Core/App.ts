import { Command } from './Command';

export class App {
  private name = 'one-ops';

  private description = 'OneOps is a cli tool for managing your devops need';

  private version = '0.0.1';

  private commands: typeof Command[] = [];

  constructor() {}

  public registerCommands(...commands: typeof Command[]) {
    this.commands = [...this.commands, ...commands];
    return this;
  }

  public run() {}
}
