import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoDto } from '../models/photo-dto';
import { SearchPhotoDto } from '../models/search-photo-dto';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  private baseUrl: string = 'https://api.unsplash.com';
  constructor(private readonly httpClient: HttpClient) {}

  getPhotos(
    page?: number,
    perPage?: number,
    orderBy?: 'latest' | 'oldest' | 'popular'
  ): Observable<PhotoDto[]> {
    const headers = new HttpHeaders({
      'Accept-Version': 'v1',
      Authorization: 'Client-ID RMxltgcLisvzA7iaA2ieIE2R2hdwP9cHlS1ZO6iEYFc',
    });
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
    return this.httpClient.get<PhotoDto[]>(`${this.baseUrl}/photos`, {
      headers,
      params,
    });
  }

  getPhotosByCriteria(
    query: string,
    page?: number,
    per_page?: number,
    order_by?: 'relevant' | 'latest ' | undefined,
    collections?: string,
    content_filter?: 'low' | 'high' | undefined,
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
    const headers = new HttpHeaders({
      'Accept-Version': 'v1',
      Authorization: 'Client-ID RMxltgcLisvzA7iaA2ieIE2R2hdwP9cHlS1ZO6iEYFc',
    });
    let params = new HttpParams();
    if (query) {
      params = params.set('query', query.toString());
    }
    if (page) {
      params = params.set('page', page.toString());
    }
    if (per_page) {
      params = params.set('per_page', per_page.toString());
    }
    if (order_by) {
      params = params.set('order_by', order_by.toString());
    }
    if (collections) {
      params = params.set('collections', collections.toString());
    }
    if (content_filter) {
      params = params.set('content_filter', content_filter.toString());
    }
    if (color) {
      params = params.set('color', color.toString());
    }
    if (orientation) {
      params = params.set('orientation', orientation.toString());
    }
    return this.httpClient.get<SearchPhotoDto>(
      `${this.baseUrl}/search/photos`,
      {
        headers,
        params,
      }
    );
  }
}
