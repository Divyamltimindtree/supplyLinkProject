import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  
import { AuthInterceptor } from './auth.interceptors';
=======
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  
>>>>>>> 472ea3f966ce8cbb39c29b3c80973466b6162d47

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule 
  ],
<<<<<<< HEAD
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true,
    }
  ],
=======
  providers: [],
>>>>>>> 472ea3f966ce8cbb39c29b3c80973466b6162d47
  bootstrap: [AppComponent]
})
export class AppModule {}
