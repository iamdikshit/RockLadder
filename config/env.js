import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

export default {
    HOST,
    WEBSITE_NAME
} = process.env