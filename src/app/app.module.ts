import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { searchReducer } from './state/search.reducer';
import { collectionReducer } from './state/collection.reducer';
import { favReducer } from './state/fav.reducer';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SearchListComponent } from './search-list/search-list.component';
import { HistoryCollectionComponent } from './history-collection/history-collection.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
// import { HeaderComponent } from './pages/header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    AppRoutingModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
   
  
    FormsModule,
    MatTreeModule,
    MatExpansionModule,
    MatButtonModule,
  
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
      //logOnly: environment.production, // Restrict extension to log-only mode
    }),
    
    StoreModule.forRoot({ search: searchReducer, collection: collectionReducer,favourites: favReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  declarations: [AppComponent, SearchListComponent, HistoryCollectionComponent, FavouriteListComponent],
  bootstrap: [AppComponent],
  exports:[MatFormFieldModule, MatInputModule ]
  
})
export class AppModule {}
