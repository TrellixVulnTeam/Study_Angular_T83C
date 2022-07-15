import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private baseUrl = environment.backendUrl;

  constructor(private http: HttpClient) {}
  /**
   * @param email
   * @param password
   */
}
