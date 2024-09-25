import { BaseDataResponse } from './base-data-response.model';

export interface BasePaginationResponse<T> extends BaseDataResponse<T> {
  pageNumber: number;
  pageSize: number;
  totalItemsInDatabase: number;
}