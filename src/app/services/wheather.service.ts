import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  private apiKey = 'c4d7aefb5057d82e93f13dd9b0d32ba5';

  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string): Observable<any> {
    return this.http
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,{})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'Ocorreu um erro desconhecido!';

          if (error.status === 404) {
            errorMessage = 'Cidade não encontrada. Verifique o nome digitado.';
          } else if (error.status === 401) {
            errorMessage = 'Falha na autenticação. Verifique sua API Key.';
          } else if (error.status === 500) {
            errorMessage = 'Erro no servidor. Tente novamente mais tarde.';
          }

          console.error('Erro na requisição:', error);
          return throwError(() => new Error(errorMessage));
        })
      );
  }
}
