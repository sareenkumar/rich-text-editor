import { Routes } from '@angular/router';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';

export const routes: Routes = [
    { path: '', component: RichTextEditorComponent, pathMatch: 'full' }
];
