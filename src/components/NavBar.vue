<template>
  <div class="nav-bar flex">
    <div class="nav-bar-main flex">
      <div class="left flex">
          <a href="#">About</a></div>
      <div class="middle flex">
        <router-link class="home-link" :to="{ name: 'Home' }">
          <div class="title">job-offers</div>
        </router-link>
      </div>
      <div class="right flex">
        <div class="menu flex">
          <button @click="newOffer" class="btn-new flex">
              <span>New</span>
         </button>
        </div>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  emits: ['newOffer'],
  methods: {
    newOffer() {
      this.$emit('newOffer');
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #fff;
  align-items: center;
  justify-content: center;

  .nav-bar-main {
      width: 100%;
      padding: 20px;
    .left {
      flex: 1;
      justify-content: flex-start;
      align-items: center;
      
      a {
          text-decoration: none;
          color: rgb(145, 142, 142);
      }
    }

    .middle {
      flex: 1;
      justify-content: center;
      align-items: center;
    }

    .right {
      flex: 1;
      justify-content: flex-end;
      align-items: center;
      padding: 0;
      gap: 0;

        .btn-new {
            border: 1px solid royalblue;
            color: royalblue;
            background-color: #fff;
            margin-right: 0;
            transition: color 0.3s, border 0.3s, box-shadow 0.3s;
            align-items: center;

            &:hover {
                color:rgb(70, 95, 170);
                border: 1px solid rgb(70, 95, 170);
                box-shadow: 0 0 2px 2px rgba(0,0,0,0.2);
            }
        }
    }
  }
}

.home-link {
  text-decoration: none;
}
</style>