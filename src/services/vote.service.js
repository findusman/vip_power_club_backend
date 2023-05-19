import { response } from 'express';
import baseService from './base.service';
import { sequelize } from '../utils/database';

export class voteService extends baseService {


    async performVote(req) {

        let response = ''

        if (req.body.actionType == 'add') {

            const [vote, created] = await this._voteModel.findOrCreate(
                {

                    where: {
                        photo_id: req.body.photoID,
                        user_id: req.userData._id
                    },
                    defaults: {
                        photo_id: req.body.photoID,
                        user_id: req.userData._id
                    }
                }
            )
            if (vote || created)
                response = 'Action Performed'

        }
        else if (req.body.actionType = 'remove') {
            console.log('destroed');

            const vote = await this._voteModel.destroy(
                {
                    where: {
                        photo_id: req.body.photoID,
                        user_id: req.userData._id
                    }
                }
            )

            response = 'Action Performed'
        }
        return response;
    }


}