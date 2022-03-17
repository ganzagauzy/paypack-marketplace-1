import colors from "vuetify/es5/util/colors";

export default {
  ssr: false,
  target: "static",
  env: {
    NUXT_ENV_API_KEY: process.env.NUXT_ENV_API_KEY || "",
    NUXT_ENV_AUTH_DOMAIN: process.env.NUXT_ENV_AUTH_DOMAIN || "",
    NUXT_ENV_PROJECT_ID: process.env.NUXT_ENV_PROJECT_ID || "",
    NUXT_ENV_STORAGE_BUCKET: process.env.NUXT_ENV_STORAGE_BUCKET || "",
    NUXT_ENV_MESSAGING_SENDER_ID:
      process.env.NUXT_ENV_MESSAGING_SENDER_ID || "",
    NUXT_ENV_APP_ID: process.env.NUXT_ENV_APP_ID || "",
    NUXT_ENV_MEASUREMENT_ID: process.env.NUXT_ENV_MEASUREMENT_ID || "",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Paypack MarketPlace",
    title: "Paypack MarketPlace",
    htmlAttrs: {
      lang: "en",
    },
    titleTemplate(titleChunk) {
      return titleChunk ? `${titleChunk}` : "Welcome";
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "PayPack Market Place",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon1.ico" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/defaults.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/vue-upload-multiple-image.js',
    { src: "~plugins/vue-upload-multiple-image.js", ssr: false },
    { src: "~plugins/firebase.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "nuxt-gsap-module",
  ],
  //gsap

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-clipboard2",
    "nuxt-sweetalert2",
    "@nuxtjs/toast",
    "@nuxtjs/dotenv",
  ],

  //authentication

  auth: {
    persistence: "local", // default
    initialize: {
      // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
      onAuthStateChangedAction: "onAuthStateChangedAction",
      subscribeManually: false,
    },
    ssr: false, // default
    // emulatorPort: 9099,
    // emulatorHost: 'http://localhost',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    defaultAssets: {
      font: {
        family: "Quicksand",
      },
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#da9412",
          accent: "#d1dbec",
        },
        dark: {
          primary: "#da9412",
          accent: "#d1dbec",
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  //gsap
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
    extraEases: {
      expoScaleEase: true,
    },
  },
  loading: {
    color: '#da9412',
    height: '3px'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-upload-multiple-image", "vue-color"],
  },
};
