import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [], // Retirez HomeComponent de la liste des déclarations
      imports: [ FormsModule ],
      providers: [ LoginComponent ] // Ajoutez HomeComponent aux fournisseurs (providers)
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty username and password initially', () => {
    expect(component.username).toEqual('');
    expect(component.password).toEqual('');
  });

  it('should update username and password on input change', () => {
    const usernameInput: HTMLInputElement = fixture.nativeElement.querySelector('input[name="username"]');
    const passwordInput: HTMLInputElement = fixture.nativeElement.querySelector('input[name="password"]');

    usernameInput.value = 'testuser';
    passwordInput.value = 'testpassword';

    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    expect(component.username).toEqual('testuser');
    expect(component.password).toEqual('testpassword');
  });

  it('should call login method on button click', () => {
    spyOn(component, 'login');
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.login).toHaveBeenCalled();
  });

  it('login method should log username and password', () => {
    spyOn(console, 'log');
    component.username = 'testuser';
    component.password = 'testpassword';
    component.login();
    expect(console.log).toHaveBeenCalledWith('Username:', 'testuser');
    expect(console.log).toHaveBeenCalledWith('Password:', 'testpassword');
  });
});
