import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ViewBulletinPage } from './view-bulletin.page';
describe('ViewBulletinPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewBulletinPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ViewBulletinPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=view-bulletin.page.spec.js.map