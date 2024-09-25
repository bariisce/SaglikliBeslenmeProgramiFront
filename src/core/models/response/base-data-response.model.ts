import { BaseResponse } from './base-response.model';

export interface BaseDataResponse<T> extends BaseResponse {
  data: T;
}