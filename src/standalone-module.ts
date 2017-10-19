import { rollup } from 'rollup'

export interface ModuleInfo {
  moduleName: string
  modulePath: string
}

export const transform = async (
  options: ModuleInfo,
  compact: boolean = true
) => {
  const { moduleName, modulePath } = options
  const bundle = await rollup({
    entry: modulePath
  })
  const { code } = await bundle.generate({
    format: 'cjs'
  })
  return code
}
