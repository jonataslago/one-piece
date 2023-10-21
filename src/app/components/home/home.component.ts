import { Component, createComponent } from '@angular/core';
import { OnePieceService } from 'src/app/services/one-piece.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  works: any;

  constructor(private readonly onePieceService : OnePieceService) {}

  ngOnInit() {
    this.onePieceService.getAnime("anime?filter[text]=one%20piece").subscribe((anime: any) => {
      console.log(anime);

      let opObject = anime;
      let opData = opObject.data;
      this.works = opData;

      console.log(opData);
      
    });
  };
}
