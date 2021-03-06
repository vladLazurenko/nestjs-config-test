import { MAIL, DB } from 'config';
import { Controller, Get } from '@nestjs/common';

@Controller('b')
export class BController {

  @Get()
  getEnvB() {
      return { apiKey: MAIL.apiKey, db: DB.redis.appStore.password }
  }
}
