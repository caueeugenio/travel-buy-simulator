import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyATravelComponent } from './components/buy-a-travel/buy-a-travel.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'buy-a-travel', component: BuyATravelComponent
  },
  {
    path: 'buy-a-travel/:id/:cidade', component: BuyATravelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
