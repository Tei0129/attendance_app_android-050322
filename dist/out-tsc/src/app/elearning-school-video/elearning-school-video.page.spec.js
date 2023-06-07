import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ElearningSchoolVideoPage } from './elearning-school-video.page';
describe('ElearningSchoolVideoPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ElearningSchoolVideoPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ElearningSchoolVideoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=elearning-school-video.page.spec.js.map