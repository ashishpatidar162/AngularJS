import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductListSidebarComponent } from './product-list-sidebar/product-list-sidebar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  
  {
    path: "product/:id",
    component: ProductDetailsComponent
  },
  {
    path: "",
    component: SidebarComponent,
    outlet: "sidebar"
  },
  {
    path: "products",
    component: ProductListSidebarComponent,
    outlet: "sidebar"
  },
  {
    path: "products",
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
