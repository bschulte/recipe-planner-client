<template>
  <div class="text-center">
    <img src="~assets/logo.png" class="company-logo" height="75">

    <q-card class="q-pa-md login-card">
      <q-card-section>
        <q-card class="header-card q-mb-lg bg-primary text-white text-center">
          <q-card-section>
            <div class="text-h5">Quasar Boilerplate</div>
            <div class="text-subtitle1 q-mt-sm">Log in to your account</div>
          </q-card-section>
        </q-card>
      </q-card-section>

      <q-card-section>
        <q-input v-model="email" label="Email" dense class="q-mb-md">
          <template v-slot:prepend>
            <q-icon name="fal fa-at" size="16px"/>
          </template>
        </q-input>

        <q-input v-model="password" label="Password" type="password" dense v-on:keyup.enter="login">
          <template v-slot:prepend>
            <q-icon name="fal fa-lock-alt" size="16px"/>
          </template>
        </q-input>

        <q-btn
          class="full-width q-mt-lg"
          color="primary"
          label="LOGIN"
          outline
          @click="login"
          :loading="loading"
        />
      </q-card-section>
    </q-card>

    <div class="text-center q-mt-lg text-small">
      <small>
        <strong>Company Name</strong> - Generic Company Description
      </small>
    </div>
  </div>
</template>


<script>
import { notify } from "../helpers/notify";
import { login } from "../services/auth.service";

export default {
  name: "LoginPage",

  data() {
    return {
      email: "",
      password: "",
      loading: false
    };
  },

  methods: {
    async login() {
      if (!this.email || !this.password) {
        console.log("Need to provide both email and password");
        notify("Please enter both an email and password", "warning");
        return;
      }

      console.log("Logging user in:", this.email);
      this.loading = true;

      const didLogin = await login(this.email, this.password);
      if (didLogin) {
        this.$router.push("/");
      }
    }
  }
};
</script>


<style lang="stylus" scoped>
.login-card {
  width: 350px;
}

.header-card {
  height: 120px;
  margin-top: -75px;
}

.company-logo {
  margin-bottom: 50px;
}
</style>
