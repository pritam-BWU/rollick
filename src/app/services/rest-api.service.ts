import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  baseUrl = "http://13.203.3.126:6068/api"
  // baseUrl = "http://192.168.0.127:5000/api"
  // baseUrl = "http://192.168.0.255:5000/api"

  constructor(private http: HttpClient) {}

  // // GET API
  // getAccounts(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/getaccounts`);
  // }

  getAccounts(page: number, limit: number): Observable<any> {

    let params = new HttpParams()
      .set('page', page)
      .set('limit', limit);

    return this.http.get(`${this.baseUrl}/getaccounts`, { params });

  }

  // POST API
  createAccount(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/accounts`, data);
  }


  // ===================== get product details =========================

  allProductDetailsPerAcc(data : any) : Observable<any>{
    return this.http.post(`${this.baseUrl}/account-products`, data);
  }


  // ========================== Create Service Request=========================

  submitRequest(data : any) : Observable<any> {
    return this.http.post(`${this.baseUrl}/service-requests`, data);
  }

  // =================== get service request details ====================

  getServiceRequest(page: number, limit: number): Observable<any> {

    let params = new HttpParams()
      .set('page', page)
      .set('limit', limit);

    return this.http.get(`${this.baseUrl}/get-servicerequests`, { params });

  }

  // =================== get all technicians ==================================

  getTechnicianList() : Observable<any>{
    return this.http.get(`${this.baseUrl}/technicians`);
  }

  createServiceOrder(data : any) : Observable<any>{
    return this.http.post(`${this.baseUrl}/service-orders`, data);
  }


}
