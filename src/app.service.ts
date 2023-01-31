import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
    private readonly hello: string;
    public constructor() {
        this.hello = 'Hello World!';
    }

    public getHello(): string {
        return this.hello;
    }
}
