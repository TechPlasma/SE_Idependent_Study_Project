import axios from 'axios';

const state= {
    stories: []
};

const getters = {
    storyList: state => state.stories,
};

const actions = {
    async fetchStories({ commit }) {
        const response = await axios.get();

        commit('setStories', response.data);
    }

};

const mutations = {
    setStories: (state,stories) => state.stories = stories,

};

export default{
    state,
    getters,
    actions,
    mutations
}