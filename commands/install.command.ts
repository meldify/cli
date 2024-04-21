import { Command } from "commander";
import { AbstractCommand } from "./abstract.command";

export class InstallCommand extends AbstractCommand {
  public load(program: Command): void {}
}
