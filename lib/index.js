#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const { copy } = require('copy-paste')
const { prefixCompOrgEnum, compTypesEnum } = require('./utils')
const templateStrMap = require('./templates/export')

inquirer
  .prompt([
    {
      type: 'list',
      name: 'outputType',
      message: '输出为文件，还是代码片段',
      default: '片段',
      choices: [
        '片段',
        '文件'
      ]
    },
    {
      type: 'input',
      name: 'filePathName',
      message: '输入文件地址：',
      validate: (inputVal) => {
        return !!inputVal
      },
      when: ({ outputType }) => {
        return outputType === '文件'
      }
    },
    {
      type: 'list',
      name: 'prefixCompOrg',
      message: '选择组件前缀（公司组件，还是开源组件）：',
      default: 'el',
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
  .then(({ outputType, filePathName, prefixCompOrg, compType }) => {
    const getTemplateStrFunc = templateStrMap[compType]
    if (outputType === '片段') {
      const templateStr = getTemplateStrFunc(prefixCompOrg)
      copy(templateStr, () => {
        console.log('🎉 代码片段已帮您自动拷贝，粘贴出来看看吧！\n')
        console.log(templateStr)
      })
      return
    }

    const absolutePathName = filePathName.startsWith('/') ? filePathName : path.resolve(process.cwd(), filePathName)
    fs.writeFileSync(absolutePathName, getTemplateStrFunc(prefixCompOrg))
    console.log(`🎉 生成的文件地址为: ${absolutePathName}`)
  })