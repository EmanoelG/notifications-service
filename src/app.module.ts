import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
import { PostMarkMailService } from './mail/postmark-mail.service';
import { SMTPMAILservice } from './mail/smpt-mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
  {
    provide: MailService,
    useClass: PostMarkMailService,
  }

  ],
})
export class AppModule {}


//Injecao de dependencia