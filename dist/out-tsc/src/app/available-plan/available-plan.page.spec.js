import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AvailablePlanPage } from './available-plan.page';
describe('AvailablePlanPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AvailablePlanPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(AvailablePlanPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=available-plan.page.spec.js.map