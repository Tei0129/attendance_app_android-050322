import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BulletinsPage } from './bulletins.page';
describe('BulletinsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BulletinsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(BulletinsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bulletins.page.spec.js.map