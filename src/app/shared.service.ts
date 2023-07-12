import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000/"
  constructor(private http:HttpClient) { }
  //Cliente
  getCliente(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl+'/cliente/');
  }
  addCliente(val:any){
    return this.http.post(this.APIUrl+'/cliente/',val);
  }
  updataCliente(val:any){
    return this.http.put(this.APIUrl+'/cliente/',val);
  }
  deleteCliente(val:any){
    const url = this.APIUrl + '/cliente/' + val;
    return this.http.delete(url);
    // console.log(this.APIUrl+'/cliente/'+val);
    // return this.http.delete(this.APIUrl+'/cliente/',val);
  }

  //Contratto

  getContratto(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl+'/contratto/');
  }
  addContratto(val:any){
    return this.http.post(this.APIUrl+'/contratto/',val);
  }
  updataContratto(val:any){
    return this.http.put(this.APIUrl+'/contratto/',val);
  }
  deleteContratto(val:any){
    const url = this.APIUrl + '/contratto/' + val;
    return this.http.delete(url);
    // return this.http.delete(this.APIUrl+'/contratto/',val);
  }

  //Pagamento

  getPagamento(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl+'/pagamenti/');
  }
  addPagamento(val:any){
    return this.http.post(this.APIUrl+'/pagamenti/',val);
  }
  updataPagamento(val:any){
    return this.http.put(this.APIUrl+'/pagamenti/',val);
  }
  deletePagamento(val:any){
    const url = this.APIUrl + '/pagamenti/' + val;
    return this.http.delete(url);
    // return this.http.delete(this.APIUrl+'/pagamenti/',val);
  }
}
