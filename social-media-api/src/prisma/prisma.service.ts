import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
// export class PrismaService extends PrismaClient { }
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        console.log('conectando');
        await this.$connect();
        console.log("conectou");
    }
}

