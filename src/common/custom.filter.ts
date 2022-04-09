import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from "express"
import { mylog } from 'src/utils';

@Catch(HttpException)
export class CustomFilter<T extends HttpException> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const res: Response = ctx.getResponse()
    const status: number = exception.getStatus();

    mylog(`DEBUG Http exception filter invoked === ${exception}`)

    res.status(status).send({
      statusCode: status,
      message: exception.getResponse()["message"],
      currentTimestamp: new Date().toString(),
    })
  }
}

