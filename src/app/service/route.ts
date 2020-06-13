import { Routes } from '@angular/router';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { FormComponent } from '../form/form.component';
import { HomeComponent } from '../home/home.component';
import { NewTraineeComponent } from '../new-trainee/new-trainee.component';
import { EmployeeComponent } from '../employee/employee.component';


export const routes: Routes = [
                        {
                            path: '',
                            redirectTo : 'home',
                            pathMatch: 'full'
                        },
                        {
                            path: 'home',
                            component: HomeComponent
                        },
                        {
                            path: 'reactiveform',
                            component: ReactiveFormComponent
                        },
                        {
                            path : 'form',
                            component: FormComponent
                        },
                        {
                            path : 'trainee/new',
                            component: NewTraineeComponent
                        },
                        {
                            path : 'employee',
                            component: EmployeeComponent
                          },
                        {
                            path: '**',
                            component: ReactiveFormComponent
                        }
];

// route helps to keep track of the state
