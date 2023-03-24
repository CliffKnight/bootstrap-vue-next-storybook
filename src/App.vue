<template>
  <div class="container">
    <button @click="$router.push('/Home')">Back to Home</button>
    <div style="margin-top:10px">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
