export abstract class Command {
  abstract name: string;

  alias: string[] = [];

  abstract execute(): void;
}
