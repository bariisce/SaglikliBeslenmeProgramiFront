import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, catchError, map, share, throwError } from 'rxjs';

import { environment } from '../../../environments/environment'
import { BaseDataResponse } from '../../models/response/base-data-response.model';
import { TokenResponse } from '../../models/response/token-response.model';
import { BaseResponse } from 'src/core/models/response/base-response.model';
import { User } from '../../models/User'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private endpoint = environment.api_url;

  constructor(private readonly http: HttpClient) {}
  getAllUsers() {
    return this.http
      .get<BaseDataResponse<User[]>>(environment.api_url + '/User/GetAll')
      .pipe(share());
  }



  addGroup(entity: object) {
    return this.http
      .request<BaseResponse>('post', environment.api_url + '/Group/Create', {
        body: entity,
      })
      .pipe(share());
  }


  updateProject(id: number, newEntity: object) {
    return this.http
      .request<BaseResponse>(
        'put',
        environment.api_url + '/Project/Update?id=' + id,
        { body: newEntity }
      )
      .pipe(share());
  }


  deleteProject(id: number) {
    return this.http
      .delete<BaseResponse>(environment.api_url + '/Project/Delete?id=' + id)
      .pipe(share())
      .toPromise();
  }
}

