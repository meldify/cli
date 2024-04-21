import { Command } from "commander";
import {
  intro,
  outro,
  log,
  text,
  group,
  password,
  cancel,
} from "@clack/prompts";
import { AbstractCommand } from "./abstract.command";

export class AuthCommand extends AbstractCommand {
  public load(program: Command): void {
    program
      .command("auth <method>")
      .alias("a")
      .description(
        "\n\tAuthentication:\n\t- signin: Log In to your Meldify account\n\t- signout: Log Out out of Meldify account"
      )
      .action(async (method: string) => {
        intro("Log In to Meldify");
        const result = await group(
          {
            email: () =>
              text({
                message: "What's your email address?",
                placeholder: "some@example.com",
              }),
            password: () =>
              password({
                message: "Enter your password:",
              }),
          },
          {
            onCancel: () => {
              cancel("Authentication cancelled.");
              process.exit(0);
            },
          }
        );

        log.info(result.email);
        log.info(result.password);

        outro("Authentication complete!");
      });
  }
}
