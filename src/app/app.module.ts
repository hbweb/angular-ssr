import { HttpClientModule } from "@angular/common/http";
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";

import "@angular/common/locales/global/en-GB";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DATE_LOCALE, MatRippleModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "./environments/environment";
import { LoginComponent } from "./login/login.component";
import { ENVIRONMENT } from "./shared/environment.token";


@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule,
    MatRippleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: ENVIRONMENT,
      useValue: environment,
    },
    { provide: LOCALE_ID, useValue: "en-GB" },
    { provide: DEFAULT_CURRENCY_CODE, useValue: "GBP" },
    { provide: MAT_DATE_LOCALE, useValue: "en-GB" }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
