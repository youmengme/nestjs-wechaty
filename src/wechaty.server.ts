import { Inject, Injectable } from '@nestjs/common';
import { WECHATY_OPTIONS } from './constants';
import { RegisterProps, WechatyDecorator } from 'wechaty-decorator'

@Injectable()
export class WechatyServer {
  constructor(@Inject(WECHATY_OPTIONS) options: RegisterProps) {
    const { botConfig, plugins } = options
    new WechatyDecorator(botConfig, plugins)
  }
}