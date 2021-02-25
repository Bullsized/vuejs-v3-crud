<template>
  <div class="login-page pt-5">
    <div class="form shadow">

      <!-- registration form starts -->
      <form class="register-form hidden">
        <input
          id="register-fname-input"
          type="text"
          placeholder="name"
          required
        />
        <input
          id="register-pwd-input"
          type="password"
          placeholder="password"
          required
        />
        <input
          id="register-email-input"
          type="email"
          placeholder="email address"
          required
        />
        <button class="primary-button" v-on:click="registrationCheck()">
          create
        </button>
        <p class="message">
          Already registered?
          <a v-on:click="flipOptions()">Sign In</a>
        </p>
      </form>
      <!-- registration form ends -->

      <!-- login form starts -->
      <form class="login-form visible">
        <input
          id="login-email-input"
          type="email"
          placeholder="email"
          required
        />
        <input
          id="login-password-input"
          type="password"
          placeholder="password"
        />
        <button class="primary-button" v-on:click="loginCheck()">login</button>
        <p class="message">
          Not registered?
          <a v-on:click="flipOptions()">Create an account</a>
        </p>
        <p class="message mt-0">
          (Hint: credentials can be found in the console)
        </p>
      </form>
      <!-- login form ends -->
      
    </div>
  </div>
</template>

<script>
import store from "../store/store.js";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const data = store.state;
export default {
  name: "LoginOrRegister",
  methods: {
    // flip forms depending on known user/new registration
    flipOptions() {
      let forms = document.getElementsByTagName("form");

      for (let form of forms) {
        if (form.classList.contains("visible")) {
          form.classList.remove("visible");
          form.classList.add("hidden");
        } else {
          form.classList.remove("hidden");
          form.classList.add("visible");
        }
      }
    },
    // check if the entered login email exists and if password corresponds -
    // load the table component; if no - display an error toast with a hint
    loginCheck() {
      let userEmail = document.getElementById("login-email-input").value;
      let userPassword = document.getElementById("login-password-input").value;
      let doesEmailExist = data.users.filter(
        (user) => user.email === userEmail && user.password === userPassword
      );

      if (Object.keys(doesEmailExist).length > 0 && userEmail !== '') {
        this.$router.push("users-table");
      } else {
        Toastify({
          text: "Invalid email and/or password. Maybe check the console?",
          duration: 5000,
          close: true,
          gravity: "bottom",
          position: "right",
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
          stopOnFocus: true,
          onClick: function () {},
        }).showToast();
      }
    },
    // check if the entered registration email exists and if yes -
    // add it to the users; if no - an error toast
    registrationCheck() {
      let newUserEmail = document.getElementById("register-email-input").value;
      let doesEmailExist = data.users.filter(
        (user) => user.email === newUserEmail
      );
      if (Object.keys(doesEmailExist).length > 0 && !!newUserEmail) {
        Toastify({
          text: "Email already exists in our database.",
          duration: 5000,
          close: true,
          gravity: "bottom",
          position: "right",
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
          stopOnFocus: true,
          onClick: function () {},
        }).showToast();
      } else {
        let newUserFName = document.getElementById("register-fname-input")
          .value;
        let newUserPwd = document.getElementById("register-pwd-input").value;
        let newUser = {
          id: data.users.length + 1,
          first_name: newUserFName,
          email: newUserEmail,
          password: newUserPwd,
        };
        data.users.push(newUser);

        this.$router.push("users-table");
      }
    },
  },
};

// print of the users in the console for login purposes:
console.log(data.users);
</script>

<style scoped>
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}

.form .message a {
  color: #4caf50;
  text-decoration: none;
}

p a {
  cursor: pointer;
}
</style>