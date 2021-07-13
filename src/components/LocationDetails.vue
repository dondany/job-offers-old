<template>
  <div class="company-location flex">
    <img src="@/assets/icons/map-marker-alt.svg" alt="" />
    <span>{{ city }}, {{ country }}</span>
  </div>
</template>

<script>
export default {
    props: ['city', 'country']
}
</script>


<style lang="scss" scoped>
.company-location {
  align-items: flex-start;
  justify-content: center;

  img {
    width: 16px;
    color: darkgrey;
    margin-right: 4px;
  }
}
</style>