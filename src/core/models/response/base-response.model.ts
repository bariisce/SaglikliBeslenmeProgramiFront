export interface BaseResponse {
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