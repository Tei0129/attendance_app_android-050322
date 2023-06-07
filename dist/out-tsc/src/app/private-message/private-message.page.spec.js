import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PrivateMessagePage } from './private-message.page';
describe('PrivateMessagePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PrivateMessagePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PrivateMessagePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=private-message.page.spec.js.map