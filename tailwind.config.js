/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    DEFAULT: "var(--primary)",
    hover: "var(--primary-hover)",
    shadow: "var(--kcf-primary-shadow)",
  },
  alert: {
    DEFAULT: "var(--kcf-alert)",
    hover: "var(--kcf-alert-hover)",
    shadow: "var(--kcf-alert-shadow)",
  },
  secondary: {
    DEFAULT: "var(--kcf-secondary)",
    hover: "var(--kcf-secondary-hover)",
    shadow: "var(--kcf-secondary-shadow)",
  },
  primaryLight: "var(--kcf-primary-light)",
  yellow: "var(--kcf-yellow)",
  error: "var(--kcf-error)",
  white: "var(--kcf-white)",
  black: "var(--kcf-black)",
  cardshadow: "var(--kcf-cardshadow)",
  grey_800: "var(--kcf-grey_800)",
  grey_700: "var(--kcf-grey_700)",
  grey_600: "var(--kcf-grey_600)",
  grey_500: "var(--kcf-grey_500)",
  grey_400: "var(--kcf-grey_400)",
  grey_300: "var(--kcf-grey_300)",
  grey_200: "var(--kcf-grey_200)",
  description: "var(--kcf-dp-description)",
  dropdown_indicator: "var(--kcf-dropdown_indicator)",
  offcanvas_bg: "var(--offcanvas-bg)",
  applicant_detailes: "var(--applicant_detailes_title)",
  applicant_detailes_border: "var(--applicant_detailes_border)",
  confirmation_blue: "var(--kcf-confirmation-blue)",
};

const spacing = {
  // 0: "var(--kcf-spacing-0)",
  1: "var(--kcf-spacing-1)",
  2: "var(--kcf-spacing-2)",
  3: "var(--kcf-spacing-3)",
  4: "var(--kcf-spacing-4)",
  5: "var(--kcf-spacing-5)",
  6: "var(--kcf-spacing-6)",
  8: "var(--kcf-spacing-8)",
  9: "var(--kcf-spacing-9)",
  10: "var(--kcf-spacing-10)",
  11: "var(--kcf-spacing-11)",
  12: "var(--kcf-spacing-12)",
  13: "var(--kcf-spacing-13)",
  14: "var(--kcf-spacing-14)",
  15: "var(--kcf-spacing-15)",
  16: "var(--kcf-spacing-16)",
  17: "var(--kcf-spacing-17)",
  18: "var(--kcf-spacing-18)",
  20: "var(--kcf-spacing-20)",
  24: "var(--kcf-spacing-24)",
  30: "var(--kcf-spacing-30)",
  40: "var(--kcf-spacing-40)",
  41: "var(--kcf-spacing-41)",
  44: "var(--kcf-spacing-44)",
  45: "var(--kcf-spacing-45)",
  46: "var(--kcf-spacing-46)",
  50: "var( --kcf-spacing-50)",
};

const fontWeight = {
  light: "var(--kcf-font-light)",
  regular: "var(--kcf-font-regular)",
  medium: "var(--kcf-font-medium)",
  semibold: "var(--kcf-font-semibold)",
  bold: "var(--kcf-font-bold)",
};

const fontSize = {
  48: "var(--kcf-text-48)",
  40: "var(--kcf-text-40)",
  36: "var(--kcf-text-36)",
  24: "var(--kcf-text-24)",
  20: "var(--kcf-text-20)",
  19: "var(--kcf-text-19)",
  18: "var(--kcf-text-18)",
  16: "var(--kcf-text-16)",
  15: "var(--kcf-text-15)",
  14: "var(--kcf-text-14)",
  13: "var(--kcf-text-13)",
  12: "var(--kcf-text-12)",
  10: "var(--kcf-text-10)",
};

const boxShadow = {
  primary: "var(--kcf-shadow-primary)",
  card: "var(--kcf-shadow-card)",
  lg: "var(--kcf-shadow-lg)",
  secondary: "var(--kcf-shadow-secondary)",
  alert: "var(--kcf-shadow-alert)",
  black: "var(--kcf-shadow-black)",
  black_sm: "var(--kcf-shadow-black-sm)",
  black_lg: "var(--kcf-shadow-black-lg)",
  white_sm: "var(--kcf-shadow-white-sm)",
  white_lg: "var(--kcf-shadow-white-lg)",
  primary_sm: "var(--kcf-shadow-primary-sm)",
  primary_lg: "var(--kcf-shadow-primary-lg)",
  alert_sm: "var(--kcf-shadow-alert-sm)",
  alert_lg: "var(--kcf-shadow-alert-lg)",
  offcanvas: "var(--kcf-shadow-offcanvas)",
  header_profile: "var(--kcf-shadow-header_offcanvas_profile)",
  header_borderbottom: "var(--kcf-shadow-headerbottom-border)",

  toggle: "var(--kcf-shadow-toggle-switch)",
  dropdown_menu: "var(--kcf-dropdown_menu)",
  select_menu: "var(--kcf-select_menu)",
  disease: "var(--kcf-disease)",
  row: "var(--kcf-row)",
  btn_shadow: "var(--kcf-btn-shadow)",
  // collapsiblesidebarcard: "var(--kcf-collapsiblecard-sidebar)",
  reinitiate: "var(--kcf-reinitiate-footer)",
};

const borderWidth = {
  sm: "var(--kcf-stroke-sm)",
  1: "var(--kcf-stroke-1)",
  2: "var(--kcf-stroke-2)",
  3: "var(--kcf-stroke-3)",
  4: "var(--kcf-stroke-4)",
  5: "var(--kcf-stroke-5)",
};

const screens = {
  xs: { max: "576px" },
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1420px",
  xxxl: "1600px",
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
      spacing,      
      height: {
        dynamic: "var(--dynamic-val)",
      },
      colors,
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
    },
  },
  plugins: [],
};

