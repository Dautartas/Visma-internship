import { Component, OnInit } from '@angular/core';
import { SidebarSection } from '../resources/models/sidebar-section.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sidebarSections: SidebarSection[] = [
    new SidebarSection('Posts'),
    new SidebarSection('Comments'),
  ];
  constructor() {}

  ngOnInit(): void {}
}
