import { Controller, Get } from '@nestjs/common';
import AppService from '../../../../app.service';

@Controller('account')
export class CreateAccountController {
    private readonly appService: AppService;

    public constructor(appService: AppService) {
        this.appService = appService;
    }

    @Get()
    public getHello(): string {
        return this.appService.getHello();
    }
}
