import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'
import presetShadcn from './preset.shadcn'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-gray-800',
    'bg-active': 'bg-gray:10',
    'bg-faded': 'bg-gray:2',
    'bg-hover': 'dark:bg-accent:80 bg-gray:30',
    'bg-base': 'bg-background',
    'text-faded': 'text-gray-800:70 dark:text-gray-200:70',
    'text-semifaded': 'text-gray-900:80 dark:text-gray-300:80',
    'text-light': 'text-gray-300 dark:text-gray-600',
    'rounded-md': 'rounded-[4px]',
    'rounded-sm': 'rounded-[2px]',
    'animate-accordion-up': 'accordion-up',
    'animate-accordion-down': 'accordion-down',
  },
  theme: {
    fontFamily: {
      display: 'Mona Sans',
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Inter',
      },
    }),
    presetTypography(),
    presetShadcn(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  content: {
    pipeline: {
      include: [/\.ts/, /\.vue$/, /\.vue\?vue/],
    },
  },
})
