import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyReservationPage } from './my-reservation.page';

describe('MyReservationPage', () => {
  let component: MyReservationPage;
  let fixture: ComponentFixture<MyReservationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReservationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
