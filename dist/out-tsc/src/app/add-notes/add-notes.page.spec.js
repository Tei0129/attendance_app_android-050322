import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AddNotesPage } from './add-notes.page';
describe('AddNotesPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddNotesPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(AddNotesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-notes.page.spec.js.map