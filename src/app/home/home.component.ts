import { Component, OnInit, ViewChild, HostListener, Renderer2 } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  albums: any = [];

  fillerNav = Array(10).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  close() {
    this.sidenav.close();
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.albums = [
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/1.jpeg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/2.jpeg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/3.jpeg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/4.jpeg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/5.jpeg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/6.jpeg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/7.jpeg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/8.jpeg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/9.jpeg'
      },


      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/10.jpeg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/11.jpeg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/12.jpeg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/13.jpg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/14.jpg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/15.jpeg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/16.jpg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/10.jpeg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/8.jpeg'
      },
      {
        title: 'Lorem Ipsum',
        description: 'Ipsum used since the 1500s',
        imagePath: 'assets/images/9.jpeg'
      },
    ];
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
