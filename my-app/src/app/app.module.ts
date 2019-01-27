import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsTableComponent } from './students-table/students-table.component';
import { StudentsTableRowComponent } from './students-table-row/students-table-row.component';
import { SearchStudentsByNameComponent } from './search-students-by-name/search-students-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsTableComponent,
    StudentsTableRowComponent,
    SearchStudentsByNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
