<template>
  <div id="login">
    <el-container class="login">
      <el-row class="login-row">
        <el-col :span="12" class="login-content">
          <div class="login-content-box">
            <div class="login-title">
              <h1>Charlar Platform!</h1>
              <h3>Your customer services planet</h3>
            </div>

            <el-form class="form" height="500">
              <el-form-item class="form-group" label="Número de teléfono">
                <el-input
                  size="large"
                  type="email"
                  v-model="this.login.email"
                  aria-required="true"
                  placeholder="enter your email"
                >
                  <template #prefix>
                    <el-icon size="100">
                      <Phone />
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>

              <el-form-item class="form-group" label="Password">
                <el-input
                  size="large"
                  :type="passwordFieldType"
                  v-model="this.login.password"
                  placeholder="Enter the password"
                >
                  <template #prefix>
                    <el-icon size="100">
                      <Lock />
                    </el-icon>
                  </template>
                  <template #suffix>
                    <div class="checkPassword" @click="isHideClick">
                      <el-icon size="100" v-if="!isHide">
                        <View />
                      </el-icon>
                      <el-icon size="100" v-else>
                        <Hide />
                      </el-icon>
                    </div>
                  </template>
                </el-input>
              </el-form-item>
              <el-row justify="space-between">
                <el-checkbox v-model="this.login.rememberMe"
                >Remember me!
                </el-checkbox
                >
                <el-link href="#forget" :underline="false"
                >Forget password ?
                </el-link>
              </el-row>
              <el-button @click="submitLogin" size="large" class="login-btn"
              >Login
              </el-button>
            </el-form>
          </div>
        </el-col>
        <el-col :span="12" class="login-img">
          <div class="logo-title">
            <el-image
              class="logo-img"
              width="50"
              :src="require('@/assets/logo-blue.svg')"
            ></el-image>
            <h2>Charlar</h2>
          </div>
          <div class="logo-bg">
            <el-image :src="require('@/assets/chat-welcome.svg')"></el-image>
          </div>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import { Lock, Phone, Hide, View } from "@element-plus/icons-vue";
import Cookies from "js-cookie";

export default {
  name: "index",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Lock,
    Phone,
    Hide,
    View
  },
  data() {
    return {
      login: {
        email: "",
        password: "",
        rememberMe: false
      },
      isHide: false,
      passwordFieldType: "password"
    };
  },
  created() {
    this.getCookies();
  },
  methods: {
    isHideClick() {
      this.isHide = !this.isHide;
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    getAlertError() {
      this.$notify({
        message: "Error",
        duration: 2000,
        type: "error"
      })
    },
    submitLogin() {
      if (
        this.login.email === "ali@gmail.com" &&
        this.login.password === "123456"
      ) {
        this.$router.push("/dashboard");
      } else {
        this.getAlertError();
      }
    },
    getCookies() {
      const userEmail = Cookies.get("email");
      const password = Cookies.get("password");
      const rememberMe = Cookies.get("rememberMe");

      this.login = {
        email: userEmail === undefined ? this.login.email : userEmail,
        password: password === undefined ? this.login.password : password,
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      };
    }
  }
};
</script>

<style scoped lang="stylus">
@import "./index.scoped.styl"
</style>

<style lang="stylus">
.el-input__suffix
  cursor pointer

.checkPassword
  display flex

.el-form-item__label
  font-weight 600

.el-input__wrapper
  background-color #EDF2F4
</style>
