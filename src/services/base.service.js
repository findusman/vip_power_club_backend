
import { ProductModel, UserModel, PhotoModel, VoteModel, CommentsModel } from "../models";




class baseService {
    
    _userModel;
    _producModel;
    _photoModel;
    _voteModel;
    _commentModel;

    constructor(){

        this._userModel = UserModel
        this._producModel = ProductModel
        this._photoModel = PhotoModel
        this._voteModel = VoteModel;
        this._commentModel = CommentsModel;
    }


}

export default baseService;