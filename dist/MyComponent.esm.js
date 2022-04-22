import { openBlock, createElementBlock, toDisplayString } from 'vue';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.banner {\n  color: red;\n}\n";
styleInject(css_248z);

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
  data() {
    return { name: 'Jane Doe', color: 'blue' }
  }
};

const _hoisted_1 = { class: "banner" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("h1", _hoisted_1, "Hello " + toDisplayString($data.name), 1 /* TEXT */))
}
var MyComponent = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/Users/khanakia/D1/www/js/vue/vue-rollup-2/src/MyComponent.vue"]]);

export { MyComponent as default };
