import vue from "vue";
import vueForm from "vue-form";

var options = {
  "no-espacios": function (value) {
    return !value.includes(" ");
  },
};

vue.use(vueForm, options);