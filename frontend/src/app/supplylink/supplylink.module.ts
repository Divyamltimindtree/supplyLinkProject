import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SupplyLinkRoutingModule } from "./supplylink-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
<<<<<<< HEAD
import { RouterModule } from "@angular/router";
import { ProductComponent } from "./components/product/product.component";
import { SupplierComponent } from "./components/supplier/supplier.component";
import { WarehouseComponent } from "./components/warehouse/warehouse.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { NavBarComponent } from "../shared/navbar/navbar.component";
import { LogoutComponent } from "../auth/components/logout/logout.component";

@NgModule({
  declarations: [
    ProductComponent,
    SupplierComponent,
    WarehouseComponent,
    DashboardComponent,
    NavBarComponent,
    DashboardComponent,
    LogoutComponent
  ],
=======

@NgModule({
  declarations: [],
>>>>>>> 472ea3f966ce8cbb39c29b3c80973466b6162d47
  imports: [
    CommonModule,
    SupplyLinkRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
<<<<<<< HEAD
    RouterModule,
    
  ],
  exports: [

  ]
})
export class SupplyLinkModule { }
=======
  ],
  exports: [
    
  ]
})
export class SupplyLinkModule {}
>>>>>>> 472ea3f966ce8cbb39c29b3c80973466b6162d47
