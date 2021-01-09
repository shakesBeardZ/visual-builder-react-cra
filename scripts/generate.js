const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const { REPLACE_LINE, REPLACE_NEXT_LINE, REPLACE_BETWEEN } = require('./utils')

const clean = (string) => string
const white = (string) => chalk.bgWhite.black(string)
const red = (string) => chalk.bgRed.white(string)
const green = (string) => chalk.bgGreen.black(string)

const generateRoutes = (config) => {
  console.log(white('  ├─ Generating routes config...'))
  if (!config) {
    console.log(white('  │  ❎ Routes config not found. Skipping...'))
    return
  }
  console.log(white('  │  ✅ Done...'))
}

const generateMenu = (config) => {
  console.log(white('  ├─ Generating menu config...'))
  if (!config) {
    console.log(white('  │  ❎ Menu config not found. Skipping...'))
    return
  }
  console.log(white('  │  ✅ Done...'))
}

const generateSettings = (settings) => {
  console.log(white('  ├─ Generating app settings...'))
  if (!settings) {
    console.log(white('  │  ❎ App settings not found. Skipping...'))
    return
  }
  console.log(white('  │  ✅ Done...'))
}

const generatePages = (config, content) => {
  console.log(white('  └─ Generating pages...'))
  if (!content) {
    console.log(white('  │  ❎ Pages content config not found. Skipping...'))
    return
  }
  console.log(white('     ✅ Done...'))
}

const generate = (filepath) => {
  try {
    const { vb, config, content, settings } = JSON.parse(fs.readFileSync(filepath))
    if (!vb) {
      console.log(red('Wrong config file. Try to use another one.'))
      return
    }
    generateRoutes(config)
    generateMenu(config)
    generateSettings(settings)
    generatePages(config, content)
  } catch {
    console.log(red('Wrong config file. Try to use another one.'))
  }
}

if (process.argv[2] && process.argv[2].startsWith('--config=')) {
  const resolvedPath = path.resolve(__dirname, process.argv[2].replace('--config=', ''))
  if (!fs.existsSync(resolvedPath)) {
    console.log(red('Config file not found: ' + resolvedPath))
    return
  }
  console.log(green('Run generator with config: ' + resolvedPath))
  generate(resolvedPath)
}

module.exports = generate