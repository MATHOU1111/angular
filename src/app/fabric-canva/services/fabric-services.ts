import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {
  private baseUrl = 'http://localhost:3000/canvas';

  constructor(private http: HttpClient) {}

  getAllCanvas(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  loadCanvas(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  postCanvas(canvas: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, { objects: canvas });
  }

  deleteCanvas(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  updateCanvas(id: string, value: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, value);
  }
}

