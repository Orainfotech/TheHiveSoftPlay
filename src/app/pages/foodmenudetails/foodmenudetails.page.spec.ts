import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodmenudetailsPage } from './foodmenudetails.page';

describe('FoodmenudetailsPage', () => {
  let component: FoodmenudetailsPage;
  let fixture: ComponentFixture<FoodmenudetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodmenudetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodmenudetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
