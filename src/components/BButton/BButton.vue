<template>
    <button type="button" class="btn btn-default">
        12312312
        {{ disabled }}
    </button>
</template>
  
<script lang="ts">
import { computed, defineComponent, type PropType, toRef } from 'vue'
// import {ButtonProps} from './types'

interface ButtonProps {
    active?: boolean;
    disabled?: boolean;
    href: string | undefined;
    pill?: boolean;
    pressed?: boolean;
    rel?: string | undefined;
    size?: 'lg' | 'sm';
    squared?: boolean;
    tag?: string;
    target?: boolean;
    type?: 'default' | 'primary';
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
    loading?: boolean;
    loadingMode: "fill" | "inline";
}

export default defineComponent({
    // components: {BLink, BSpinner},
    props: {
        active: {
            type: Boolean as PropType<ButtonProps["active"]>,
            default: false
        },
        disabled: { type: Boolean as PropType<ButtonProps["disabled"]>, default: false },
        href: { type: String as PropType<ButtonProps["href"]>, required: false },
        pill: { type: Boolean as PropType<ButtonProps["pill"]> as PropType<ButtonProps["variant"]>, default: false },
        pressed: { type: Boolean as PropType<ButtonProps["pressed"]>, default: false },
        rel: { type: String, default: undefined },
        size: { type: String as PropType<ButtonProps["size"]>, default: "md" },
        squared: { type: Boolean as PropType<ButtonProps["squared"]>, default: false },
        tag: { type: String as PropType<ButtonProps["tag"]>, default: "button" },
        target: { type: Boolean as PropType<ButtonProps["target"]>, default: "_self" },
        type: { type: String as PropType<ButtonProps["type"]>, default: "button" },
        variant: { type: String as PropType<ButtonProps["variant"]>, default: "secondary" },
        loading: { type: Boolean as PropType<ButtonProps["loading"]>, default: false },
        loadingMode: { type: String as PropType<ButtonProps["loadingMode"]>, default: "inline" },
    },
    // props: {
    //     variant: {
    //         type: String as PropType<ButtonProps["variant"]>,
    //         default: "primary",
    //     },
    //     size: {
    //         type: String as PropType<ButtonProps["size"]>,
    //         default: "medium",
    //     },
    // },
    // emits定义了组件 发出 的事件，如点击事件和更新按压状态事件
    emits: ['click', 'update:pressed'],
    setup(props, { emit }) {
    },
})
</script>
<style lang="less">
// @import url('bootstrap/less/bootstrap.less');
@import url('../bootstrap/less/bootstrap.less');
</style>