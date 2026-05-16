import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import type { Response } from "express";
import { ApplicationException } from "@/shared/application/errors/application.exception";

/**
 * Handles app-layer {@link ApiException} before Nest's BaseExceptionFilter.
 * Avoids noisy ERROR logs for expected 4xx responses (Nest treats duck-typed
 * `statusCode` + `message` as "unknown errors" and still logs them).
 */
@Catch(ApplicationException)
export class ApplicationExceptionFilter implements ExceptionFilter {
  catch(exception: ApplicationException, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse<Response>();
    const body = {
      statusCode: exception.statusCode,
      message: exception.message,
      ...(exception.fields && Object.keys(exception.fields).length > 0
        ? { fields: exception.fields }
        : {})
    };

    response.status(exception.statusCode).json(body);
  }
}
