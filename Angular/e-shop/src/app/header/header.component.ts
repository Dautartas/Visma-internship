import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();
  collapsed: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  renderPage(page: string) {
    this.pageSelected.emit(page);
  }
}
