<template>
    <div>
        <h1>button active</h1>
        <p>
            <button type="button" class="btn active">active btn</button>
            <span>{{ `<fieldset> 是一个 HTML 元素，它用于将表单中的相关表单控件（如输入框、单选按钮、复选框等）分组。<fieldset> 的主要作用是为了提高表单的可读性和可用性，同时让用户更容易地理解表单中的各个部分。<fieldset> 元素通常与 <legend> 元素一起使用，<legend> 用于为分组提供描述性的标签。` }}</span>
            <button type="button" class="btn">鼠标点击，按下鼠标时候，触发伪类:active的效果</button>
        </p>
    </div>
    <div>
        <h1>button disabled</h1>
        <p>
            <button type="button" class="btn disabled">disabled btn</button>
            <button type="button" disabled class="btn">disabled btn</button>
            <button type="button" class="btn">disabled btn</button>
        </p>
        <fieldset disabled>
            <button class="btn">我是一个禁用的按钮  fieldset[disabled] &选择器生效</button>
        </fieldset>
    </div>
    <div>
        <h1>a button link</h1>
        <p>
            <button type="button" class="btn btn-link btn-lg">a link button</button>
        </p>
    </div>
    <div>
        <h1>.btn-block</h1>
        <p>
            <button class="btn btn-block btn-lg btn-primary">.btn-block</button> 
            <button class="btn btn-block btn-lg btn-primary">.btn-block + .btn-block1 </button>
            <button class="btn btn-block btn-lg btn-primary">.btn-block + .btn-block2 </button>
            <button class="btn btn-block btn-lg btn-primary">.btn-block + .btn-block3 </button>
            <input type="submit" value="点击提交" class="btn btn-block btn-lg btn-primary">
            <input type="reset" value="点击重置" class="btn btn-block btn-lg btn-primary">
            <input type="button" value="点击button" class="btn btn-block btn-lg btn-primary">
        </p>
    </div>
    <div>
        <h1>button里有.bage</h1>
        <button type="button" class="btn btn-lg btn-primary">
            button
            <span class="badge">这里是button里的.bage</span>
        </button>
    </div>
    <p>
        <button type="button" class="btn btn-lg btn-default">Default</button>
        <button type="button" class="btn btn-lg btn-primary">Primary</button>
        <button type="button" class="btn btn-lg btn-success">Success</button>
        <button type="button" class="btn btn-lg btn-info">Info</button>
        <button type="button" class="btn btn-lg btn-warning">Warning</button>
        <button type="button" class="btn btn-lg btn-danger">Danger</button>
        <button type="button" class="btn btn-lg btn-link">Link</button>
    </p>
    <p>
        <button type="button" class="btn btn-default">Default</button>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-link">Link</button>
    </p>
    <p>
        <button type="button" class="btn btn-sm btn-default">Default</button>
        <button type="button" class="btn btn-sm btn-primary">Primary</button>
        <button type="button" class="btn btn-sm btn-success">Success</button>
        <button type="button" class="btn btn-sm btn-info">Info</button>
        <button type="button" class="btn btn-sm btn-warning">Warning</button>
        <button type="button" class="btn btn-sm btn-danger">Danger</button>
        <button type="button" class="btn btn-sm btn-link">Link</button>
    </p>
    <p>
        <button type="button" class="btn btn-xs btn-default">Default</button>
        <button type="button" class="btn btn-xs btn-primary">Primary</button>
        <button type="button" class="btn btn-xs btn-success">Success</button>
        <button type="button" class="btn btn-xs btn-info">Info</button>
        <button type="button" class="btn btn-xs btn-warning">Warning</button>
        <button type="button" class="btn btn-xs btn-danger">Danger</button>
        <button type="button" class="btn btn-xs btn-link">Link</button>
    </p>
    <!-- button的各种例子各种属性各种处理各种兼容情况 -->
</template>
<style lang="less">
// @import url('bootstrap/less/bootstrap.less');
@import url('../../components/bootstrap/less/bootstrap.less');
</style>