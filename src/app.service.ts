import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
    private readonly hello = 'Hello World!';

    public getHello(): string {
        return 'Hello World!';
    }
}
