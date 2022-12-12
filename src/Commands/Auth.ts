import { AbstractCommand } from '../Core/AbstractCommand';
import { Argument } from '../Core/Argument';

interface AuthExecutionArguments {
  token: string;
}

export class Auth extends AbstractCommand {
  name = 'auth';

  description = 'Authenticates the user using the personal access token';

  args = [
    new Argument('token', 'The personal token generated in the azure'),
  ];

  execute(args: AuthExecutionArguments): void {
    console.log('Running auth command in console...');

    this.config.set('AUTH_TOKEN', args.token);
  }
}
