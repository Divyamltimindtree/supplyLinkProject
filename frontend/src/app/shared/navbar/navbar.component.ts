<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
    role: string | null;

    constructor(private router: Router) { }

    ngOnInit(): void {
        console.log(localStorage.getItem("role"));
        this.role = localStorage.getItem("role");
    }

    logout(): void {
        localStorage.removeItem('token')
        this.router.navigate(["/auth"]);
    }
=======

export class NavBarComponent{

  
>>>>>>> 472ea3f966ce8cbb39c29b3c80973466b6162d47

}
