import { renameSync, readdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const root = resolve(__dirname, 'questions')
const categories = readdirSync(root).filter(path=>readdirSync(resolve(root, path)).length !== 0)

for(const category of categories) {
  const subCategories = readdirSync(resolve(root, category))

  for(const subCategory of subCategories) {
    const files = readdirSync(resolve(root, category, subCategory))

    files.forEach(file=>{
      // if(file === 'README.md') {
      //   renameSync(resolve(root, category, subCategory, 'README.md'),
      //   resolve(root, category, subCategory, 'README.en.md'))
      // }

      // if(file === 'README.zh-CN.md') {
      //   renameSync(resolve(root, category, subCategory, 'README.zh-CN.md'),
      //   resolve(root, category, subCategory, 'README.md'))
      // }

    })
  }

}




