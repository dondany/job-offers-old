<template>
  <div class="home container">
    <nav-bar></nav-bar>
    <div class="job-search flex">
      <div class="left flex">
        <div class="search-box">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div class="right flex"></div>
    </div>
    <job-item></job-item>
    <job-item></job-item>
    <job-item></job-item>
    <job-item></job-item>
  </div>
</template>

<script>
import JobItem from "../components/JobItem.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Home",
  components: {
    JobItem,
    NavBar,
  },
};
</script>


<style lang="scss" scoped>
.job-search {
  padding: 20px 5px;

  .left {
    flex-basis: 60%;
    align-items: flex-start;
    .search-box {
      width: 100%;
      input {
        width: 100%;
        outline: none;
        border: none;
        font-size: 20px;
        background-color: rgba(255, 255, 255, 0);
        border-bottom: 1px solid rgb(102, 103, 110);
      }
    }
  }

  .right {
    flex-basis: 40%;
    align-items: flex-end;
  }
}
</style>