import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoViviendasComponent } from './info-viviendas.component';

describe('InfoViviendasComponent', () => {
  let component: InfoViviendasComponent;
  let fixture: ComponentFixture<InfoViviendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoViviendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoViviendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
