export abstract class AbstractCommand {
  abstract name: string;

  abstract description: string;

  alias: string[] = [];

  abstract execute(): void;
}
