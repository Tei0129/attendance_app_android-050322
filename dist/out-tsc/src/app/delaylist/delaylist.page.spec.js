import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DelaylistPage } from './delaylist.page';
describe('DelaylistPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DelaylistPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(DelaylistPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=delaylist.page.spec.js.map