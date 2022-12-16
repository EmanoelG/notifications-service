

// @Controller('app/') INVERSAO E INJECAO DE DEPENDENCIA
// export class AppController {
//   constructor(private readonly mailService: MailService) {}
//   @Get('mail')
//   getMAIL():string {
//     return this.mailService.sendEmail();
//   }
// }
import { Controller, Get, Post } from "@nestjs/common";
import { randomUUID } from "crypto";
import { PrismaService } from "./prisma.service";
@Controller('/notification') 
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}
 
  @Get('mail')
  list() {
   return this.prismaService.notification.findMany();
  }
 

  @Post('mail')
  async create() {
    await  this.prismaService.notification.create(
    {
     data:{
      id:randomUUID(),
      content:'Você tem uma nova solicitação de amizade !',
      category: 'social',
      recipientId:randomUUID(),
     } 
    }
   );
  }
}
