import Vue from "vue";

// import VTooltip from 'v-tooltip'

import VueUploadMultipleImage from "vue-upload-multiple-image";
import { Photoshop } from "vue-color";

Vue.use(VueUploadMultipleImage);
Vue.component('photoshop-picker', Photoshop);
// Vue.component('chrome-picker',chrome);

