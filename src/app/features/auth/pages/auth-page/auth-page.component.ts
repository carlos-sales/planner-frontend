import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { slideFadeFromLeftAnimation } from '../../../../shared/animations/slideFadeFromLeftAnimation';
import { slideFadeFromRightAnimation } from '../../../../shared/animations/slideFadeFromRightAnimation';
import { AppMaterialModule } from '../../../../shared/app-material/app-material.module';
import { BreakpointService } from '../../../../shared/services/breakpoint/breakpoint.service';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { RecoveryPasswordFormComponent } from '../../components/recovery-password-form/recovery-password-form.component';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'auth-page',
    standalone: true,
    imports: [AppMaterialModule, CommonModule, AuthFormComponent, RecoveryPasswordFormComponent],
    templateUrl: './auth-page.component.html',
    styleUrl: './auth-page.component.scss',
    animations: [slideFadeFromLeftAnimation, slideFadeFromRightAnimation]
})
export class AuthPageComponent
{
  public isDisabledAnimation: boolean = true;
  protected readonly breakpointService = inject(BreakpointService);
  // protected readonly authService = inject(AuthService);
  public isRecovery: boolean = false;

  constructor(
    public authService: AuthService
  )
  {
    this.authService.getIsRecovery().subscribe( value => this.isRecovery = value )
  }

  ngAfterViewInit()
  {
    setTimeout( () => {
      this.isDisabledAnimation = false
    }, 200);
  }
}
