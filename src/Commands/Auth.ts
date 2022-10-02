import { AbstractCommand } from '../Core/AbstractCommand';

export class Auth extends AbstractCommand {
  name = 'auth';

  description = 'Authenticates the user';

  execute(): void {
    console.log('Running auth command in console...');
  }
}
