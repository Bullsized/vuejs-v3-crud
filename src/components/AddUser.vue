<template>
  <div class="add-user-page pt-5">
    <div class="form shadow">
      <form class="add-user-form visible">
        <input
          id="add-user-fname-input"
          type="text"
          placeholder="First name"
          required
        />
        <input
          id="add-user-lname-input"
          type="text"
          placeholder="Last name"
          required
        />
        <input
          id="add-user-email-input"
          type="email"
          placeholder="Email"
          required
        />
        <input
          id="add-user-password-input"
          type="password"
          placeholder="Password"
          required
        />
        <input
          id="add-user-phone-input"
          type="text"
          placeholder="Phone"
          required
        />
        <input
          id="add-user-bday-input"
          type="text"
          placeholder="Birthday"
          required
        />
        <input
          id="add-user-street-input"
          type="text"
          placeholder="Address"
          required
        />
        <input
          id="add-user-city-input"
          type="text"
          placeholder="City"
          required
        />
        <input
          id="add-user-country-input"
          type="text"
          placeholder="Country"
          required
        />
        <input
          id="add-user-pcode-input"
          type="text"
          placeholder="Postal code"
        />
        <input
          id="add-user-avatar-input"
          type="text"
          placeholder="Upload avatar"
        />
        <button class="primary-button" v-on:click="addNewUser()">
          add a new user
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import store from "../store/store";

export const data = store.state;
export default {
  name: "AddUser",
  methods: {
    addNewUser() {
      let userIdAndStatus = data.users.length + 1;
      let fName = document.getElementById('add-user-fname-input').value;
      let lName = document.getElementById('add-user-lname-input').value;
      let email = document.getElementById('add-user-email-input').value;
      let pwd = document.getElementById('add-user-password-input').value;
      let avatar = document.getElementById('add-user-avatar-input').value;
      let phone = document.getElementById('add-user-phone-input').value;
      let dob = document.getElementById('add-user-bday-input').value;
      let country = document.getElementById('add-user-country-input').value;
      let city = document.getElementById('add-user-city-input').value;
      let street = document.getElementById('add-user-street-input').value;
      let pcode = document.getElementById('add-user-pcode-input').value;
      let todaysDate = this.getTodaysDate();

      let newUser = {
        id: userIdAndStatus,
        first_name: fName,
        last_name: lName,
        email: email,
        password: pwd,
        active: true,
        status: userIdAndStatus,
        avatar: avatar,
        phone: phone,
        date_of_birth: dob,
        country: country,
        city: city,
        street_address: street,
        postal_code: pcode,
        created_at: todaysDate,
        updated_at: todaysDate,
      };
      
      data.users.push(newUser);

      this.$router.push("users-table");
    },
    getTodaysDate() {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();
      return `${mm}/${dd}/${yyyy}`;
    },
  },
};
</script>

<style scoped>
</style>