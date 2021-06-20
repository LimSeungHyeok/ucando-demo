import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);
const opts = {
  icons: {
    iconfont: "mdiSvg",
  },
  options: {
    customProperties: true,
  },
};
export default new Vuetify(opts);
