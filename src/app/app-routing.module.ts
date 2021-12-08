import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './components/views/Checkout/checkout/checkout.component';
import { CartComponent } from './components/views/Cart/cart/cart.component';
import { ContactComponent } from './components/views/Contact/contact/contact.component';
import { BlogPostComponent } from './components/views/Blog/blog-post/blog-post.component';
import { HomeComponent } from './components/views/Produtos/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
    path: 'home',
    component: HomeComponent
   },
    {
    path: 'checkout',
    component: CheckoutComponent
   },
    {
    path: 'cart',
    component: CartComponent
   },
    {
    path: 'contact',
    component: ContactComponent
   },
    {
    path: 'blog',
    component: BlogPostComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
