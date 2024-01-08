import { Component } from '@angular/core';
import { Note } from '../Models/note';
import { Category } from '../Models/category';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  myTitle: string = 'My Notes';
  public notes!: Array<Note>
  public categories!: Category[];

  modifiedNote!: Note;
  noteForm!: FormGroup;

  openEmptyFormNote() { }
  openFormNote(note: Note) { }
  openDeleteNote(note: Note) { }
  dismissFormNote() { }
  saveNote() { }
  onChangeCat(cat: Category) {
    this.modifiedNote.category = cat;
  }
  dismissDeleteNote() { }
  delNote() { }
}
