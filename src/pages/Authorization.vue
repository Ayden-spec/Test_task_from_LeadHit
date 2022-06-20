<template>
  <div class="container">
    <div class="logo">
      <h1 class="Lead">Lead</h1>
      <h1 class="Hit">Hit</h1>
    </div>
    <form class="form_authorization" @submit.prevent="checkForm" novalidate="true">
      <div>
        <input-component placeholder="ID сайта" @onInput="OnInputSiteId" :value="site_id" class="form_input" />
      </div>

      <div>
        <input-component class="form_button" type="submit" value="Отправить" />
      </div>

      <transition name="error-slide">
        <p class="error" v-if="!!error.length">{{ error }}</p>
      </transition>
    </form>
  </div>
</template>

<script>
import InputComponent from "@/components/Input";
import { signIn } from "@/actions/actions";
export default {
  components: {
    InputComponent,
  },
  data() {
    return {
      error: "",
      site_id: null,
    };
  },
  methods: {
    OnInputSiteId(event) {
      this.error = "";
      this.site_id = event;
    },
    checkForm() {
      if (!this.site_id) {
        this.error = "id сайта должен содержать 24 символа";
        return;
      }
      if (this.site_id.length !== 24) {
        this.error = "id сайта должен содержать 24 символа";
        return;
      }
      signIn(this.site_id, () => {
        this.$router.push("/analytics");
      });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  display: flex;
  align-items: center;
  margin: -20px 0 10px 0;
}

.Lead {
  font-family: Gilroy-ExtraBold;
  color: rgb(197, 129, 2);
}

.Hit {
  font-family: Gilroy-ExtraBold;
  color: rgb(70, 70, 70);
}

.form_authorization {
  border: 3px solid black;
  border-radius: 10px;
  width: 25%;
  background: black;
  position: relative;
}

.form_input {
  color: rgb(75, 75, 75);
  background: white;
  border-radius: 9px 9px 0 0;
}

.form_button {
  color: white;
  cursor: pointer;
}

.error {
  color: rgb(145, 0, 0);
  font-weight: 600;
  position: absolute;
  bottom: -50px;
}

.error-slide-enter-active {
  transition: all 0.3s ease-out;
}

.error-slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.error-slide-enter-from,
.error-slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media (max-width: 1000px) {
  .form_authorization {
    width: 40%;
  }
}

@media (max-width: 480px) {
  .form_authorization {
    width: 70%;
  }
}

@media (max-width: 320px) {
  .form_authorization {
    width: 95%;
  }
}
</style>