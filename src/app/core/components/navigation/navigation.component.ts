import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SIDEBAR_NAVIGATIONS } from '../../constants/sidebar.constant';
import { SideNav } from '../../models/sidenav.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  navigations: Array<SideNav> = SIDEBAR_NAVIGATIONS;

  currentRoute?: string;

  constructor(private router: Router) {
    this._setActiveRoute(this.router.url);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this._setActiveRoute(event.url);
      });
  }

  ngOnInit(): void {}

  private _setActiveRoute(url: string): void {
    const currentRoute = this._getRouteByUrl(url);
    this.currentRoute = currentRoute;

    for (const navigation of this.navigations) {
      const isActiveRoute = navigation.route === currentRoute;
      navigation.active = isActiveRoute;
    }
  }

  private _getRouteByUrl(url: string): string {
    return url.split('/').pop() || 'about';
  }
}
