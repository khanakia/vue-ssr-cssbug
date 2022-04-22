import { openBlock, createElementBlock, toDisplayString } from 'vue';

var script = {
  data() {
    return { name: 'Jane Doe', color: 'blue' }
  }
};

const _hoisted_1 = { class: "banner" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("h1", _hoisted_1, "Hello " + toDisplayString($data.name), 1 /* TEXT */))
}

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

script.render = render;

export { script as default };
