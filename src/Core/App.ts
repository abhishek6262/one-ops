import type { Command, Engine } from "../Contracts/Engine";

export class App {
  private name = 'one-ops';

  private description = 'OneOps is a cli tool for managing your devops need';

  private version = '0.0.1';

  constructor(private engine: Engine) {
    this.engine
      .setName(this.name)
      .setDescription(this.description)
      .setVersion(this.version);
  }

  public registerCommands(...commands: Command[]) {
    this.engine.registerCommands(...commands);
    return this;
  }

  public run() {
    this.engine.start();
  }
}
