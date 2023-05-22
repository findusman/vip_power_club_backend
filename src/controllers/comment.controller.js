// import baseController from "./base.controller"
// import { validationMiddleware, authMiddleware } from '../middleware';
// import { Env } from "../config";
// import { AddCommentDto } from "../dtos";
// import userNotAuthorizaedException from "../exceptions/userNotAuthorizaed.exception";






// class commentController extends baseController {

//     constructor() {

//         super('/comment')
//         this.initializeRouter()
//     }

//     initializeRouter() {

//         this.router.post(`${this.parentRouterPath}/add`, validationMiddleware(AddCommentDto), authMiddleware(), this.addComment)
//         this.router.post(`${this.parentRouterPath}/list`, authMiddleware(), this.listComment)

//     }

//     addComment = async (req, res, next) => {

//         try {

//             if (req.userData)
//                 new userNotAuthorizaedException()

//             const commentData = await this._commentService.addComment(req)
//             res.send(this._responseTemplate('Success', commentData, undefined))

//         } catch (error) {

//             // let obj = new databaseException()
//             // next(new NotFoundException('There is a problem'))
//             next(error)
//         }

//     }



//     listComment = async (req, res, next) => {

//         try {

            
//             if (req.userData)
//                 new userNotAuthorizaedException()

//             const commentData = await this._commentService.listComment(req)
//             res.send(this._responseTemplate('Success', commentData, undefined))


//         } catch (error) {

//             // let obj = new databaseException()
//             // next(new NotFoundException('There is a problem'))
//             next(error)
//         }

//     }

// }

// export default commentController