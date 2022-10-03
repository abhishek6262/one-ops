import { Argument } from "./Argument";

export type CommandExecutionArguments = Record<string, unknown>; 

export abstract class AbstractCommand {
  abstract name: string;

  abstract description: string;

  alias: string[] = [];

  args: Argument[] = [];

  abstract execute(args: CommandExecutionArguments): void | Promise<void>;
}
