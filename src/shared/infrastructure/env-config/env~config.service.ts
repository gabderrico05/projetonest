import { Injectable } from '@nestjs/common'
import { EnvConfig } from './env~config.interface'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class EnvConfigService implements EnvConfig {
        constructor(private configService: ConfigService){}
        getAppPort(): number {
            return Number(this.configservice.get<number>('PORT'))
        }
        getNodeEnv(): string {
            return this.configservice.get<string>('NODE_ENV')
        }
}
