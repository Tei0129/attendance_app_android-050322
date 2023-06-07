import { TestBed } from '@angular/core/testing';
import { DatabaseService } from './database.service';
describe('DatabaseService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DatabaseService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=database.service.spec.js.map