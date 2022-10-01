import { Command } from '../Core/Command';

export class Auth extends Command {
  name = 'auth';

  execute(): void {
    console.log('Running auth command in console...');
  }
}
