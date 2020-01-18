import { Injectable, NestMiddleware, Inject } from "@nestjs/common";
import { Request, Response } from "express";
import { getMongoManager, getMongoRepository } from 'typeorm'
import { Log } from "../typeorm/entity";

@Injectable()
export class LogMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    const manager = getMongoManager();
    const request = await manager.save(Log, { name: 'request' })
    if(!request.name) {
      throw new Error('request log error')
    }
    next()
    const resp = await manager.save(Log, { name: 'response' })
    if(resp.name) {
      throw new Error('response log error')
    }
  }
}