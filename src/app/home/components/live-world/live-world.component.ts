import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/carrusel.model';
import { liveData } from '../../data/data-home';

@Component({
  selector: 'app-live-world',
  templateUrl: './live-world.component.html',
  styleUrls: ['./live-world.component.scss'],
})
export class LiveWorldComponent implements OnInit {
  liveList: Item[] = liveData;
  constructor() {}

  ngOnInit(): void {}
}
