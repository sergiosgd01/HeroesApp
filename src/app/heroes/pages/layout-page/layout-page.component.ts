import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  public sideBarItems = [
    { name: 'Listado', icon: 'label', url: './list' },
    { name: 'Añadir', icon: 'add', url: './new-hero' },
    { name: 'Buscar', icon: 'search', url: './search' }
  ];

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
