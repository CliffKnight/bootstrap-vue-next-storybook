import MyButton from './BButton.vue';
// import { Meta } from "@storybook/vue3";
// import { ButtonProps } from "./types.ts";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'bootstrap-vue/BButton',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    onClick: {},
    // size: {
    //   control: { type: 'select' },
    //   options: ['lg', 'sm'],
    // },
    // TODO 最后的方案就是 写一个interface，然后这里写一个generater，来根据interface的类型生成相应的control，
    // 这样就会在props里面对api使用相应的组件，进而使得可以直接操作这个组件来设置 组件
    active: {
      control:{type:'select'},
      options: [true,false]
    },
    disabled: {
      control:{type:'boolean'},
      defaultValue:false
    },
    href: {
      control:{type:'text'}
    },
    pill: {
      control:{type:'boolean'},
      defaultValue:false
    },
    pressed: {
      control:{type:'boolean'},
      defaultValue:false
    },
    rel: {
      control:{type:'text'}
    },
    squared: {
      control:{type:'boolean'},
      defaultValue:false
    },
    tag: {
      control:{type:'text'}
    },
    target: {
      control:{type:'boolean'},
      defaultValue:false
    },
    type:{
      control:{type:'select'},
      options:['default','primary'],
      description:'type类型',
      defaultValue:'default'
    },
    variant:{
      control:{type:'select'},
      options:['primary','secondary','success','danger','warning','info']
    },
    loading: {
      control:{type:'boolean'}
    },
    loadingMode:{
      control:{type:'select'},
      options:['fill','inline']
    }
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
