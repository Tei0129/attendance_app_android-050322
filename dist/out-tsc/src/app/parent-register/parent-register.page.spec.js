import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ParentRegisterPage } from './parent-register.page';
describe('ParentRegisterPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ParentRegisterPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ParentRegisterPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=parent-register.page.spec.js.map