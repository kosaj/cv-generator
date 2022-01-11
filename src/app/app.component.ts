import {
  AfterContentInit,
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  ViewChild,
} from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
var htmlToPdfmake = require('html-to-pdfmake');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cvToPdf';

  @ViewChild('kebab', { static: true }) kebab!: ElementRef;

  constructor() {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }
  ngOnInit(): void {}

  test() {
    var html = htmlToPdfmake((this.kebab.nativeElement as Element).innerHTML);
    console.log(html);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();
  }
}

//https://github.com/Aymkdn/html-to-pdfmake

//pdfmake types
//https://www.npmjs.com/package/@types/pdfmake
