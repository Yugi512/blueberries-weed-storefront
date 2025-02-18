import "dotenv"
import {configDotenv} from "dotenv";

configDotenv({path: ".env.local"});

export const {PORT, DATABASE_URL, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN, SESSION_SECRET, JWT_SECRET, JWT_EXPIRES_IN  } = process.env;
