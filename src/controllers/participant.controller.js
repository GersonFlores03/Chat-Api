const ParticipantService = require("../services/participant.service")




const CreateParticipant = async (req , res) => {

    try {
        const data = req.body;
        const participant = await ParticipantService.create(data)
        res.status(201).json(participant)
    } catch (error) {
        res.status(400).json(error)

    }
}

module.exports = {

    CreateParticipant
}