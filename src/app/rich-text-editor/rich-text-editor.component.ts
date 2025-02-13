
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rich-text-editor',
  standalone: true,
  imports: [],
  templateUrl: './rich-text-editor.component.html',
  styleUrl: './rich-text-editor.component.css'
})
export class RichTextEditorComponent {
  @ViewChild('editor', { static: true }) editor!: ElementRef;

  format(command: string) {
    document.execCommand(command, false, '');
  }

  insertImage() {
    const url = prompt('Enter Image URL:');
    if (url) {
      document.execCommand('insertImage', false, url);
    }
  }

  insertTable() {
    const tableHTML = `
  <table border="1">
 <tr><td>Cell 1</td><td>Cell 2</td></tr>
 <tr><td>Cell 3</td><td>Cell 4</td></tr>
  </table>`;
    document.execCommand('insertHTML', false, tableHTML);
  }

  updateContent() {
    console.log('Content Updated:', this.editor.nativeElement.innerHTML);
  }
}
