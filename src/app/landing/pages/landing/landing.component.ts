import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UnsplashService } from 'src/app/core/services/unsplash.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  images: any[] = [];
  searchForm: FormGroup;
  currentImage: any = null;
  pageNumber: number = 1;
  querySearch: string = '';
  perPage: number = 12;
  imagesFound: number = 0;

  constructor(private readonly unsplashService: UnsplashService) {
    this.searchForm = new FormGroup({
      searchInput: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.unsplashService.getPhotos(1, this.perPage).subscribe(
      (response) => {
        this.images = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    const value: string = this.searchForm.get('searchInput')?.value;
    this.querySearch = value;
    this.pageNumber = 1;
    this.unsplashService.getPhotosByCriteria(value, 1, this.perPage).subscribe(
      (response) => {
        this.images = response.results;
        this.imagesFound = response.total;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onScroll() {
    this.pageNumber++;
    if (this.querySearch) {
      this.unsplashService
        .getPhotosByCriteria(this.querySearch, this.pageNumber)
        .subscribe(
          (response) => {
            this.images = this.images.concat(response.results);
            this.imagesFound = response.total;
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      this.unsplashService.getPhotos(this.pageNumber, this.perPage).subscribe(
        (response) => {
          this.images = this.images.concat(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
