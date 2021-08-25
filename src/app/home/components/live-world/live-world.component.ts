import { Component, OnInit } from '@angular/core';
import { LiveWorld } from '../../data/live-data';
import { liveData } from '../../models/live-model';

@Component({
  selector: 'app-live-world',
  templateUrl: './live-world.component.html',
  styleUrls: ['./live-world.component.scss'],
})
export class LiveWorldComponent implements OnInit {
  liveList: LiveWorld[] = liveData;
  constructor() {}

  ngOnInit(): void {}
}
