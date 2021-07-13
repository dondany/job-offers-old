<template>
  <div class="container">
    <div class="job-offer flex">
      <div class="left flex flex-column">
        <div class="job-title">
          {{ jobOffer.name }}
        </div>

        <div class="job-description">
          {{ jobOffer.description }}
        </div>
      </div>
      <div class="right flex flex-column">
        <div class="job-location">
          <location-details :city="jobOffer.city" :country="jobOffer.country" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import LocationDetails from "../components/LocationDetails.vue";

import { mapMutations, mapState } from "vuex";
export default {
  components: {
    LocationDetails,
  },
  data() {
    return {
      jobOffer: null,
    };
  },
  created() {
    this.getCurrentOffer();
  },
  methods: {
    ...mapMutations(["SET_CURRENT_OFFER"]),
    getCurrentOffer() {
      this.SET_CURRENT_OFFER(this.$route.params.offerId);
      this.jobOffer = this.currentOffer;
    },
  },
  computed: {
    ...mapState(["currentOffer"]),
  },
};
</script>

<style lang="scss" scoped>
.job-offer {
  max-width: 850px;
  text-decoration: none;
  gap: 16px;
  margin-bottom: 16px;
  color: #000;
  border-radius: 5px;
  padding: 28px 32px;
  background-color: #fff;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
  transition: all, 0.3s;
  box-sizing: border-box;

  .left {
    align-items: flex-start;
    flex-basis: 60%;
    gap: 16px;

    .job-title {
      font-size: 2rem;
    }

    .job-description {
      font-size: 0.8rem;
    }
  }

  .right {
    align-items: flex-end;
  }
}
</style>