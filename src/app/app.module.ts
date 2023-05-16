import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DataService } from './services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { GridContainerComponent } from './components/grid-container/grid-container.component';
import { CardComponent } from './components/card/card.component';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './components/filter/filter.component';
import { CharacterViewComponent } from './components/character-view/character-view.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'about', component: AboutPageComponent },
  { path: 'home', component: HomePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GridContainerComponent,
    CardComponent,
    FilterComponent,
    CharacterViewComponent,
    PaginationComponent,
    AboutPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],

  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
