#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { testFunction } from './commands/testFunction';

const program = new Command();

program
  .name('remark-backend-cli')
  .description(
    'A CLI tool built with TypeScript and Node.js for the Backend Challenge at Remark'
  )
  .version('1.0.0');

program
  .command('test <arg>')
  .description('Test command: returns arguement')
  .action((name) => {
    console.log(chalk.green(testFunction(name)));
  });

program.parse(process.argv);
