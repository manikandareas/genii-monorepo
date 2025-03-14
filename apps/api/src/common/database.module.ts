import { Module, Global } from "@nestjs/common";
import { DB, db } from "@genii/database"; // Import the db instance

@Global() // Make this module global so it can be used throughout the app
@Module({
  providers: [
    {
      provide: "DATABASE_CLIENT", // Provide a token for the db instance
      useValue: db as DB,
    },
  ],
  exports: ["DATABASE_CLIENT"], // Export the db instance
})
export class DatabaseModule {}
