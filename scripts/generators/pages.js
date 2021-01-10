const { GET_DIR_FOLDERS, DELETE_FOLDERS, WRITE_FILE } = require('../utils/io')
const logg = require('../utils/logg')

const pagesFolder = 'temp/pages'

const pageTpl = (imports, title, pageContent) => `
import React from 'react'
${imports}

const ${title} = () => {
  return (
    ${pageContent}
  )
}

export default ${title}
`

module.exports = (config, content) => {
  // wipe directory folders, excluding 'auth' folder
  const foldersToRemove = GET_DIR_FOLDERS(pagesFolder).filter((item) => { return item !== 'auth' })
  DELETE_FOLDERS(pagesFolder, foldersToRemove)

  // generate pages
  const generatePages = (config, level = 1) => {
    let prefixSpaces = ''
    Array(level).fill().forEach(() => prefixSpaces = prefixSpaces + '   ')

    config.forEach(page => {
      if (page.category) {
        return
      }
      const { title, url: path } = page
      const formattedTitle = title.replace(/\b\w/g, l => l.toUpperCase()).replace(/[^a-zA-Z]/g, "")
      const imports = `import { connect } from 'react-redux'`
      const pageContent = `<div>Empty Page</div>`

      WRITE_FILE(pagesFolder, path, 'index.js', pageTpl(imports, formattedTitle, pageContent))
      logg(`${path}/index.js`, 'clean', `${prefixSpaces} └─ `)

      if (page.children) {
        generatePages(page.children, level + 1)
      }
    })
  }
  generatePages(config)

}