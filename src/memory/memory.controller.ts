import { Controller, Get, Query, Res } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { MemoryService } from './memory.service';
import { Response } from 'express';
import { ComCode } from 'src/entity/comcode.entity';

@Controller('memory')
export class MemoryController extends BaseController {

    constructor (
        private readonly memoryService: MemoryService
    ) {
        super();
    }
    
}
