<template>
    <div v-for="(item, index) in linksList" :key="index">
      <h2>{{item.title}}</h2>
      <div v-for="(vtem, vndex) in item.children" :key="vndex">
        <router-link :to="vtem" type="primary">{{ vtem }}</router-link>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  
  const files = import.meta.glob("../pages/**/*.vue");
  const linksList = ref([]);
  const lists = []; // {title:xxx,children:[]}
  /**
   * TODO 无限层级的实现和处理思路，处理思路的整理了
   */
  Object.keys(files).forEach((fileName) => {
    const path = fileName.replace(/(\.\.\/pages|\.\/|\.vue|)/g, "");
    const group = path.split("/");
    const title =
      group.length > 1 ? group.splice(0, group.length - 1).join("/") : "";
    let result = false;
    let index;
    lists.forEach((elm, i) => {
      if (elm.title === title) {
        result = true;
        index = i;
      }
    });
    if (result) {
      lists?.[index].children.push(`/${path}`);
    } else {
      lists.push({
        title,
        children: [`/${path}`],
      });
    }
  });
  linksList.value = lists;
  </script>