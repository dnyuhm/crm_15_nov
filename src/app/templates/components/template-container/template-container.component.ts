import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss'],
})
export class TemplateContainerComponent implements OnInit, OnChanges {
  @Input() public title: string;

  constructor() {
    this.title = 'Le titre est ici';
    console.log(this.title);
  }

  ngOnChanges(): void {
    console.log(this.title);
  }

  ngOnInit(): void {
    console.log(this.title);
  }
}
