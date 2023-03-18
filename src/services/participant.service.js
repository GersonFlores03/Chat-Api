const Participants = require("../models/participants.models");

const Participantes = [
    {participants: "Miguel" , user_participant: 1 , conversation_participant:1 ,participants_id:1 },
    {participants: "Pedro" , user_participant: 1 , conversation_participant:1, participants_id:1 },
    {participants: "Maria" , user_participant: 1 , conversation_participant:1,
    participants_id:1 },
    {participants: "Jose" , user_participant: 1 , conversation_participant:1,
    participants_id:1 }
]

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