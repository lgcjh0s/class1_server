import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "src/auth/auth.service";
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor (
        private authService: AuthService
    ) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.checkAuth(request);
    }

    checkAuth(request: Request) {
        return true;
    }
}