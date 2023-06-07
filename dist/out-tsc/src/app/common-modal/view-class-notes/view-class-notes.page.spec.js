import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ViewClassNotesPage } from './view-class-notes.page';
describe('ViewClassNotesPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewClassNotesPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ViewClassNotesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=view-class-notes.page.spec.js.map