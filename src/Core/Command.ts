export abstract class Command {
  abstract name: string;

  alias: string[] = [];

  abstract execute(): Promise<void> | void;
}
