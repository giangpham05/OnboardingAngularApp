import { Component, AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared/share-service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  title = 'app';
  formTitle: string;
  year = (new Date()).getFullYear();

  constructor(private router: Router, private _sharedService: SharedService) {

   }

   ngAfterViewInit() {
    const  currentUrl = this.router.url;
    console.log('CurrentUrl', currentUrl);
    this._sharedService.changeEmitted$.pipe(delay(0)).subscribe(title => this.formTitle = title);
  }
}
