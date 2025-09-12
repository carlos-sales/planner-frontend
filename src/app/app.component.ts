import { Component } from '@angular/core';

import { AuthPageComponent } from './features/auth/pages/auth-page/auth-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AuthPageComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent
{
  title = 'planner';
}
