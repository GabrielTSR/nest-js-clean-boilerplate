import { CreateAccountController } from '@presentation/controller';
import { DataModule } from '@data/module';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CreateAccountController],
  imports: [DataModule]
})
export class PresentationModule {}
