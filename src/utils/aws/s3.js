import { Env } from '../../config';
const aws = require('aws-sdk');
import util from 'util';


aws.config.update({
    region: Env.aws_region,
    accessKeyId: Env.aws_access_key,
    secretAccessKey: Env.aws_secert_access_key
})

const s3 = new aws.S3()



export const uploadPhoto = async (req) => {
    
    const uploadParams = {
        Bucket: Env.Bucket,
        Key: req.files.photoUrl.name,
        Body: req.files.photoUrl.data,
        ContentType: req.files.photoUrl.mimetype,
        ACL: 'public-read'
    };


    const uploadPromise = await util.promisify(s3.upload.bind(s3));

    try {
        const data = await uploadPromise(uploadParams);
        //console.log("Upload Success", data.Location);
        return data;
    } catch (err) {
        //console.log("Error", err);
        throw err;
    }
}


