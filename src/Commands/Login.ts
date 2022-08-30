import * as azure from "azure-devops-node-api";
import { Command } from "../Contracts/Command";
import { Argument } from "../Core/Argument";

export class Login extends Command {
    name = "login";
    description = "Login into the one-ops";
    args = [
        new Argument("token").setDescription("The token to login with").setIsRequired(),
    ];

    async execute(token: string) {
        const authClient = azure.getPersonalAccessTokenHandler(token);
        const connection = new azure.WebApi("https://vssps.dev.azure.com/BFHL", authClient);
        const profileClient = await connection.getProfileApi();

        try {
            await profileClient.getProfile("me");
        } catch (error) {
            console.error(error);
        }
    }
}
