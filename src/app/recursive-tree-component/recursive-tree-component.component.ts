import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursive-tree-component',
  templateUrl: './recursive-tree-component.component.html',
  styleUrls: ['./recursive-tree-component.component.css']
})
export class RecursiveTreeComponentComponent implements OnInit {
  @Input() inCounter: number;
  outCounter: number;

  constructor() { }

  ngOnInit() {
    this.outCounter = this.inCounter - 1;
  }

}
