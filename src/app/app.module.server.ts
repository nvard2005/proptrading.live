import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module'; // Import your main AppModule

@NgModule({
  imports: [
    AppModule,  // Import the regular app module here
    ServerModule // Import Angular Universal server module
  ]
})
export class AppServerModule {
  // Explicitly bootstrap the AppComponent for server-side rendering
  ngDoBootstrap() {
    // No need for this method if using default bootstrap
    // Angular will automatically bootstrap the AppComponent
  }
}
