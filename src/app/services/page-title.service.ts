// services/page-title.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  private titleSubject = new BehaviorSubject<string>('Dashboard');
  private subtitleSubject = new BehaviorSubject<string>('');

  title$ = this.titleSubject.asObservable();
  subtitle$ = this.subtitleSubject.asObservable();

  setTitle(title: string): void {
    this.titleSubject.next(title);
  }

  setSubtitle(subtitle: string): void {
    this.subtitleSubject.next(subtitle);
  }
}