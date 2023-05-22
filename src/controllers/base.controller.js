// import express from "express";
// import { authService } from "../services/auth.service.js";
// import { photoService } from "../services/photo.service.js";
// import { responseTemplate } from "../enums/responseTemplate.enum.js";
// import { voteService } from "../services/vote.service.js";
// import { commentService } from "../services/comment.service.js";
// import { sqlRawQueriesEnums } from "../enums/sqlRawQueries.enum.js";

// class baseController {

//     router;
//     parentRouterPath;

//     _authService;
//     _photoService;
//     _voteService;
//     _commentService;
    
//     ;


//     _responseTemplate;
//     _sqlRawQueriesEnum;

//     constructor(routerPath){


//         this.parentRouterPath = routerPath;
//         this.router = express.Router();

//         this._authService = new authService()
//         this._photoService = new photoService()
//         this._voteService = new voteService()
//         this._commentService = new commentService()

//         this._responseTemplate = responseTemplate;
//         this._sqlRawQueriesEnum = sqlRawQueriesEnums

//     }


// }

// export default baseController;