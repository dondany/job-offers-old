<template>
  <div class="app flex flex-column">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.app {
  background-color: #ebebf3;
  min-height: 100vh;
  @media (min-width: 900px) {
    flex-direction: row !important;
  }

  .app-content {
    padding: 0 20px;
    flex: 1;
    position: relative;
  }
}

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

button,
.button {
  cursor: pointer;
  padding: 16px 14px;
  border-radius: 4px;
  border: none;
  font-size: 12px;
  margin-right: 8px;
  color: #fff;
}

.tag {
  padding: 5px;
  margin: 0;
}

.light-blue {
  background-color: #8B9EF8;
}

.container {
  width: 100%;
  padding: 40px 10px;
  max-width: 850px;
  margin: 0 auto;

  @media (min-width: 900px) {
    padding-top: 72px;
  }
}

</style>
