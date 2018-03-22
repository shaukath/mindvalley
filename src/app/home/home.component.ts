import { Component, OnInit, ViewChild, HostListener, Renderer2 } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  fillerNav = Array(10).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  close() {
    this.sidenav.close();
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {

    document.getElementById('headerId').className = 'nav-shadow navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar' +
    ' header-nav fixed-top';
  } else {
      document.getElementById('headerId').className = 'navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar' +
      ' header-nav fixed-top';
    }
  }

}
