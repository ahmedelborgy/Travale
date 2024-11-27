import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent {
  destinations = [
    { name: ' ولاية بوشر', image: 'assets/fac1.jpg' },
    { name: 'ولاية صلالة', image: '../../assets/fac2.jpg' },
    { name: ' ولاية مسقط', image: '../../assets/fac3.jpg' },
    { name: 'ولاية العامرات',image: '../../assets/fac4.jpg' },
    { name: 'محافظة ظفار', image: '../../assets/fac5.jpg' }


  ];
}
