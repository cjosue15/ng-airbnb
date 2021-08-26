import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/carrusel.model';
import { activitiesMocked } from '../../data/data-home';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  activities: Item[] = activitiesMocked;

  constructor() {}

  ngOnInit(): void {}
}
