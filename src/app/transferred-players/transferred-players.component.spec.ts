import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferredPlayersComponent } from './transferred-players.component';

describe('TransferredPlayersComponent', () => {
  let component: TransferredPlayersComponent;
  let fixture: ComponentFixture<TransferredPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferredPlayersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferredPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
