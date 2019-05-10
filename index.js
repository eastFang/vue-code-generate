#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const { prefixCompOrgEnum, compTypesEnum } = require('./utils')
const templateStrMap = require('./templates/export')

inquirer
  .prompt([
    {
      type: 'input',
      name: 'filePathName',
      message: '输入文件地址：',
      validate: (inputVal) => {
        return !!inputVal
      }
    },
    {
      type: 'list',
      name: 'prefixCompOrg',
      message: '选择组件前缀（公司组件，还是开源组件）：',
      default: 'yiwise',
      choices: prefixCompOrgEnum
    },
    {
      type: 'list',
      name: 'compType',
      message: '选择组件类型：',
      default: 'dialog',
      choices: compTypesEnum
    }
  ])
  .then(({ filePathName, prefixCompOrg, compType }) => {
    const absolutePathName = filePathName.startsWith('/') ? filePathName : path.resolve(process.cwd(), filePathName)
    fs.writeFileSync(absolutePathName, templateStrMap[compType](prefixCompOrg))
  })