import { DynamicModule, Module } from '@nestjs/common';
import { WechatyServer } from './wechaty.server';
import { WECHATY_OPTIONS } from './constants';
import { RegisterProps } from 'wechaty-decorator'

@Module({})
export class WechatyModule {
  static register(options: RegisterProps): DynamicModule {
    return {
      module: WechatyModule,
      providers: [
        {
          provide: WECHATY_OPTIONS,
          useValue: options,
        },
        WechatyServer,
      ],
      exports: [WechatyServer],
    };
  }
}