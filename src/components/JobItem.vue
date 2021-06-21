<template>
  <div class="job-item flex">
    <div class="left flex">
      <div class="job-details flex flex-column">
        <div class="job-name">{{ jobOffer.name }}</div>
        <div class="company-details flex">
          <div class="company-name">{{ jobOffer.companyName }}</div>
          <div class="company-location flex">
            <img src="@/assets/icons/map-marker-alt.svg" alt="" />
            <span>{{jobOffer.city}}, {{jobOffer.country}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right flex flex-column">
      <div class="tag-items flex">
        <button v-for="(tag, index) in jobOffer.tags" :key="index" class="tag light-blue">{{ tag }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['jobOffer'],
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.job-item {
  max-width: 850px;
  text-decoration: none;
  cursor: pointer;
  gap: 16px;
  margin-bottom: 16px;
  color: #000;
  border-radius: 5px;
  padding: 28px 32px;
  background-color: #fff;
  align-items: center;
  box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.2);
  transition: all, .3s;
  box-sizing: border-box;

  .left {
    align-items: center;
    flex-basis: 60%;
    gap: 16px;

    span {
      flex: 1;
    }

    .job-details {
        gap: 10px;
        align-items: flex-start;
      .company-details {
        align-items: flex-start;
        color: darkgrey;
        gap: 16px;
        justify-content: center;

        .company-location {
          align-items: flex-start;
          justify-content: center;

          img {
            width: 16px;
            color: darkgrey;
            margin-right: 4px;
          }
        }
      }
    }
  }

  .right {
    gap: 5px;
    flex-basis: 40%;
    align-items: flex-start;

    .tag-items {
      gap: 2px;
      flex-wrap: wrap;
    }
  }

  &:hover {
    //   transform: translateY(-5px);
    //   box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.4);
      padding: 40px;
  }

  &:active {
      padding: 50px;
  }
}


</style>