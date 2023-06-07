import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SelectBulletinsUserPage } from './select-bulletins-user.page';
describe('SelectBulletinsUserPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectBulletinsUserPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SelectBulletinsUserPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=select-bulletins-user.page.spec.js.map