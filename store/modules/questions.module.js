import * as mutation from "./mutation-types";

const state = () => ({
  questions: [],
  question: {},
});

const mutations = {
  [mutation.GET_ALL_QUESTIONS](state) {},
  [mutation.GET_ALL_QUESTIONS_SUCCESS](state, payload) {
    state.questions = payload;
  },
  [mutation.GET_ALL_QUESTIONS_ERROR](state, payload) {},
};

const actions = {
  async getAllQuestionsData({ commit }) {
    commit(mutation.GET_ALL_QUESTIONS);
    await this.$api
      .get(`questions`)
      .then((response) => {
        commit(mutation.GET_ALL_QUESTIONS_SUCCESS, response.data);
      })
      .catch((error) => {
        commit(mutation.GET_ALL_QUESTIONS_ERROR, error);
      });
  },
};

const getters = {
  questionsdata(state) {
    return state.questions;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
