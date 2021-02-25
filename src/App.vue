<template>
  <div id="nav">
    <nav class="navbar navbar-light bg-light d-block">
      <div class="text-center">
        <button
          class="btn btn-outline-success mr-2"
          type="button"
          @click="$router.push('login')"
        >
          Login form
        </button>
        <button
          class="btn btn-outline-success mr-2"
          type="button"
          @click="$router.push('users-table')"
        >
          Users table
        </button>
        <button
          class="btn btn-outline-success"
          type="button"
          @click="$router.push('add-user')"
        >
          Create a user
        </button>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

body {
  font-family: "Roboto", sans-serif !important;
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8dc26f);
  background: -moz-linear-gradient(right, #76b852, #8dc26f);
  background: -o-linear-gradient(right, #76b852, #8dc26f);
  background: linear-gradient(to left, #76b852, #8dc26f);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.primary-button {
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.primary-button:hover,
.primary-button:active,
.primary-button:focus {
  background: #43a047;
}

.shadow {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.svg-icon {
  width: 3em;
  height: 2em;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #76b852;
}

.svg-icon circle {
  stroke: #76b852;
  stroke-width: 1;
}

.edit-user-btn {
  border: 0;
  background-color: inherit;
}

.login-page,
.add-user-page {
  width: 360px;
  margin: auto;
}

.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
}

.form input {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

.visible {
  display: block;
  animation: fadeVisibility 0.5s;
}

.hidden {
  display: none;
}

@keyframes fadeVisibility {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: opacity linear;
  }
}
</style>
