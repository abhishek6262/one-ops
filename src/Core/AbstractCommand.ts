import { Argument } from "./Argument";

export abstract class AbstractCommand {
  abstract name: string;

  abstract description: string;

  alias: string[] = [];

  args: Argument[] = [];

  abstract execute(): void | Promise<void>;
}
