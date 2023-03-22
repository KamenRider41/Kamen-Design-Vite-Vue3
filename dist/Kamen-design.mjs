import { defineComponent, createVNode } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  size: {
    type: String,
    default: "large"
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  }
};
const Button = defineComponent({
  name: "KMButton",
  props,
  setup(props2, {
    slots
  }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("button", {
      "disabled": props2.disabled,
      "onClick": () => {
        if (!props2.disabled)
          ;
      },
      "class": `
        py-${size[props2.size].y}
        px-${size[props2.size].x}
        ${props2.round ? "rounded-full" : "rounded-lg"}
        bg-${props2.color}-${props2.plain ? "100" : "500"}
        hover:bg-${props2.color}-400
        border-${props2.color}-${props2.plain ? "500" : "500"}
        cursor-pointer
        border-solid
        text-${props2.plain ? props2.color + "-500" : "white"}
        text-${size[props2.size].text}
        hover:text-white
        transition duration-300 ease-in-out transform hover:scale-105
        mx-1
        ${props2.disabled ? "cursor-not-allowed opacity-50" : ""}
      `
    }, [props2.icon ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const entry = {
  install(app) {
    app.component(Button.name, Button);
  }
};
export {
  Button as KMButton,
  entry as default
};
