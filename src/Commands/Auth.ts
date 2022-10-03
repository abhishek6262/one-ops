import { AbstractCommand, CommandExecutionArguments } from '../Core/AbstractCommand';
import { Argument } from '../Core/Argument';

export class Auth extends AbstractCommand {
  name = 'auth';

  description = 'Authenticates the user using the personal access token';

  args = [
    new Argument('token', 'The personal token generated in the azure'),
  ];

  execute(args: CommandExecutionArguments): void {
    console.log('Running auth command in console...');
  }
}
