import { TestBed } from '@angular/core/testing';
import { LocationService } from './location.service';
describe('LocationService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LocationService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=location.service.spec.js.map