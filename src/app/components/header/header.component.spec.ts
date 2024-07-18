import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent,RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logo = compiled.querySelector('img');
    expect(logo).toBeTruthy();
    expect(logo?.getAttribute('src')).toContain('Healthlogo.png');
    expect(logo?.getAttribute('alt')).toContain('Logo');
  });

  it('should render the navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = Array.from(compiled.querySelectorAll('nav a'));
    expect(navLinks.length).toBe(3);

    const [formLink, listLink, progressLink] = navLinks;
    expect(formLink.textContent).toContain('Form');
    expect(listLink.textContent).toContain('List');
    expect(progressLink.textContent).toContain('Progress');
  });

  it('should have correct routerLinks', () => {
    const debugElement = fixture.debugElement;
    const formLink = debugElement.query(By.css('a[routerLink="/workout-form"]'));
    const listLink = debugElement.query(By.css('a[routerLink="/workout-list"]'));
    const progressLink = debugElement.query(By.css('a[routerLink="/workout-progress"]'));

    expect(formLink).toBeTruthy();
    expect(listLink).toBeTruthy();
    expect(progressLink).toBeTruthy();
  });
});
