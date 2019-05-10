const fs = require('fs')
const path = require('path')

const prefixCompOrgEnum = [
  'yiwise',
  'el'
]

const templatesDirPath = path.resolve(__dirname, './templates/')
const compTypesEnum = fs.readdirSync(templatesDirPath)
  .map(item => item.replace(/\.js/, ''))
  .filter(item => item !== 'export')

module.exports = {
  prefixCompOrgEnum,
  compTypesEnum
}