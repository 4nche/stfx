import { tint, shade } from "polished"

const red = '#ba2222'
const blue = '#224bb3'
const green = '#3ca35d'

const sizes = {
  xxs: '320px',
  xs: '375px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  xxl: '2560px',
};

export const devices = {
  // min width sizes, so styles inside query above size "X" will be true
  'xxs<': `(min-width: ${sizes.xxs})`,
  'xs<': `(min-width: ${sizes.xs})`,
  'sm<': `(min-width: ${sizes.sm})`,
  'md<': `(min-width: ${sizes.md})`,
  'lg<': `(min-width: ${sizes.lg})`,
  'xl<': `(min-width: ${sizes.xl})`,
  'xxl<': `(min-width: ${sizes.xxl})`,
  // max width sizes, so styles inside query below size "X" will be true
  '<xxs': `(max-width: ${sizes.xxs})`,
  '<xs': `(max-width: ${sizes.xs})`,
  '<sm': `(max-width: ${sizes.sm})`,
  '<md': `(max-width: ${sizes.md})`,
  '<lg': `(max-width: ${sizes.lg})`,
  '<xl': `(max-width: ${sizes.xl})`,
  '<xxl': `(max-width: ${sizes.xxl})`,
};

const theme = {
  fontSize: {
    xxxs: '0.6rem',
    xxs: '0.8rem',
    xs: '1rem',
    sm: '1.2rem',
    default: '1.4rem',
    lg: '1.6rem',
    xl: '2rem',
    xxl: '3rem',
    xxxl: '4rem',
  },
  fontWeight: {
    light: 300,
    default: 400,
    medium: 500,
    bold: 600,
    extrabold: 700,
  },
  borderRadius: {
    none: '0',
    xs: '0.2rem',
    sm: '0.4rem',
    default: '0.6rem',
    lg: '0.8rem',
    xl: '1rem',
  },
  spacing: {
    0: '0',
    1: '0.1rem',
    2.5: '0.25rem',
    5: '0.5rem',
    7.5: '0.75rem',
    10: '1rem',
    15: '1.5rem',
    20: '2rem',
    30: '3rem',
    40: '4rem',
  },
  fontFamily: {
    'sans-serif': `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
  colors: {
    green1000: green,
    green900: tint(0.1, green),
    green800: tint(0.2, green),
    green700: tint(0.3, green),
    green600: tint(0.4, green),
    green500: tint(0.5, green),
    green400: tint(0.6, green),
    green300: tint(0.7, green),
    green200: tint(0.8, green),
    green100: tint(0.9, green),
    green50: tint(0.95, green),

    blue1000: blue,
    blue900: tint(0.1, blue),
    blue800: tint(0.2, blue),
    blue700: tint(0.3, blue),
    blue600: tint(0.4, blue),
    blue500: tint(0.5, blue),
    blue400: tint(0.6, blue),
    blue300: tint(0.7, blue),
    blue200: tint(0.8, blue),
    blue100: tint(0.9, blue),
    blue50: tint(0.95, blue),

    red1000: red,
    red900: tint(0.1, red),
    red800: tint(0.2, red),
    red700: tint(0.3, red),
    red600: tint(0.4, red),
    red500: tint(0.5, red),
    red400: tint(0.6, red),
    red300: tint(0.7, red),
    red200: tint(0.8, red),
    red100: tint(0.9, red),
    red50: tint(0.95, red),

    foreground1000: '#0E0E0E',
    foreground900: tint(0.05, '#0E0E0E'),
    foreground800: tint(0.1, '#0E0E0E'),
    foreground700: tint(0.15, '#0E0E0E'),
    foreground600: tint(0.2, '#0E0E0E'),
    foreground500: tint(0.25, '#0E0E0E'),
    foreground400: tint(0.3, '#0E0E0E'),
    foreground300: tint(0.35, '#0E0E0E'),
    foreground200: tint(0.4, '#0E0E0E'),
    foreground100: tint(0.45, '#0E0E0E'),

    background900: '#FFFFFF',
    background800: shade(0.02, '#FFFFFF'),
    background700: shade(0.04, '#FFFFFF'),
    background600: shade(0.06, '#FFFFFF'),
    background500: shade(0.08, '#FFFFFF'),
    background400: shade(0.1, '#FFFFFF'),
    background300: shade(0.12, '#FFFFFF'),
    background200: shade(0.14, '#FFFFFF'),
    background100: shade(0.16, '#FFFFFF'),
  },
  animation: {
    default: `cubic-bezier(0.19, 1, 0.22, 1)`,
  }
}

export default theme
