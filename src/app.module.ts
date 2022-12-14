import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
import { SMTPMAILservice } from './mail/smpt-mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: SMTPMAILservice,
    }

  ],
})
export class AppModule {}


//Injecao de dependencia