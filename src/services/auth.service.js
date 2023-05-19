import { response } from 'express';
import baseService from './base.service';
import { createToken } from '../utils/jwt';
import { alreadyExistException } from '../exceptions';
import { Op } from 'sequelize';








export class authService extends baseService {

    async registerUser(userData) {

        const newUser = await this._userModel.create({
            name: userData.name,
            email: userData.email,
            user_name: userData.userName,
            password: userData.password,
            user_type: userData.userType,
            photograper_type: userData.photograperType,
            photo_desire_ratio: userData.photoDesireRatio,
            genres_list: userData.genresList,
            camera_brand: userData.cameraBrand,
            is_email_verified: userData.isEmailVerified,
            is_provided_detailed_info: userData.isProvidedDetailedInfo,
            is_registered: userData.isRegistered,
            facebook_link: userData.facebookLink,
            twitter_link: userData.twitterLink,
            instagram_link: userData.instagramLink,
            website: userData.website,
            state: userData.state,
            country: userData.country,

        })

        if (newUser) {

            const token = createToken(newUser);
            console.log(token);
            return [newUser, token];
        }



       

        //return 'abc'

    }

    async isUserExist(email, userName) {


      


        let user = await this._userModel.findOne({ where: { email: email } })

        if (user) {
            console.log('Email Exists');
            console.log(user);
            return user;


        }
        else {

            user = await this._userModel.findOne({ where: { user_name: userName } })
            if (user) {
                console.log('User name Exists');
                console.log(user);
                return user;


            }

        }




        return undefined;

        //return 'abc'

    }

    async login(emailOrPassword,  password) {

        console.log(emailOrPassword, password);

        let user = await this._userModel.findOne({
            where: {
              [Op.or]: [{ email: emailOrPassword }, { user_name: emailOrPassword }]}
              
            })

        if (user) {
            
            const token = createToken(user);
            console.log(token);
            return [user, token];
            
        }
        else
        {

            return undefined;

        }
        // else {

        //     user = await this._userModel.findOne({ where: { user_name: userName } })
        //     if (user) {
        //         console.log('User name Exists');
        //         console.log(user);
        //         return user;

        //     }

        // }




       

        //return 'abc'

    }

    async getSingleUserByEmail(userEmail) {

       

        let user = await this._userModel.findOne(

            {

                where: {email : userEmail}

            }

        )

        if (user) {
            
            
            
            const token = createToken(user);
            console.log(token);
            return [user, token];
            
        }
        else
        {

            return undefined;

        }
        // else {

        //     user = await this._userModel.findOne({ where: { user_name: userName } })
        //     if (user) {
        //         console.log('User name Exists');
        //         console.log(user);
        //         return user;

        //     }

        // }




       

        //return 'abc'

    }


}

