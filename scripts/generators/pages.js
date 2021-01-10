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

const rowTpl = (row) => `

`

const cardTpl = (card) => `

`

const widgetTpl = (widget) => `

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
      const { key, category, title, url: path } = page
      const pageContent = content[key]
      if (category) {
        return
      }

      const generateImports = (content) => {
        return `import { connect } from 'react-redux'`
      }

      const generateContent = (content) => {
        if (!content) { return `<div />` }
        return `
          <div>
            ${content.map(row => rowTpl(row))}
          </div>
        `
      }

      const imports = generateImports(pageContent)
      const formattedTitle = title.replace(/\b\w/g, l => l.toUpperCase()).replace(/[^a-zA-Z]/g, "")
      const generatedPageContent = generateContent(pageContent)
      const generatedPage = pageTpl(imports, formattedTitle, generatedPageContent)

      WRITE_FILE(pagesFolder, path, 'index.js', generatedPage)
      logg(`${path}/index.js`, 'clean', `${prefixSpaces} └─ `)

      if (page.children) {
        generatePages(page.children, level + 1)
      }
    })
  }
  generatePages(config)

}