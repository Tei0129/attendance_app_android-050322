import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PlayvideoPage } from './playvideo.page';
describe('PlayvideoPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlayvideoPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PlayvideoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=playvideo.page.spec.js.map