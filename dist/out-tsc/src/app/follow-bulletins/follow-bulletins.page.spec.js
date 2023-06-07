import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FollowBulletinsPage } from './follow-bulletins.page';
describe('FollowBulletinsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FollowBulletinsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(FollowBulletinsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=follow-bulletins.page.spec.js.map