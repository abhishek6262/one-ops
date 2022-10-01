export abstract class Command {
  abstract name: string;

  abstract description: string;

  alias: string[] = [];

  abstract execute(): void;
}
