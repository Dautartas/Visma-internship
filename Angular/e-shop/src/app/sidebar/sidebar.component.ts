import { Component, OnInit } from '@angular/core';
import { SidebarSection } from './sidebar-section.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sidebarSections: SidebarSection[] = [
    new SidebarSection('Posts', ['article1', 'article2']),
    new SidebarSection('Comments', ['article1', 'article2']),
  ];
  constructor() {}

  ngOnInit(): void {}
}
