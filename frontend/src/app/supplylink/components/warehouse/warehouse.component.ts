import { Component, OnInit } from "@angular/core";
import { Warehouse } from '../../types/Warehouse';
<<<<<<< HEAD
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Supplier } from "../../types/Supplier";
=======
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
>>>>>>> 472ea3f966ce8cbb39c29b3c80973466b6162d47


@Component({
    selector: 'app-warehouse',
    templateUrl: './warehouse.component.html',
    styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
    warehouseForm!: FormGroup;
<<<<<<< HEAD
    successMessage: string | null = null;
    errorMessage: string | null = null;
=======
    warehouse: Warehouse | undefined;
    formBuilder!: FormBuilder;
    validateWarehouseId: any;
    validateNonNegativeCapacity: any;
>>>>>>> 472ea3f966ce8cbb39c29b3c80973466b6162d47

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
<<<<<<< HEAD
        this.warehouseForm = this.fb.group({
            supplierId: ["", [Validators.required]],
=======
        // No need to fetch data from a service since we are using hardcoded data
        this.warehouseForm = this.fb.group({
            warehouseId: [null],
            supplierId: [null, [Validators.required, Validators.min(1)]],
>>>>>>> 472ea3f966ce8cbb39c29b3c80973466b6162d47
            warehouseName: ["", [Validators.required]],
            location: [""],
            capacity: ["", [Validators.required, Validators.min(0)]],
        });
<<<<<<< HEAD
    }


    onSubmit(): void {
        if (this.warehouseForm.valid) {
          // Simulate backend call and handle error messages
          const backendError = this.simulateBackendError();
          if (backendError) {
            this.errorMessage = backendError;
            this.successMessage = null;
          } else {
            this.successMessage = 'Warehouse has been successfully created!';
            this.errorMessage = null;
            console.log('Warehouse Created: ', this.warehouseForm.value);
            this.warehouseForm.reset();
          }
        } else {
          this.errorMessage = 'Please fill out all required fields correctly.';
          this.successMessage = null;
        }
      }
    
      simulateBackendError(): string | null {
        // Simulate a backend error based on some condition
        const teamName = this.warehouseForm.get('warehouseName')?.value;
        if (teamName === 'warehouseName') {
          return 'Warehouse name already exists.';
        }
        return null;
      }
=======
        this.warehouse = new Warehouse(1, "12", "Flamingo", "Nevada", 1000);

    }

    onSubmit() {
        throw new Error('Method not implemented.');
    }
>>>>>>> 472ea3f966ce8cbb39c29b3c80973466b6162d47
}