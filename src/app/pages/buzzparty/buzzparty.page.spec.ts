import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuzzpartyPage } from './buzzparty.page';

describe('BuzzpartyPage', () => {
  let component: BuzzpartyPage;
  let fixture: ComponentFixture<BuzzpartyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzzpartyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuzzpartyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
