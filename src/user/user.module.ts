import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { UserService } from "./user.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ])
    ],
    providers: [UserService]
})
export class UserModule {}