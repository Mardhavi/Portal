import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @ViewChild('pageDiv') pageDiv: ElementRef;
  totalProducts: number;
  productPerPage: number =8;
  totalPages: number =3;
  iconsPerPage: number;

  constructor(
    private httpClient: HttpClient,
  
    private eleRef: ElementRef

  ) { }

  ngOnInit() {
  }

}
