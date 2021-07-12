<template>
  <div class="container">
    <div class="job-offer flex">
      <div class="left flex"> {{ jobOffer.name }} </div>
      <div class="right flex flex-column">dupa dupa dupa</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
        jobOffer: null
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
      ...mapState(['currentOffer'])
  }
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
  align-items: center;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
  transition: all, 0.3s;
  box-sizing: border-box;

  .left {
    align-items: center;
    flex-basis: 60%;
    gap: 16px;
  }
}
</style>