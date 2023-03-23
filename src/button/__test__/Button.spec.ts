/*
 * @Author: 41
 * @Date: 2023-03-22 19:22:10
 * @LastEditors: 41
 * @LastEditTime: 2023-03-22 19:32:28
 * @Description:
 */
import Button from "../Button";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
// 测试分组
describe("Button", () => {
  // mount
  test("default_Button", () => {
    // @vue/test-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    // 断言
    expect(wrapper.text()).toBe("Button");
  });
});
describe("Button_color", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });
  test("red", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-red-500")
    ).toBe(true);
  });
});
