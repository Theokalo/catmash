import Vue from 'vue';
import Vuex from 'vuex';
import Api from  '../cats.json'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        images: []
    },
    actions: {

    },
    mutations: {
        'SET_VOTE'(state, id) {
          if (state.images.length) {
            state.images.find((vote, index) => {
              if (vote.id) {
                  if (vote.id === id) {
                    let newCount = vote.count + 1
                    let newVote = {
                        url: vote.url,
                        id: vote.id,
                        count: newCount
                    }
                    Vue.set(state.images, index, newVote)
                  }
              }
            })
          }
        },
        'LOAD_IMAGES'(state) {
          Api.images.forEach(image => {
            state.images.push({
              id: image.id,
              url: image.url,
              count: 0
            }) 
          })
        }
    }
});