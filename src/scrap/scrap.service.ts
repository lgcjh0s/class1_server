import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { Http } from 'src/common/common.http';
import { IStore } from 'src/common/common.interfaces';

@Injectable()
export class ScrapService extends BaseService {

    http = Http();
    jsdom = require('jsdom');

    
}
