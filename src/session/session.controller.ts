import { Controller, Get, Query, Res, Session } from "@nestjs/common";
import { BaseController } from "src/base/base.controller";
import { Response, Request } from 'express';
import { UserService } from "src/user/user.service";
import { User } from "src/entity/user.entity";

@Controller('session')
export class SessionController extends BaseController {

    constructor (
        private readonly userService: UserService
    ) {
        super();
    }
}