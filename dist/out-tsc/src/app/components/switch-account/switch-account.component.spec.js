import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SwitchAccountComponent } from './switch-account.component';
describe('SwitchAccountComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SwitchAccountComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SwitchAccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=switch-account.component.spec.js.map