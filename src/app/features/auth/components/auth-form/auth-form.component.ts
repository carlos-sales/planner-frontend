import { shakeAnimation } from './../../../../shared/animations/shakeAnimation';
import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppMaterialModule } from '../../../../shared/app-material/app-material.module';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'auth-form',
    standalone: true,
    imports: [AppMaterialModule, ReactiveFormsModule],
    templateUrl: './auth-form.component.html',
    styleUrl: './auth-form.component.scss',
    animations: [shakeAnimation]
})
export class AuthFormComponent
{
  public form!: FormGroup;
  public animationState: string = '';

  constructor(
    private nnfb: NonNullableFormBuilder,
    public authService: AuthService
  ) {}

  ngOnInit()
  {
    this.initForm();
  }

  initForm()
  {
    this.form = this.nnfb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  doLogin()
  {
    if( ! this.form.valid ) return;

    if( this.form.value.user != 'admin' && this.form.value.password != '123' )
    {
      this.doShake();
      this.form.controls['password'].setErrors({'invalid-password': true});
      return;
    }
    // this.serviceSession.setIsLogged(true);
  }

  doShake()
  {
    this.animationState = 'shake';
    setTimeout(() => this.animationState = '', 500);
  }
}
