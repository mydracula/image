/**
 * @name UnoCss v0.x
 * @link https://github.com/unocss/unocss
 * @desc The instant on-demand atomic CSS engine.
 * @config by https://github.com/deeptimes/nuxter-plus
*/

import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  // presetTypography,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const currentColor = (svg: string): string => {
  return svg.replace(/^<svg /, '<svg fill="currentColor" ')
}

export default defineConfig({
  shortcuts: [
    ['btn', 'inline-block w-full cursor-pointer'],
    ['btn-full', 'px-4 py-3 rounded-lg w-full bg-gray-600 uppercase text-white cursor-pointer'],
    ['btn-sm', 'px-4 py-2 rounded-md h-auto mx-auto uppercase cursor-pointer'],
    ['btn-xs', 'px-2 py-px rounded-md cursor-pointer bg-yellow-500'],
    ['btn-text', 'cursor-pointer flex items-center'],
    ['btn-icon', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    // 默认表单
    ['inputs', 'w-full rounded-2xl py-3 px-6 text-16px relative'],
    // 绝对定位
    ['abs-yc', 'absolute top-1/2 transform -translate-y-1/2'], // 垂直居中
    ['abs-xc', 'absolute left-1/2 transform -translate-x-1/2'], // 水平居中
    ['abs-xyc', 'absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'], // 绝对居中
    // 底部线条
    ['line-bx', 'h-px border-b'],
    ['line-link', 'border-dashed border-gray-300 mx-2 w-full h-px border-b'],
    // 缩略图
    ['thumb-rounded', 'rounded-md flex-none overflow-hidden'],
    // 主要
    ['card-main', 'bg-white rounded-xl mx-4 mt-2 mb-4 p-4'],
    ['card-header', 'flex justify-between items-center mb-3'],
    ['card-body', ' mx-4'],
  ],
  presets: [
    presetUno(),
    presetWind(),
    presetAttributify({ prefix: 'w:' }),
    presetIcons({
      prefix: 'i-',
      // scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        base: FileSystemIconLoader('./assets/icons/base', currentColor),
        fal: FileSystemIconLoader('./assets/icons/fal', currentColor),
        fas: FileSystemIconLoader('./assets/icons/fas', currentColor),
        fat: FileSystemIconLoader('./assets/icons/fat', currentColor),
        far: FileSystemIconLoader('./assets/icons/far', currentColor),
      },
    }),
    // presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        // family chinese
        song: ['STSong', 'SimSun'],
        // family english
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        roboto: 'Roboto',
        roboto_cond: 'Roboto Condensed',
        dmsd: 'DM Serif Display',
        // ohter..
      },
    }),
  ],
  rules: [
    // ['other', { color: 'red' }],
  ],
  theme: {
    colors: {
      gray: {
        50: '#FAFAFA',
        100: '#F4F4F5',
        200: '#E4E4E7',
        300: '#D4D4D8',
        400: '#A1A1AA',
        500: '#71717A',
        600: '#52525B',
        700: '#3F3F46',
        800: '#27272A',
        900: '#18181B',
      },
      veryCool: '#fc0', // class="text-very-cool"
      brand: {
        primary: '#1f6ae3', // class="bg-brand-primary"
      },
    },
    breakpoints: {
      xs: '640px',
      sm: '999px',
      md: '999px',
      lg: '999px',
      xl: '1320px',
    },
    boxShadow: {
      header: '0 8px 50px 0 rgba(0, 0, 0, 0.2)',
      footer: '0 -8px 50px 0 rgba(0, 0, 0, 0.5)',
    },
  },
  transformers: [
    transformerDirectives({ enforce: 'pre' }),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left mt-2 '.split(' '),
})
