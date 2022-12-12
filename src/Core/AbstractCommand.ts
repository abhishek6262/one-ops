import { Argument } from "./Argument";
import { Config } from "./Config";

export interface CommandExecutionArguments extends Object {}

export abstract class AbstractCommand {
  abstract name: string;

  abstract description: string;

  alias: string[] = [];

  args: Argument[] = [];

  config = new Config();

  abstract execute(args: CommandExecutionArguments): void | Promise<void>;
}
