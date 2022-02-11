import { TestBed } from '@angular/core/testing';
import { ViviendaService } from './vivienda.service';
describe('ViviendaService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ViviendaService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=vivienda.service.spec.js.map