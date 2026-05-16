import { HttpException } from "./http.exception";
import { HttpStatusCode } from "@/shared/infrastructure/http/http-status-code";

export abstract class ApplicationException implements HttpException<HttpStatusCode> {
  readonly message: string;
  readonly statusCode: HttpStatusCode;
  readonly fields?: Record<string, string>;

  constructor({
    message,
    statusCode,
    fields
  }: HttpException<HttpStatusCode>) {
    this.message = message;
    this.statusCode = statusCode;
    this.fields = fields;
  }
}
