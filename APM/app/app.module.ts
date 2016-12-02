import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {ProductListComponent} from "./products/product-list.component";
import {FormsModule} from "@angular/forms";
import {ProductFilterPipe} from "./products/product-filter.pipe";
import {StarComponent} from "./shared/star.component";
import {HttpModule} from "@angular/http";
import {ProductDetailComponent} from "./products/product-detail.component";
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./products/product-guard.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductListComponent },
            { path: 'products/:id',
                canActivate: [ ProductDetailGuard ], component: ProductDetailComponent },
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ])
    ],
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductDetailComponent,
        WelcomeComponent,
        StarComponent,
        ProductFilterPipe
    ],
    providers: [ProductDetailGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
