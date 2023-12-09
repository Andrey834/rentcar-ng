import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDrawerComponent } from './sidenav-drawer.component';

describe('SidenavDrawerComponent', () => {
  let component: SidenavDrawerComponent;
  let fixture: ComponentFixture<SidenavDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavDrawerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
