import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FolderPage } from './folder.page';
describe('FolderPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FolderPage],
            imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
        }).compileComponents();
        fixture = TestBed.createComponent(FolderPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=folder.page.spec.js.map