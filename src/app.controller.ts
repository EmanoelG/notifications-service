import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail/mail.service';

@Controller('app/')
export class AppController {
  constructor(private readonly mailService: MailService) {}
 
  @Get('mail')
  getMAIL():string {
    return this.mailService.sendEmail();
  }
 
}
