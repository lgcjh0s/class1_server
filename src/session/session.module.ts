import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { UserService } from "src/user/user.service";
import { SessionController } from "./session.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ])
    ],
    controllers: [SessionController],
    providers: [UserService]
})
export class SessionModule {}   