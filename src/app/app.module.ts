import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ContactComponent } from './components/views/Contact/contact/contact.component';
import { CheckoutComponent } from './components/views/Checkout/checkout/checkout.component';
import { CartComponent } from './components/views/Cart/cart/cart.component';
import { BlogPostComponent } from './components/views/Blog/blog-post/blog-post.component';
import { BlogHomeComponent } from './components/views/Blog/blog-home/blog-home.component';
import { LoginComponent } from './components/views/Security/login/login.component';
import { RegisterComponent } from './components/views/Security/register/register.component';
import { ForgotComponent } from './components/views/Security/forgot/forgot.component';
import { PedidosComponent } from './components/views/Perfil/pedidos/pedidos.component';
import { PerfilComponent } from './components/views/Perfil/perfil/perfil.component';
import { ConfigComponent } from './components/views/Perfil/config/config.component';
import { FavoritosComponent } from './components/views/Perfil/favoritos/favoritos.component';
import { ChamadosComponent } from './components/views/Perfil/chamados/chamados.component';
import { HomeComponent } from './components/views/Produtos/home/home.component';
import { HomeSlideComponent } from './components/views/Produtos/home-slide/home-slide.component';
import { HomeDestaqueHojeComponent } from './components/views/Produtos/home-destaque-hoje/home-destaque-hoje.component';
import { HomeSlideCategoriasComponent } from './components/views/Produtos/home-slide-categorias/home-slide-categorias.component';
import { HomeDestaqueFestividadeComponent } from './components/views/Produtos/home-destaque-festividade/home-destaque-festividade.component';
import { HomeNewslleterComponent } from './components/views/Produtos/home-newslleter/home-newslleter.component';
import { HomeDestaqueComponent } from './components/views/Produtos/home-destaque/home-destaque.component';
import { HomeDestaqueTopvisitComponent } from './components/views/Produtos/home-destaque-topvisit/home-destaque-topvisit.component';
import { BuscaCategoriaComponent } from './components/views/Produtos/busca/busca-categoria/busca-categoria.component';
import { BuscaProdutoComponent } from './components/views/Produtos/busca/busca-produto/busca-produto.component';
import { PagenotfoundComponent } from './components/template/pagenotfound/pagenotfound.component';
import { CarouselHomeComponent } from './components/template/carousel-home/carousel-home.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CheckoutComponent,
    CartComponent,
    BlogPostComponent,
    BlogHomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    PedidosComponent,
    PerfilComponent,
    ConfigComponent,
    FavoritosComponent,
    ChamadosComponent,
    HomeComponent,
    HomeSlideComponent,
    HomeDestaqueHojeComponent,
    HomeSlideCategoriasComponent,
    HomeDestaqueFestividadeComponent,
    HomeNewslleterComponent,
    HomeDestaqueComponent,
    HomeDestaqueTopvisitComponent,
    BuscaCategoriaComponent,
    BuscaProdutoComponent,
    PagenotfoundComponent,
    CarouselHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    CarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }