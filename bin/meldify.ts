#!/usr/bin/env node

import { Command } from "commander";
import { CommandLoader } from "../commands/command.loader";

async function main() {
  const program = new Command();

  program
    .version(
      require("../package.json").version,
      "-v, --version",
      "Output the current version."
    )
    .usage("<command> [options]")
    .helpOption("-h, --help", "Output usage information.");

  await CommandLoader.load(program);

  await program.parseAsync();
}

main();
