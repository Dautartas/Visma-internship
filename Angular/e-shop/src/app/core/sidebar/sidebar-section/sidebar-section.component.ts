import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../resources/models/article.model';
@Component({
  selector: 'app-sidebar-section',
  templateUrl: './sidebar-section.component.html',
  styleUrls: ['./sidebar-section.component.scss'],
})
export class SidebarSectionComponent implements OnInit {
  @Input() title!: string;
  articles: Article[] = [new Article('Article1'), new Article('Article2')];
  constructor() {}

  ngOnInit(): void {}
}
