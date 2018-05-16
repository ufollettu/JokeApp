import {AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {CarouselItemComponent} from '../carousel-item/carousel-item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterContentInit {
  // project to carousel-item
  @ContentChildren(CarouselItemComponent) carouselItemsList: QueryList<CarouselItemComponent>;
  // retrieve from app-component template
  @Input() delay = 500;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const carouselItems = this.carouselItemsList.toArray();
    let count = 0;
    const max = carouselItems.length;
    setInterval(() => {
      const i = count % max; // why use module????
      // ex.: (count=0 + max=3) = 3/max=3 = 1 col resto di i=0
      // ex.: (count=1 + max=3) = 4/max=3 = 1 col resto di i=1
      // ex.: (count=2 + max=3) = 5/max=3 = 2 col resto di i=2
      // ex.: (count=3 + max=3) = 6/max=3 = 3 col resto di i=0
      // etc.

      // 'i' è il resto, e può andare a 0 al valore di max,
      // perchè il resto prodotto non è mai superiore
      // al valore del secondo operando ('max')
      // quindi 'i' è l'item dell'array da visualizzare.
      // Se max cambia, il principio resta lo stesso,
      // quindi il codice continuerà a funzionare

      carouselItems.forEach((item) => item.isActive = false);
      // isActive is a property of CarouselItemComponent that now we can access from here
      carouselItems[i].isActive = true;
      count += 1;
    }, this.delay);
  }

}
