import { Body, Controller, Get, Post, Render, Res } from "@nestjs/common";
import { BaseController } from "src/base/base.controller";
import { SpaService } from "./spa.service";
import { Response } from 'express';

@Controller('spa')
export class SpaController extends BaseController {

    constructor (
        private readonly spaService: SpaService
    ) {
        super();
    }
}