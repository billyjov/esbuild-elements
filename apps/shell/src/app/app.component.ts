import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MicroFrontendLoaderService } from './micro-frontend-loader.service';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class AppComponent implements OnInit {
  private mfeLoaderService: MicroFrontendLoaderService = inject(
    MicroFrontendLoaderService
  );

  constructor() {
    console.log('AppComponent constructor');
  }

  ngOnInit(): void {
    console.log('Loading MFE1');
    this.mfeLoaderService
      .loadScript('assets/js/mfe1/main.js')
      .then((val) => {
        console.log('MFE1 loaded: ', val);
      })
      .catch((error) => {
        console.error('Failed to load MFE1', error);
      });
  }
}
