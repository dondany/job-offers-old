<template>
  <div @click="checkClick" class="modal-wrap flex flex-column" ref="modalWrap">
    <div class="modal-content flex flex-column">
      <header>Add New Job Offer</header>
      <main>
        <form @submit.prevent="submitForm" class="job-form flex flex-column">
          <h3>Company Details</h3>
          <div class="input flex flex-column">
            <label for="name">Job Name</label>
            <input v-model="name" type="text" id="name" />
          </div>

          <div class="input flex flex-column">
            <label for="companyName">Company Name</label>
            <input v-model="companyName" type="text" id="companyName" />
          </div>

          <h3>Location</h3>
          <div class="location flex">
            <div class="input flex flex-column">
              <label for="city">City</label>
              <input v-model="city" type="text" id="city" />
            </div>

            <div class="input flex flex-column">
              <label for="country">Country</label>
              <input v-model="country" type="text" id="country" />
            </div>
          </div>

          <h3>Tags</h3>
          <div class="tags">
            <div class="input flex flex-column">
              <label for="tags">Tags</label>
              <input v-model="tags" type="text" id="tags" />
            </div>
          </div>

          <div class="buttons flex">
            <button
              type="button"
              @click="TOGGLE_JOB_OFFER_MODAL"
              class="cancel red"
            >
              Cancel
            </button>
            <button type="submit" class="ok blue">Ok</button>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      name: null,
      companyName: null,
      city: null,
      country: null,
      tags: null,
    };
  },
  methods: {
    ...mapMutations(["ADD_JOB_OFFER", "TOGGLE_JOB_OFFER_MODAL"]),
    submitForm() {
      const data = {
        name: this.name,
        companyName: this.companyName,
        city: this.city,
        country: this.country,
        tags: this.tags,
      };
      this.ADD_JOB_OFFER(data);
      this.TOGGLE_JOB_OFFER_MODAL();
    },
    checkClick(e) {
      console.log(this.$refs);
      if (e.target === this.$refs.modalWrap) {
        this.TOGGLE_JOB_OFFER_MODAL();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .modal-content {
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    max-width: 700px;
    width: 60%;
    min-width: 300px;
    max-width: 600px;
    padding: 30px 20px;
    box-shadow: 0px 0px 8px 8px rgba(0, 0, 0, 0.2);

    header {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 16px;
      width: 100%;
      height: 40px;
    }

    main {
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 20px;
      .job-form {
        gap: 8px;
        font-size: 14px;

        h3 {
          font-size: 16px;
        }

        .location {
          gap: 8px;
        }

        .buttons {
          margin-top: 30px;
          justify-content: flex-end;

          button {
            padding: 6px 10px;
          }
        }
      }
    }
  }
}
.input {
  min-width: 0;
}
input {
  background-color: rgb(240, 240, 240);
  border: none;
  padding: 6px 4px;

  &:focus {
    outline: none;
  }
}
</style>