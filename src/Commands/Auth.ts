import type { CommandArg } from '../Contracts/Command';
import { AbstractCommand } from '../Core/AbstractCommand';

export class Auth extends AbstractCommand {
  name = 'auth';

  description = 'Authenticates the user using the personal token';

  args: CommandArg[] = [
    {
      name: 'token',
      description: 'The personal token generated in the azure',
    }
  ];

  execute(): void {
    console.log('Running auth command in console...');
  }
}
