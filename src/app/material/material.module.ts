import { NgModule } from '@angular/core';
import { MatButtonModule, 
  MatToolbarModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatMenuModule,
  MatTabsModule,
  MatInputModule,
  MatStepperModule,
  MatSnackBarModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';

const Mat = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatTabsModule,
  MatInputModule,
  MatStepperModule,
  MatSnackBarModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule
  
];
@NgModule({
  
  imports: [Mat],
  exports: [Mat]
})
export class MaterialModule { }
