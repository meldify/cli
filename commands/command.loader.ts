import { Command } from "commander";
import { InstallCommand } from "./install.command";
import InstallAction from "../actions/install.action";
import { AuthCommand } from "./auth.command";
import AuthAction from "../actions/auth.action";

export class CommandLoader {
  public static async load(program: Command) {
    new AuthCommand(new AuthAction()).load(program);
    new InstallCommand(new InstallAction()).load(program);
  }
}
