const Participants = require("../models/participants.models");



class ParticipantService {
    static async create(data){
        try {
           const participant = await Participants.create(data)
           return(participant) 
        } catch (error) {
            throw(error)
        }
    }
}


module.exports = ParticipantService;