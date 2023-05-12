import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { PageAllProductsComponent } from './page-all-products/page-all-products.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { CategoryCakesComponent } from './category-cakes/category-cakes.component';
import { CategoryCandyComponent } from './category-candy/category-candy.component';
import { CategoryFreshwaterComponent } from './category-freshwater/category-freshwater.component';
import { CategorySnackComponent } from './category-snack/category-snack.component';
import { HttpClientModule } from '@angular/common/http';
import { FormLoginComponent } from './form-login/form-login.component';
import { SectionContentComponent } from './section-content/section-content.component';
import { SectionSupportComponent } from './section-support/section-support.component';
import { SectionBrandComponent } from './section-brand/section-brand.component';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { SectionProductComponent } from './section-product/section-product.component';
import { SlideBannerComponent } from './slide-banner/slide-banner.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { FormSignupComponent } from './form-signup/form-signup.component';
import { PageAccountComponent } from './page-account/page-account.component';
import { Moment } from 'moment';
import { GroupHotComponent } from './group-hot/group-hot.component';
import { GroupNewComponent } from './group-new/group-new.component';
import { ProductDetailComponent } from './page-product-detail/product-detail.component';
import { PageCartComponent } from './page-cart/page-cart.component';
import { PagePaymentComponent } from './page-payment/page-payment.component';
import { SectionSimilarProductComponent } from './section-similar-product/section-similar-product.component';
import { MyFilterPipe } from './callback.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyFilterPipe,
    RoutingComponent,
     MainComponent,
     FooterComponent,
     PageAllProductsComponent,
     PageAboutComponent,
     CategoryCakesComponent,
     CategoryCandyComponent,
     CategoryFreshwaterComponent,
     CategorySnackComponent,
     FormLoginComponent,
     SectionContentComponent,
     SectionSupportComponent,
     SectionBrandComponent,
     SectionContactComponent,
     SectionProductComponent,
     SlideBannerComponent,
     SectionAboutComponent,
     FormSignupComponent,
     PageAccountComponent,
     GroupHotComponent,
     GroupNewComponent,
     ProductDetailComponent,
     PageCartComponent,
     PagePaymentComponent,
     SectionSimilarProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
