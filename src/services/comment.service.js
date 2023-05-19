import { response } from 'express';
import baseService from './base.service';
import { sequelize } from '../utils/database';





export class commentService extends baseService {


    async addComment(req) {
        console.log(req.userData._id);

        const newPhoto = await this._commentModel.create({

            photo_id: req.body.photoID,
            comment_text: req.body.commentText,
            user_id: req.userData._id

        })

        return newPhoto;
    }
    async listComment(req) {
        
        const query = `SELECT  user_id
        ,photo_id
        ,comment_text
        ,"Comments"."createdAt" AS createdAt
        ,"Comments"."updatedAt"
        ,"Users".name           AS userName
        FROM "Comments"
        JOIN "Users"
        ON "Comments".User_ID = "Users".ID
        WHERE "Comments".User_ID = '${req.userData._id}' and "Comments".photo_id = '${req.body.photoID}'`

       
        const commentList = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        });
        console.log(commentList)
        return commentList;
    }

}