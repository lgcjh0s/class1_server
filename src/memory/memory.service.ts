import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { BaseService } from 'src/base/base.service';
import { ComCode } from 'src/entity/comcode.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemoryService extends BaseService {

    constructor (
        @Inject(CACHE_MANAGER)
        private readonly cacheManager: Cache,
        @InjectRepository(ComCode)
        private comCodeRepository: Repository<ComCode>
    ) {
        super();
    }
    
}
