import { ApplicationException } from "@/shared/application/errors/application.exception";
import { HttpStatusCode } from "@/shared/infrastructure/http/http-status-code";

export class NotFoundException extends ApplicationException {
  constructor(message: string, fields?: Record<string, string>) {
    super({
      message,
      statusCode: HttpStatusCode.NOT_FOUND,
      fields
    });
  }
}
