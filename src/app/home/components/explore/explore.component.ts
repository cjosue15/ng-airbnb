import { Component, OnInit } from '@angular/core';
import { Explore } from '../../models/explore-model';
import { exploreData } from '../../data/explore';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  exploreList: Explore[] = exploreData;

  constructor() {}

  ngOnInit(): void {}
}
