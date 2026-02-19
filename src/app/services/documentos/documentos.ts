import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documento } from '../../Interface/documentos';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  private apiUrl = "http://localhost:8080/api/documentos";

  constructor(private http: HttpClient) {}

  subirDocumento(file: File, nombre: string, descripcion: string): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);

    return this.http.post(`${this.apiUrl}/upload`, formData, { responseType: 'text' });
  }

  listarDocumentos(): Observable<Documento[]> {
    return this.http.get<Documento[]>(`${this.apiUrl}/list`);
  }

  descargarDocumento(fileId: string): Observable<Blob> {
  return this.http.get(
    `http://localhost:8080/api/documentos/download/${fileId}`,
    { responseType: 'blob' }
  );
}
}