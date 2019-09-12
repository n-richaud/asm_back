import ResumeAPI from "../api/resume";


const CREATING_RESUME = "CREATING_RESUME",
    CREATING_RESUME_SUCCESS = "CREATING_RESUME_SUCCESS",
    CREATING_RESUME_ERROR = "CREATING_RESUME_ERROR",
    UPDATING_RESUME = "UPDATING_RESUME",
    UPDATING_RESUME_SUCCESS = "UPDATING_RESUME_SUCCESS",
    UPDATING_RESUME_ERROR = "UPDATING_RESUME_ERROR",
    FETCHING_RESUMES = "FETCHING_RESUMES",
    FETCHING_RESUMES_SUCCESS = "FETCHING_RESUMES_SUCCESS",
    FETCHING_RESUMES_ERROR = "FETCHING_RESUMES_ERROR";

export default {
    namespaced: true,
    state: {
        resumes:[],
        type:"default",
        isLoading:false,
        error:false
},
getters: {
    data(state) {
        return state.data;
    },
    type(state) {
        return state.type;
    },
    isLoading(state) {
        return state.isLoading;
    },
    hasError(state) {
        return state.error !== null;
    }

},
mutations: {
    [CREATING_RESUME](state) {
        state.isLoading = true;
        state.error = null;
    },
    [CREATING_RESUME_SUCCESS](state, resume) {
        state.isLoading = false;
        state.error = null;
        state.resumes.unshift(resume);
    },
    [CREATING_RESUME_ERROR](state, error) {
        state.isLoading = false;
        state.error = error;
        state.resumes = [];
    },
    [UPDATING_RESUME](state) {
        state.isLoading = true;
        state.error = null;
    },
    [UPDATING_RESUME_SUCCESS](state, resume) {
        state.isLoading = false;
        state.error = null;
        state.resumes.unshift(resume);
    },
    [UPDATING_RESUME_ERROR](state, error) {
        state.isLoading = false;
        state.error = error;
        state.resumes = [];
    },
    [FETCHING_RESUMES](state) {
        state.isLoading = true;
        state.error = null;
        state.resumes = [];
    },
    [FETCHING_RESUMES_SUCCESS](state, resumes) {
        state.isLoading = false;
        state.error = null;
        state.resumes = resumes;
    },
    [FETCHING_RESUMES_ERROR](state, error) {
        state.isLoading = false;
        state.error = error;
        state.resumes = [];
    }
},
actions: {
    async create({ commit }, message) {
        commit(CREATING_RESUME);
        try {
            let response = await PostAPI.create(message);
            commit(CREATING_RESUME_SUCCESS, response.data);
            return response.data;
        } catch (error) {
            commit(CREATING_RESUME_ERROR, error);
            return null;
        }
    },
    async update({ commit }, message) {
        commit(UPDATING_RESUME);
        try {
            let response = await ResumeAPI.create(message);
            commit(UPDATING_RESUME_SUCCESS, response.data);
            return response.data;
        } catch (error) {
            commit(UPDATING_RESUME_ERROR, error);
            return null;
        }
    },
    async findAll({ commit }) {
        commit(FETCHING_RESUMES);
        try {
            let response = await ResumeAPI.findAll();
            commit(FETCHING_RESUMES_SUCCESS, response.data);
            return response.data;
        } catch (error) {
            commit(FETCHING_RESUMES_ERROR, error);
            return null;
        }
    }
}
}