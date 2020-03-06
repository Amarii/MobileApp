import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
           path: 'recipies', loadChildren: () => import('../recipies/recipies.module').then( m => m.RecipiesPageModule)
          },
          {
            path: 'reminders', loadChildren: () => import('../reminders/reminders.module').then( m => m.RemindersPageModule)
          }

        ]
      },
 
      
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
