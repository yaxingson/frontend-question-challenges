import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  title:'FE-INTERVIEW FAQ',
  titleTemplate:false,
  description:'',
  themeConfig:{
    nav:[
      {
        text:'主页', link:'/',
      },
      { text:'演练场', link:'/catelog/index'}
    ],
    sidebar:[
      {
        text:'HTML',
        link:'/catelog/html/index',
        collapsed:true
      },
      {
        text:'CSS',
        link:'/catelog/css/index',
        collapsed:true,
        items:[
          {text:'布局', link:'/catelog/css/layout'}
        ]
      },
      {
        text:'JavaScript',
        link:'/catelog/javascript/index',
        collapsed:true
      },
    ],
    socialLinks:[],
    outline:{
      level: 2
    }
  },
  srcDir:'docs',
  vite:{
    server:{
      port:9527
    },
    resolve:{
      alias:{
        '@':resolve(__dirname, '..', 'docs')
      }
    }
  }
})