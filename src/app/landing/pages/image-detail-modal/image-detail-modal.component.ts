import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-detail-modal',
  templateUrl: './image-detail-modal.component.html',
  styleUrls: ['./image-detail-modal.component.scss'],
})
export class ImageDetailModalComponent implements OnInit {
  @Input() image: any = null;
  public screenWidth: any;
  public screenHeight: any;

  constructor() {}

  ngOnInit(): void {
    this.getWindowSize();
    console.log(this.screenWidth);
  }

  getWindowSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  isScreenSmallerThan(value: number = 1200): boolean {
    return this.screenWidth < value;
  }
}
