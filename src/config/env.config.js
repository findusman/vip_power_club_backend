require("dotenv").config("../../env");

export default {

    PORT : process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    aws_region: process.env.aws_region,
    Bucket: process.env.Bucket,
    aws_access_key: process.env.aws_access_key,
    aws_secert_access_key: process.env.aws_secert_access_key,

}