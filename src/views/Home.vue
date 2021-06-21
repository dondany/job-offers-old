<template>
  <div class="home container">
    <nav-bar @new-offer="TOGGLE_JOB_OFFER_MODAL"></nav-bar>
    <Modal v-if="showJobOfferModal"/>
    <div class="job-search flex">
      <div class="left flex">
        <div class="search-box">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div class="right flex"></div>
    </div>
    <job-item v-for="(jobOffer, index) in jobOffers" :key="index" :jobOffer="jobOffer"></job-item>
  </div>
</template>

<script>
import JobItem from "../components/JobItem.vue";
import NavBar from "../components/NavBar.vue";
import Modal from '../components/Modal.vue'

import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: "Home",
  components: {
    JobItem,
    NavBar,
    Modal
  },
  data() {
    return {
    }
  },
  created() {
    this.GET_JOB_OFFERS();
  },
  methods: {
    ...mapActions(['GET_JOB_OFFERS']),
    ...mapMutations(['TOGGLE_JOB_OFFER_MODAL'])
  },
  computed: {
    ...mapState(['jobOffers', 'showJobOfferModal']),
  }
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