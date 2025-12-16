import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdsListPage } from './ads-list.page';

describe('AdsListPage', () => {
  let component: AdsListPage;
  let fixture: ComponentFixture<AdsListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
