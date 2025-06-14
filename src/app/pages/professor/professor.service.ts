import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Professor } from '../core/models/professor.model';
@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  professorUrl: string = '';

  constructor(private http: HttpClient) {
    this.professorUrl =
      'https://683c92a528a0b0f2fdc78ae0.mockapi.io/professor';
  }

  listar(): Promise<any> {
    return firstValueFrom(this.http.get(this.professorUrl)).then(
      (response: any) => {
        return response;
      }
    );
  }

  adicionar(obj: Professor): Promise<Professor> {
    return firstValueFrom(this.http.post<Professor>(this.professorUrl, obj));
  }

  buscarPorId(id: number) {
    return firstValueFrom(this.http.get(`${this.professorUrl}/${id}`)).then(
      (response) => response as any
    );
  }

  atualizar(obj: Professor): Promise<Professor> {
    return firstValueFrom(
      this.http.put<Professor>(`${this.professorUrl}/${obj.idprofessor}`, obj)
    ).then((response) => response as Professor);
  }
}