export interface BaseResponse<T = any> {
    data: T;
    message: string | null;
    status: ResponseStatus;
  }

  export enum ResponseStatus {
    Ok,
    Error,
    Forbidden,
    Unauthorized,
    Invalid,
    NotFound,
  }
