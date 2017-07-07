import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { InternalRpl } from '@toddpa/shared-module';
import { Configuration } from './Configuration';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SRTDataService {

  private headers: Headers;

  constructor(private http: Http, private cfg: Configuration) {
    this.headers = new Headers();
    /*
    this.headers.append('Content-Type', 'application/json');
    Causes Errors:
    Request header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight response.
    */
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  GetAll(): Observable<InternalRpl[]> {
    return this.http.get(this.cfg.getAll(), { headers: this.headers })
      .map((response: Response) => {
        return <InternalRpl[]>response.json();
      })
      .catch(this.handleError);
  }

  GetSingle(id: number): Observable<InternalRpl> {
    return this.http.get(this.cfg.Server)
      .map((response: Response) => <InternalRpl>response.json());
  }

  Add(itemName: string): Observable<InternalRpl> {
    const toAdd = JSON.stringify({ ItemName: itemName });

    return this.http.post(this.cfg.Server, toAdd, { headers: this.headers })
      .map((response: Response) => <InternalRpl>response.json())
      .catch(this.handleError);
  }

  Update(id: number, itemToUpdate: InternalRpl): Observable<InternalRpl> {
    return this.http.put(this.cfg.Server + id, JSON.stringify(itemToUpdate), { headers: this.headers })
      .map((response: Response) => <InternalRpl>response.json())
      .catch(this.handleError);
  }

  Delete(id: number): Observable<Response> {
    return this.http.delete(this.cfg.Server + id)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
