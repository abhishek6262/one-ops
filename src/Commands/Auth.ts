import { Command } from '../Core/Command';

export class Auth extends Command {
  name = 'auth';

  description = 'Authenticates the user';

  execute(): void {
    console.log('Running auth command in console...');
  }
}
