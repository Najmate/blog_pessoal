import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy, } from "passport-jwt";
import { jwtConstants } from "../constants/constants";


@Injectable()
export class Jwtsrategy extends PassportStrategy(Strategy) {
    constructor() { 
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        })
    }

    async validate (payload: any) {
        return {
            userId: payload.sub,
            username: payload.username 
        }
    }
} //    secretOrKey: jwtConstants.secret,  
//      secretOrkey: jwtConstants.secret,


