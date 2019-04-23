import axios from 'axios';

const state= {
    stories: []
};

const getters = {
    storyList: state => state.stories,
};

const actions = {
    async fetchStories({ getters },query) {
        // eslint-disable-next-line
        console.log(`Loading from link: ${getters.apiURL}/stories${query?query:""}`);
        const response = await axios.get(`${getters.apiURL}/stories${query?query:""}`,{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        return response.data;
    },
    async fetchStoryID({ getters }, id) {
        // eslint-disable-next-line
        console.log(`Loading from link: ${getters.apiURL}/stories/${id}`);
        const response = await axios.get(`${getters.apiURL}/stories/${id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        return response.data;
    },
    async fetchStoryBodyID({getters},id){
        // eslint-disable-next-line
        console.log(`Loading from link: ${getters.apiURL}/storytext/${id}`);
        const response = await axios.get(`${getters.apiURL}/storytext/${id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        return response.data;
    },
    async postStory({getters},story) {
        const response = await axios.post(`${getters.apiURL}/stories`, { story },{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });

        // eslint-disable-next-line
        // console.log(`ResponseData: `,response.data);

        return response.data;
    },
    async postStoryBody({ getters }, storyText) {
        const response = await axios.post(`${getters.apiURL}/storytext`, { storyText }, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });

        // eslint-disable-next-line
        // console.log(`ResponseData: `,response.data);

        return response.data;
    },
    async test() {
        // eslint-disable-next-line
        console.log("test Message");

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