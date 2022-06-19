import { xPipe } from './x.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LandpageComponent } from './landpage/landpage.component';
import { NewtrainingComponent } from './newtraining/newtraining.component';
import { NametrainingComponent } from './nametraining/nametraining.component';
import { HttpClientModule } from '@angular/common/http';
import { KgPipe } from './kg.pipe';
import { TrainingslistComponent } from './trainingslist/trainingslist.component';
import { TrainingdetailComponent } from './trainingdetail/trainingdetail.component';

@NgModule({
  declarations: [

    AppComponent,
    MenuComponent,
    FooterComponent,
    LandpageComponent,
    NewtrainingComponent,
    NametrainingComponent,
    KgPipe,
    xPipe,
    TrainingslistComponent,
    TrainingdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
