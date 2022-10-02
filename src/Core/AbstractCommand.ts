import type { CommandArg } from "../Contracts/Command";

export abstract class AbstractCommand {
  abstract name: string;

  abstract description: string;

  alias: string[] = [];

  args: CommandArg[] = [];

  abstract execute(): void;
}
