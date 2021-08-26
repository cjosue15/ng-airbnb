import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/carrusel.model';
import { exploreData } from '../../data/data-home';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  exploreList: Item[] = exploreData;

  constructor() {}

  ngOnInit(): void {}
}
