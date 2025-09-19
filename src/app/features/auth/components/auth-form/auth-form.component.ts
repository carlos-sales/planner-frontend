import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppMaterialModule } from '../../../../shared/app-material/app-material.module';
import { AuthService } from '../../services/auth.service';
import { shakeAnimation } from './../../../../shared/animations/shakeAnimation';

@Component({
    selector: 'auth-form',
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
    if( ! this.form.valid ) return false;

    if( this.form.value.user != 'admin' && this.form.value.password != '123' )
    {
      this.doShake();
      this.form.controls['password'].setErrors({'invalid-password': true});
      return false;
    }
    return true;
  }

  doShake()
  {
    this.animationState = 'shake';
    setTimeout(() => this.animationState = '', 500);
  }
}
