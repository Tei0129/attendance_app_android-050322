import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RateAppComponent } from './rate-app.component';
describe('RateAppComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RateAppComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(RateAppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rate-app.component.spec.js.map