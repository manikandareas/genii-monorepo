import { db } from "@genii/database";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  db = db;
  async onModuleInit() {
    await this.db.$connect();
  }
}
