import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PhotoDto } from '../models/photo-dto';
import { SearchPhotoDto } from '../models/search-photo-dto';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private readonly httpClient: HttpClient) {}

  getPhotos(
    page?: number,
    perPage?: number,
    orderBy?: 'latest' | 'oldest' | 'popular'
  ): Observable<PhotoDto[]> {
    let params = new HttpParams();
    if (page) {
      params = params.set('page', page.toString());
    }
    if (perPage) {
      params = params.set('per_page', perPage.toString());
    }
    if (orderBy) {
      params = params.set('order_by', orderBy);
    }
    return this.httpClient.get<PhotoDto[]>(`${environment.url_base}/photos`, {
      params,
    });
  }

  getPhotosByCriteria(
    query: string,
    page?: number,
    perPage?: number,
    orderBy?: 'relevant' | 'latest ' | undefined,
    collections?: string,
    contentFilter?: 'low' | 'high' | undefined,
    color?:
      | 'black_and_white'
      | 'black'
      | 'white'
      | 'yellow'
      | 'orange'
      | 'red'
      | 'purple'
      | 'magenta'
      | 'green'
      | 'teal'
      | 'blue'
      | undefined,
    orientation?: 'landscape' | 'portrait' | 'squarish' | undefined
  ): Observable<SearchPhotoDto> {
    let params = new HttpParams();
    if (query) {
      params = params.set('query', query.toString());
    }
    if (page) {
      params = params.set('page', page.toString());
    }
    if (perPage) {
      params = params.set('per_page', perPage.toString());
    }
    if (orderBy) {
      params = params.set('order_by', orderBy.toString());
    }
    if (collections) {
      params = params.set('collections', collections.toString());
    }
    if (contentFilter) {
      params = params.set('content_filter', contentFilter.toString());
    }
    if (color) {
      params = params.set('color', color.toString());
    }
    if (orientation) {
      params = params.set('orientation', orientation.toString());
    }
    return this.httpClient.get<SearchPhotoDto>(
      `${environment.url_base}/search/photos`,
      {
        params,
      }
    );
  }
}
