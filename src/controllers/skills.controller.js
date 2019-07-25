import '../models/skills'
import skills from '../models/skills';

function getSkillsList(req, res) {
    skills.find({},(err, skill)=>{
        if (err) return res.status(500).send({ mensaje: 'error occurred', err });
        if (!skill) return res.status(204).send({ mensaje: 'There are no skills created', err });
        return res.status(200).send({ skill });
    })
}

function getSkillsById(req, res) {
    const id = req.params.id;
    skills.findById(id, (err, skill) => {
        if (err) return res.status(500).send({mesaje: 'error occurred ', err});
        if (!skill) return res.status(204).send({mensaje: 'There are no skills created', err});
        return res.status(200).send({ skill });
    })
}

function postSkills(req, res) {
    const body = req.body;
    const skillsConstructor = new skills({
     nombre: body.nombre,
     description: body.descripcion,
     tag: body.tag 
    });

    skillsConstructor.save((err, skillsConstructor) => {
     if (err) return res.status(500).send({ mensaje: 'error occurred', err});
     if (!skillsConstructor) return res.status(204).send({ mensaje: 'Could not create the skill', err});
     return res.status(200).send({ skillsConstructor});
    })
}

function putSkillsById(req, res) {
    const id = req.params.id;
    const body = req.body;
    console.log(body);
    
    const skillsConstructor = new skills({
        nombre: body.nombre,
        descripcion: body.descripcion,
        tag: body.tag
    });


    skills.findByIdAndUpdate(id, { $set: { descripcion: skillsConstructor.descripcion }, $set: { title: skillsConstructor.nombre }, $set: { tag: skillsConstructor.tag } }, { new: true }, (err, skill) => {
        if (err) return res.status(500).send({ mensaje: 'An error occurred updating the questions', err });
        if (!skill) return res.status(204).send({ mensaje: 'Could not create the skill', err });
        return res.status(200).send({ mensaje: 'the registration was updated correctly', skill });
    })
}

function deleteSkillsById(req, res) {
    const id = req.params.id;
        skills.findByIdAndDelete(id, (err, skill) => {
         if (err) return res.status(500).send({ mensaje: 'An error occurred eliminating the question', err });
         if (!skill) return res.status(204).send({ mensaje: 'Could not create the skill', err });
         return res.status(200).send({ mensaje: 'The record was successfully deleted', skill });
    })
}

export default {
    getSkillsList,
    getSkillsById,
    postSkills,
    putSkillsById,
    deleteSkillsById  
}
