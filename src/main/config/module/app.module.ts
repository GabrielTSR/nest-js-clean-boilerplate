import { DataModule } from '@data/module';
import { InfraModule } from '@infra/module';
import { Module } from '@nestjs/common';
import { PresentationModule } from '@presentation/module';

@Module({
  imports: [InfraModule, PresentationModule, DataModule]
})
export class AppModule {}
