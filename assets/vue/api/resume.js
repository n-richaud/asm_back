import axios from "axios";

export default {
    create(user,type) {
        return axios.post("/api/resume/create",{
            user: user,
            type: type
        });
    },
    update(id,data) {
        return axios.post("/api/resume/update",{
            id:id,
            data:data
        })
    },
    findAll() {
        return axios.post("/api/resume/fetchAll")
    },
    findByUser(user){
        return axios.post("/api/resume/fetchAll",{
            user:user
        })
    },
    fetchByTerms(terms){
        return axios.post("/api/resume/fetchAll",{
            terms:terms
        })
    }

}