import { Command } from './Command';

export class App {
  private name = 'one-ops';

  private description = 'OneOps is a cli tool for managing your devops need';

  private version = '0.0.1';

  private commands: Command[] = [];

  public run() {
    console.log('Running the app...');
  }
}
