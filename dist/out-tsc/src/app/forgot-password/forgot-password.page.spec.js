import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ForgotPasswordPage } from './forgot-password.page';
describe('ForgotPasswordPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ForgotPasswordPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ForgotPasswordPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=forgot-password.page.spec.js.map