import '../models/question';
import question from '../models/question';

function getList(req, res) {
    question.find({}, (err, preguntas) => {
        if (err) return res.status(500).send({ mensaje: 'Ocurrio un error', err });
        if (!preguntas) return res.status(204).send({ mensaje: 'No hay preguntas para mostar', err });
        return res.status(200).send({ preguntas });
    })
}

function getById(req, res) {
    const id = req.params.id;
    question.findById(id, (err, preguntas) => {
        if (err) return res.status(500).send({ mensaje: 'Ocurrio un error', err });
        if (!preguntas) return res.status(204).send({ mensaje: 'No hay preguntas con ese identificador para mostar', err });
        return res.status(200).send({ preguntas });
    })
}

function postQuestion(req, res) {
    const body = req.body;
    const questionConstuctor = new question({
        title: body.title,
        description: body.description,
        hashtag: body.hashtag
    });

    questionConstuctor.save((err, questionConstuctor) => {
        if (err) return res.status(500).send({ mensaje: 'Ocurrio un error almacenando las preguntas', err });
        if (err) return res.status(500).send({ mensaje: 'Ocurrio un error', err });
        return res.status(200).send({ mensaje: 'Se almaceno correctamente el registro', questionConstuctor });
    })
}

function putById(req, res) {
    const id = req.params.id;
    const body = req.body;
    console.log(body);

    const questionConstuctor = new question({
        title: body.title,
        description: body.description,
        hashtag: body.hashtag
    });


    question.findByIdAndUpdate(id, { $set: { description: questionConstuctor.description }, $set: { title: questionConstuctor.title }, $set: { hashtag: questionConstuctor.hashtag } }, { new: true }, (err, question) => {
        if (err) return res.status(500).send({ mensaje: 'Ocurrio un error actualizando las preguntas', err });
        if (err) return res.status(500).send({ mensaje: 'Ocurrio un error', err });
        return res.status(200).send({ mensaje: 'se actualizo correctamente el registro', questionConstuctor });
    })
}

function deleteById(req, res) {
    const id = req.params.id;
    question.findByIdAndDelete(id, (err, question) => {
        if (err) return res.status(500).send({ mensaje: 'Ocurrio un error eliminando las pregunta', err });
        if (err) return res.status(500).send({ mensaje: 'Ocurrio un error', err });
        return res.status(200).send({ mensaje: 'Se elimino correctamente el registro', question });
    })
}


export default {
    getList,
    getById,
    postQuestion,
    putById,
    deleteById
}