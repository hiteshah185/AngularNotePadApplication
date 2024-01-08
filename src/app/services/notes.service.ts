import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../Models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private _http: HttpClient
  ) { }
  private apiURL: string = "http://localhost:8080/Notes"

  getNotes(): Observable<any> {
    return this._http.get(this.apiURL);
  }
  newNotes(note: Note) {
    let newNote = {
      title: note.title,
      content: note.content,
      categoryId: note.category.id
    }
    return this._http.post(this.apiURL, newNote);
  }






}