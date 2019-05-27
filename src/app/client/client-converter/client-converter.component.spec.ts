import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConverterComponent } from './client-converter.component';

describe('ClientConverterComponent', () => {
  let component: ClientConverterComponent;
  let fixture: ComponentFixture<ClientConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
