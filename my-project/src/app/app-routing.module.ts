import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCakesComponent } from './category-cakes/category-cakes.component';
import { CategoryCandyComponent } from './category-candy/category-candy.component';
import { CategorySnackComponent } from './category-snack/category-snack.component';
import { CategoryFreshwaterComponent } from './category-freshwater/category-freshwater.component';
import { PageAllProductsComponent } from './page-all-products/page-all-products.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { MainComponent } from './main/main.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormSignupComponent } from './form-signup/form-signup.component';
import { SecurityGuard } from './security.guard';
import { PageAccountComponent } from './page-account/page-account.component';
import { ProductDetailComponent } from './page-product-detail/product-detail.component';
import { GroupHotComponent } from './group-hot/group-hot.component';
import { GroupNewComponent } from './group-new/group-new.component';
import { PageCartComponent } from './page-cart/page-cart.component';
import { PagePaymentComponent } from './page-payment/page-payment.component';


const routes: Routes = [
{path:"cakes", component: CategoryCakesComponent},
{path:"candy", component: CategoryCandyComponent},
{path:"snack", component: CategorySnackComponent},
{path:"freshWater", component: CategoryFreshwaterComponent},
{path:"products", component: PageAllProductsComponent},
{path:"products/:_id", component: ProductDetailComponent},
{path:"about", component: PageAboutComponent},
{path:"", component: MainComponent},
{path:"hot", component: GroupHotComponent},
{path:"new", component: GroupNewComponent},
{path:"login", component: FormLoginComponent},
{path:"signup", component: FormSignupComponent},
{path:"users/:_id", component: PageAccountComponent, canActivate: [SecurityGuard]},
{path:"cart", component: PageCartComponent},
{path:"pay", component: PagePaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[

]