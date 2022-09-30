import Firebase from './firebase';

const firebase = new Firebase();

const authenticationBackdrop = document.querySelector(
  '#authentication_backdrop'
);

const modalExit = document.querySelector('#modal-btn-exit');
const modalOpen = document.querySelector('.modal-open-btn');
const formContainer = document.querySelector('#form-container');
// const regForm = document.querySelector('#btn-reg-open-form');

modalOpen.addEventListener('click', modalAuthOpen);
modalExit.addEventListener('click', modalClose);
// regForm.addEventListener('click', openRegForm);

function logInSite(evt) {
  evt.preventDefault();
  console.log('нарешті');
}

function modalAuthOpen() {
  console.log('відкриваю');
  renderAuthentication();

  const regForm = document.querySelector('#btn-reg-open-form');
  regForm.addEventListener('click', openRegForm);
  authenticationBackdrop.classList.remove('is_hidden');
  const authenticationForm = document.querySelector('#authentication-form');
  authenticationForm.addEventListener('submit', logInSite);
}

function openRegForm() {
  renderRegistrationForm();

  const registrationForm = document.querySelector('#registration-form');
  registrationForm.addEventListener('submit', registrationUser);
}

function modalClose() {
  authenticationBackdrop.classList.add('is_hidden');
}

function registrationUser(evt) {
  evt.preventDefault();
  console.log('зареєстровано');
}

function renderAuthentication() {
  formContainer.innerHTML = ` <form class="authentication-form" id="authentication-form">
  <div class="input-form">
        <input
          class="auth_input"
          type="email"
          name="login"
          placeholder="Email..."
        />
        <input
          class="auth_input"
          type="password"
          name="password"
          placeholder="Password..."
          minlength="6"
        />
      </div>
      <button
        class="auth-submit"
        type="submit"
        class="logine-authentication"
        id="logine-authentication"
      >
        Log in to the site
      </button>
      <button type="button" class="btn-recower-password">
        Recower password
      </button>
      <button type="button" class="btn-reg-open-form" id="btn-reg-open-form">
        Registration
      </button>
      </form>`;
}

function renderRegistrationForm() {
  formContainer.innerHTML = '';
  formContainer.innerHTML = `  <form class="authentication-form" id="registration-form">
  <div class="input-form">
        <input
          class="auth_input"
          type="email"
          name="login"
          placeholder="Email..."
        />
        <input
          class="auth_input"
          type="password"
          name="password"
          placeholder="Password..."
          minlength="6"
        />
        <input
          class="auth_input"
          type="password"
          name="password"
          placeholder="Password..."
          minlength="6"
        />
      </div>
      <button
        class="auth-submit"
        type="submit"
        class="registrationUser"
        id="registrationUser"
      >
        Registration
      </button>
      </form>
      
     `;
}

//перевірити наявність користувача

//зареєструвати

//логін
