import { BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ResponsiveService } from '../responsive/responsive.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class': 'nav__menu'}
})
export class NavMenuComponent implements OnInit, OnDestroy {

  @Input() navItems: { label: string, route: string }[] = [{
      label: 'Dashboard',
      route: '/dashboard'
    }, {
      label: 'Events',
      route: '/events'
    }, {
      label: 'Help',
      route: '/help'
    }, {
      label: 'Logout',
      route: '/logout'
    }
  ];

  public isBelowSm: boolean = false;
  private destroy$ = new Subject();
  public isMenuOpen: boolean = false;

  constructor(
    private cdRef: ChangeDetectorRef,
    private responsiveService: ResponsiveService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.responsiveService.isBelowMd().pipe(takeUntil(this.destroy$)).subscribe((isBelowSm: BreakpointState) => {
      this.isBelowSm = isBelowSm.matches;
      this.cdRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
