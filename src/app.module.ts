import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { AppController } from './app.controller';
// import { MailService } from './mail/mail.service';
// import { PostMarkMailService } from './mail/postmark-mail.service';
// import { SMTPMAILservice } from './mail/smpt-mail.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
 

  ],
})
export class AppModule {}


//Injecao de dependencia
/*
  {
    provide: MailService,
    useClass: PostMarkMailService,
   {
    provide: MailService,
    useClass: PostMarkMailService,
  }
 
 
  }*/