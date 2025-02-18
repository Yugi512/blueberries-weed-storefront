import {UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN} from "@/config/config";
import { Redis } from "@upstash/redis";

const redis = new Redis({
    url: UPSTASH_REDIS_REST_URL,
    token: UPSTASH_REDIS_REST_TOKEN,
});

export default redis;