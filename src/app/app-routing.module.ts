import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchListComponent } from './search-list/search-list.component'
import { HistoryCollectionComponent } from './history-collection/history-collection.component';
// Route guards
const routes: Routes = [
  {
    path: 'search',
    component: SearchListComponent
  },
  {
    path: 'history',
    component: HistoryCollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
