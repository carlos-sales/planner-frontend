import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { shakeAnimation } from '../../../../shared/animations/shakeAnimation';
import { AppMaterialModule } from '../../../../shared/app-material/app-material.module';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'recovery-password-form',
    imports: [AppMaterialModule, ReactiveFormsModule],
    templateUrl: './recovery-password-form.component.html',
    styleUrl: './recovery-password-form.component.scss',
    animations: [shakeAnimation]
})
export class RecoveryPasswordFormComponent
{
  public form!: FormGroup;
  public animationState: string = '';
  // public isRecovery: Observable<boolean>;

  constructor(
    private nnfb: NonNullableFormBuilder,
    public authService: AuthService
  )
  {
    // this.isRecovery = this.authService.isRecovery$;
  }

  ngOnInit()
  {
    this.initForm();
  }

  initForm()
  {
    this.form = this.nnfb.group({
      mail: ['', [Validators.required]],
    })
  }

  doRecovery()
  {
    if( ! this.form.valid ) return;

    if( this.form.value.mail != 'admin@mail.com' )
    {
      this.doShake();
      this.form.controls['mail'].setErrors({'invalid-mail': true});
      return;
    }
  }

  doShake()
  {
    this.animationState = 'shake';
    setTimeout(() => this.animationState = '', 500);
  }
}
