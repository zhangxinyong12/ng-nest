import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { LayoutService } from '../layout.service';
import { XConfigService, X_THEME_COLORS, X_THEME_DARK_COLORS } from '@ng-nest/ui/core';

@Component({
  selector: 'ns-affix',
  templateUrl: './affix.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AffixComponent implements OnInit {
  theme: 'dark' | 'light' = 'light';
  constructor(public ele: ElementRef, public layout: LayoutService, public configService: XConfigService) {}

  ngOnInit() {}

  action(type: string) {
    switch (type) {
      case 'dark':
        this.theme = type;
        this.configService.setDarkTheme({ colors: X_THEME_DARK_COLORS });
        break;
      case 'light':
        this.theme = type;
        this.configService.setLightTheme({ colors: X_THEME_COLORS });
        break;
    }
  }
}
