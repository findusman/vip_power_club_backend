import baseController from "./base.controller"
import { validationMiddleware, authMiddleware } from '../middleware';
import { PerformVoteDto } from "../dtos";
import userNotAuthorizaedException from "../exceptions/userNotAuthorizaed.exception";


class voteController extends baseController {

    constructor() {

        super('/vote')
        this.initializeRouter()
    }

    initializeRouter() {

        this.router.post(`${this.parentRouterPath}/perform`, validationMiddleware(PerformVoteDto), authMiddleware(), this.performVote)
      

    }

    performVote = async (req, res, next) => {

        try {

            if (req.userData)
                new userNotAuthorizaedException()

            const response = await this._voteService.performVote(req)
            res.send(this._responseTemplate('Success', response, undefined))

        } catch (error) {

            // let obj = new databaseException()
            // next(new NotFoundException('There is a problem'))
            next(error)
        }

    }


}

export default voteController