import { TestBed } from '@angular/core/testing';
import { InfoViviendasComponent } from './info-viviendas.component';
describe('InfoViviendasComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InfoViviendasComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(InfoViviendasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=info-viviendas.component.spec.js.map