import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/base/base.service";
import { IToken } from "src/common/common.interfaces";
import { User } from "src/entity/user.entity";
import { keyStore } from "src/security/secutiry.keys";
import { Repository } from "typeorm";

@Injectable()
export class AuthService extends BaseService {

    constructor (
        private readonly jwtService: JwtService,
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {
        super();
    }

}