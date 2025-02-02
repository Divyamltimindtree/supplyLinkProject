import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
<<<<<<< HEAD
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { Supplier } from "../../supplylink/types/Supplier";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loginUrl = `${environment.apiUrl}`;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  login(user: Partial<Supplier>): Observable<{ [key: string]: string }> {
    return this.http.post<{ token: string }>(
      `${this.loginUrl}/user/login`,
      user,
      this.httpOptions
    );
  }

  getToken() {
    return localStorage.getItem("token");
  }
  getRole() {
    return localStorage.getItem("role");
  }


  createUser(user: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(`${this.loginUrl}/user/register`, user);
=======
import { map, Observable } from "rxjs";
// import { User } from "../types/user";
import { Supplier } from "../../supplylink/types/Supplier";

export class AuthService {
  

 
  constructor(private http: HttpClient) {}

  login(user: Partial<Supplier>): Observable<{ [key: string]: string }> {
    return new Observable();
  }

  getToken() : string {
    return '';
  }

  getRole() : string {
    return '';
  }

  getUsers(): Observable<Supplier[]> {
    return new Observable();
  }

  createUser(user: Supplier): Observable<Supplier> {
    return new Observable();
>>>>>>> 472ea3f966ce8cbb39c29b3c80973466b6162d47
  }
}
