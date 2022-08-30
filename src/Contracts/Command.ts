import { Argument } from "../Core/Argument";

export abstract class Command {
    abstract name: string;
    abstract description: string;

    args: Argument[] = [];

    abstract execute(...args: any[]): void;

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getArgs() {
        return this.args;
    }
}
