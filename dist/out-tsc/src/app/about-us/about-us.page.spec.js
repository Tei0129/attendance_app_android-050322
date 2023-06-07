import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AboutUsPage } from './about-us.page';
describe('AboutUsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AboutUsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(AboutUsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=about-us.page.spec.js.map