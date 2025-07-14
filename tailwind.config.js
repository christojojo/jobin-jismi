/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    DEFAULT: "var(--primary)",
    hover: "var(--primary-hover)",
    shadow: "var(--primary-shadow)",
  },
  alert: {
    DEFAULT: "var(--alert)",
    hover: "var(--alert-hover)",
    shadow: "var(--alert-shadow)",
  },
  secondary: {
    DEFAULT: "var(--secondary)",
    hover: "var(--secondary-hover)",
    shadow: "var(--secondary-shadow)",
  },
  primaryLight: "var(--primary-light)",
  white: "var(--white)",
  black: "var(--black)",
  outline: "var(--border-outline)",
  primary100: "var(--primary-100)",
  primaryHover: "var(--primary-hover)",
  secondaryHover: "var(--secondary-hover)",
};

const spacing = {
  // 0: "var(--spacing-0)",
  1: "var(--spacing-1)",
  2: "var(--spacing-2)",
  3: "var(--spacing-3)",
  4: "var(--spacing-4)",
  5: "var(--spacing-5)",
  6: "var(--spacing-6)",
  8: "var(--spacing-8)",
  9: "var(--spacing-9)",
  10: "var(--spacing-10)",
  11: "var(--spacing-11)",
  12: "var(--spacing-12)",
  13: "var(--spacing-13)",
  14: "var(--spacing-14)",
  15: "var(--spacing-15)",
  16: "var(--spacing-16)",
  17: "var(--spacing-17)",
  18: "var(--spacing-18)",
  20: "var(--spacing-20)",
  24: "var(--spacing-24)",
  30: "var(--spacing-30)",
  40: "var(--spacing-40)",
  41: "var(--spacing-41)",
  44: "var(--spacing-44)",
  45: "var(--spacing-45)",
  46: "var(--spacing-46)",
  50: "var( --spacing-50)",
};

const fontWeight = {
  light: "var(--font-light)",
  regular: "var(--font-regular)",
  medium: "var(--font-medium)",
  semibold: "var(--font-semibold)",
  bold: "var(--font-bold)",
};

const fontSize = {
  48: "var(--text-48)",
  40: "var(--text-40)",
  36: "var(--text-36)",
  24: "var(--text-24)",
  20: "var(--text-20)",
  19: "var(--text-19)",
  18: "var(--text-18)",
  16: "var(--text-16)",
  15: "var(--text-15)",
  14: "var(--text-14)",
  13: "var(--text-13)",
  12: "var(--text-12)",
  10: "var(--text-10)",
};

const boxShadow = {
  primary: "var(--shadow-primary)",
  card: "var(--shadow-card)",
  lg: "var(--shadow-lg)",
  secondary: "var(--shadow-secondary)",
  alert: "var(--shadow-alert)",
  black: "var(--shadow-black)",
  black_sm: "var(--shadow-black-sm)",
  black_lg: "var(--shadow-black-lg)",
  white_sm: "var(--shadow-white-sm)",
  white_lg: "var(--shadow-white-lg)",
  primary_sm: "var(--shadow-primary-sm)",
  primary_lg: "var(--shadow-primary-lg)",
  alert_sm: "var(--shadow-alert-sm)",
  alert_lg: "var(--shadow-alert-lg)",
  offcanvas: "var(--shadow-offcanvas)",
  header_profile: "var(--shadow-header_offcanvas_profile)",
  header_borderbottom: "var(--shadow-headerbottom-border)",

  toggle: "var(--shadow-toggle-switch)",
  dropdown_menu: "var(--dropdown_menu)",
  select_menu: "var(--select_menu)",
  disease: "var(--disease)",
  row: "var(--row)",
  btn_shadow: "var(--btn-shadow)",
  // collapsiblesidebarcard: "var(--collapsiblecard-sidebar)",
  reinitiate: "var(--reinitiate-footer)",
};

const borderWidth = {
  sm: "var(--stroke-sm)",
  1: "var(--stroke-1)",
  2: "var(--stroke-2)",
  3: "var(--stroke-3)",
  4: "var(--stroke-4)",
  5: "var(--stroke-5)",
};

const screens = {
  xs: { max: "576px" },
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1334px",
  laptop: { min: "1200px", max: "1599px" },
};

export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    fontWeight,
    screens,
    extend: {
      fontSize,
      borderWidth,
      boxShadow,
      // spacing,      
      height: {
        dynamic: "var(--dynamic-val)",
      },
      keyframes: {
        fill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        fill: 'fill linear forwards',
      },
      colors,     
    },
  },
  plugins: [],
};

