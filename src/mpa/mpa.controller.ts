import { Body, Controller, Get, Post, Query, Render } from "@nestjs/common";
import { BaseController } from "src/base/base.controller";
import { MpaService } from "./mpa.service";

@Controller('mpa')
export class MpaController extends BaseController {

    constructor (
        private readonly mpaService: MpaService
    ) {
        super();
    }
}