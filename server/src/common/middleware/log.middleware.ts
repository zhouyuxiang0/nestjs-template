import { Injectable, NestMiddleware, Inject } from "@nestjs/common";
import { Request, Response } from "express";
import { getMongoManager, getMongoRepository } from 'typeorm'
import { Log } from "../typeorm/entity";

@Injectable()
export class LogMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    const manager = getMongoManager();
    console.log('request')
    const request = await manager.save(Log, { name: 'request' })
    console.log(request)
    if(!request.name) {
      throw new Error('request log error')
    }
    next()
    console.log('response')
    const resp = await manager.save(Log, { name: 'response' })
    console.log(resp)
    if(resp.name) {
      throw new Error('response log error')
    }
  }
}