const cliSelect = require('cli-select')
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const generate = require('./generate')

const clean = (string) => string
const white = (string) => chalk.bgWhite.black(string)
const red = (string) => chalk.bgRed.white(string)
const green = (string) => chalk.bgGreen.black(string)

cliSelect({
  cleanup: false,
  values: ['Init seed version', 'Init full version (all demo preview pages)', 'Enter config file path'],
  valueRenderer: (value, selected) => {
    if (selected) {
      return white(value)
    }
    return value
  },
}).then((response) => {
  if (response.id === 0) {
    const resolvedSeedFile = path.resolve(__dirname, 'config-seed.json')
    console.log(green('Generating seed version...'))
    console.log(green('Config: ' + resolvedSeedFile))
    generate(resolvedSeedFile)
  }
  if (response.id === 1) {
    const resolvedFullFile = path.resolve(__dirname, 'config-full-preview.json')
    console.log(green('Generating full preview version...'))
    console.log(green('Config: ' + resolvedFullFile))
    generate(resolvedFullFile)
  }
  if (response.id === 2) {
    const configPath = readlineSync.question('Enter relative config file path: ')
    const resolvedCustomFile = path.resolve(configPath)
    if (fs.existsSync(resolvedCustomFile)) {
      console.log(green('Generating version with custom config file...'))
      console.log(green('Config: ' + resolvedCustomFile))
      generate(resolvedCustomFile)
    } else {
      console.log(red('Config file not found: ' + resolvedCustomFile))
    }
  }
}).catch(() => {
  console.log(white('Init skipped.'))
})