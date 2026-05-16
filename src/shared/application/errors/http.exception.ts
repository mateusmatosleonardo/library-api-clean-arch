export interface HttpException<T = unknown> {
  message: string;
  statusCode: T;
  fields?: Record<string, string>;
}
