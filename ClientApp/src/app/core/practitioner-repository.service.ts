import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/Observable/throw';


@Injectable({
  providedIn: 'root'
})
export class PractitionerRepositoryService {
  private basedApiUrl = '';
  constructor(private _http: HttpClient) { }

  // searchForPractitioner(firtName: string, lastName: string, email: string): Observable<any> {
  //   const url = `${this.basedApiUrl}/${firtName}`;
  //   return this._http.get(url) // map(this.extractData);
  //               .do(data => console.log('searchForPractitioner: ' + JSON.stringify(data)))
  //               .catch(this.handleError);
  // }

  // handleError(handleError: any): any {
  //   throw new Error('Method not implemented.');
  // }
}
