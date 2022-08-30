export class Argument {
    name: string;
    description = "";
    required = false;

    constructor(name: string) {
        this.name = name;
    }

    setDescription(description: string) {
        this.description = description;
        return this;
    }

    setIsRequired() {
        this.required = true;
        return this;
    }

    setIsNotRequired() {
        this.required = false;
        return this;
    }

    getName() {
        return this.name;
    }

    getFormattedName() {
        if (this.getIsRequired()) return `<${this.getName()}>`;

        return `[${this.getName()}]`;
    }

    getDescription() {
        return this.description;
    }

    getIsRequired() {
        return this.required;
    }
}
