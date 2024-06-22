// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const brotherhoodsLightTheme = {
  dark: false,
  colors: {
    primary: "#1b2330",
    secondary: "#97a7b0",
    error: "#d9534f",
    background: "#f4f4f4",
    text: "#333333",
    border: "#dddddd",
  },
};

export default createVuetify({
  defaults: {
    VTextField: {
      variant: "solo",
    },
    VBtn: {
      color: "primary",
      size: "large",
    },
  },
  theme: {
    defaultTheme: "brotherhoodsLightTheme",
    themes: {
      brotherhoodsLightTheme,
    },
  },
});
