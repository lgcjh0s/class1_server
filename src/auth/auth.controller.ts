import { Body, Controller, Headers, Post, UnauthorizedException, UseGuards } from "@nestjs/common";
import { BaseController } from "src/base/base.controller"
import { User } from "src/entity/user.entity";
import { AuthService } from "./auth.service";
import { AuthGuard } from "src/security/auth.guard";

@Controller('auth')
export class AuthController extends BaseController {

    constructor (
        private authService: AuthService
    ) {
        super();
    }

}