import { comments } from "../../../data/comments";

export default function handler(req , res) {
    if(req.method === 'GET') {
        res.status(200).json(comments)
    }else if (req.method === 'POST') {
        const comment = req.body.comments;
        const newComment = {
            id:Math.random(),
            title:comment,
            body:'ddd',
            userId:1
        }

        comments.push(newComment);
        res.status(201).json(newComment)
    }
}