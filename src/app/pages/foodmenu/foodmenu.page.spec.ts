import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodmenuPage } from './foodmenu.page';

describe('FoodmenuPage', () => {
  let component: FoodmenuPage;
  let fixture: ComponentFixture<FoodmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
