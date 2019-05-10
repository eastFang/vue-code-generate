const fs = require('fs')

const prefixCompOrgEnum = [
  'yiwise',
  'el'
]
const compTypesEnum = fs.readdirSync('./templates')
  .map(item => item.replace(/\.js/, ''))
  .filter(item => item !== 'export')

module.exports = {
  prefixCompOrgEnum,
  compTypesEnum
}