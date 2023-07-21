import MarkdownIt from 'markdown-it'

// componentPreview check
export const isCheckPreviewCom1 = /^<preview (.*)><\/preview>$/
export const isCheckPreviewCom2 = /^<preview (.*) \/>$/
export const isCheckContainerPreview = /^demo-preview=(.+)$/

const scriptRE = /<\/script>/
const scriptLangTsRE = /<\s*script[^>]*\blang=['"]ts['"][^>]*/
const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/
const scriptClientRE = /<\s*script[^>]*\bclient\b[^>]*/
const scriptSetupCommonRE = /<\s*script\s+(setup|lang='ts'|lang="ts")?\s*(setup|lang='ts'|lang="ts")?\s*>/

/**
 * @param componentName
 */
export const handleComponentName = (componentName: string) => {
  let newName = componentName
  newName = newName.replaceAll(/[_|-]+(\w)/g, ($0, $1) => {
    return $1.toUpperCase()
  })
  return newName
}

/**
 * @param mdInstance
 * @param path
 * @param componentName
 */
export const injectComponentImportScript = (env: any, path: string, componentName: string) => {
  const scriptsCode = env.sfcBlocks.scripts as any[]


  const scriptsSetupIndex = scriptsCode.findIndex((script: any) => {
    if (scriptSetupRE.test(script.tagOpen) || scriptLangTsRE.test(script.tagOpen)) return true
    return false
  })

  const _componentName = handleComponentName(componentName)

  if (scriptsSetupIndex === -1) {
    const scriptBlockObj = {
      type: 'script',
      tagClose: '</script>',
      tagOpen: "<script setup lang='ts'>",
      content: `<script setup lang='ts'>
        import ${_componentName} from '${path}'
        </script>`,
      contentStripped: `import ${_componentName} from '${path}'`
    }
    scriptsCode.push(scriptBlockObj)
  } else {
    const oldScriptsSetup = scriptsCode[0]
    if (oldScriptsSetup.content.includes(path) && oldScriptsSetup.content.includes(_componentName)) {
      scriptsCode[0].content = oldScriptsSetup.content
    } else {

      const scriptCodeBlock = '<script lang="ts" setup>\n'
      scriptsCode[0].content = scriptsCode[0].content.replace(scriptSetupCommonRE, scriptCodeBlock)

      scriptsCode[0].content = scriptsCode[0].content.replace(
        scriptCodeBlock,
        `<script setup>\n
      import ${_componentName} from '${path}'\n`
      )
    }
  }
}

/**
 * @param mdInstance
 * @param sourceCode
 * @param suffix
 * @returns
 */
export const transformHighlightCode = (mdInstance: MarkdownIt, sourceCode: string, suffix: string) =>
  mdInstance.options.highlight!(sourceCode, suffix, '')

/**
 * @param path
 * @returns
 */
export const composeComponentName = (path: string) => {
  let isFlag = true
  const componentList: string[] = []
  while (isFlag) {
    const lastIndex = path.lastIndexOf('/')
    if (lastIndex === -1) {
      isFlag = false
    } else {
      const name = path.substring(lastIndex + 1)
      componentList.unshift(name)
      path = path.substring(0, lastIndex - 1)
    }
  }
  return componentList.join('-').split('.')[0]
}

/**
 * @param path
 * @returns
 */
export const isCheckingRelativePath = (path: string) => {
  const relativePath = path
  if (relativePath.startsWith('./') || relativePath.startsWith('../') || relativePath.startsWith('/'))
    return relativePath
  return `./${relativePath}`
}
