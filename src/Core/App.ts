import { CommandExecutor } from '../Contracts/CommandExecutor';
import { Command } from './Command';

export class App {
  private name = 'one-ops';

  private description = 'OneOps is a cli tool for managing your devops need';

  private version = '0.0.1';

  public constructor(private commandExecutor: CommandExecutor) {
    this.commandExecutor.setName(this.name).setDescription(this.description).setVersion(this.version);
  }

  public registerCommands(...commands: (new () => Command)[]) {
    this.commandExecutor.registerCommands(...commands);
    return this;
  }

  public run() {
    this.commandExecutor.execute();
  }
}
