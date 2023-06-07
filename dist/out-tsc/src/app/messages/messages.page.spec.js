import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MessagesPage } from './messages.page';
describe('MessagesPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MessagesPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(MessagesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=messages.page.spec.js.map