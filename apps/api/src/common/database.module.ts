import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./database.service";

@Global() // Make this module global so it can be used throughout the app
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
