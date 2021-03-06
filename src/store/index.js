import { createStore } from 'vuex'

import { getJobOffers } from './storage'

export default createStore({
  state: {
    jobOffers: [],
    showJobOfferModal: null,
    currentOffer: null
  },
  mutations: {
    SET_JOB_OFFERS(state, payload) {
      state.jobOffers.push(payload);
    },
    TOGGLE_JOB_OFFER_MODAL(state) {
      state.showJobOfferModal = !state.showJobOfferModal;
    },
    ADD_JOB_OFFER(state, payload) {
      state.jobOffers.push(payload);
    },
    SET_CURRENT_OFFER(state, payload) {
      state.currentOffer = state.jobOffers.filter(offer => {
        console.log(offer.id == payload);
        return offer.id == payload;
      })[0];
    }
  },
  actions: {
    GET_JOB_OFFERS({commit, state}) {
      const getData = getJobOffers();
      getData.forEach(data => {
        if(!state.jobOffers.some(offer => offer.id === data.id)) {  
          commit('SET_JOB_OFFERS', data);
        }
      })
    }
  },
  modules: {
  }
})
