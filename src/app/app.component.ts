import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly docInstance = new jsPDF();
  title = 'cvToPdf';

  constructor() {
    this.docInstance.save('a4.pdf');
  }
}
