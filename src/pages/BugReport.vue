<template>
  <div class="page">
    <div class="title">
      <h1>Report a bug</h1>
    </div>

    <div class="bug-desc-container">
      <div class="bug-desc-title">
        <h2>Bug description</h2>
      </div>
      <textarea class="bug-desc" ref="desc"></textarea>
      <div class="submit" @click="send" :class="{ disabled: reported }">
        <h2>Send bug report</h2>
      </div>
      <div class="reported" v-if="reported">
        <h3>
          Thank you for reporting a bug! We'll fix it as soon as possible.
        </h3>
        <h3>Redirecting to next launch page in {{ redirectTime }}.</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reported: false,
      redirectTime: 0,
    };
  },
  mounted() {
    this.$refs.desc.focus();
  },
  methods: {
    send() {
      if (!this.reported) {
        this.$refs.desc.value = '';
        this.reported = true;
        this.redirectTime = 5;
        const started = Date.now();
        const timer = setInterval(() => {
          this.redirectTime = Math.ceil(5 - (Date.now() - started) / 1000);
        }, 1000);
        setTimeout(() => {
          this.reported = false;
          clearInterval(timer);
          this.$router.push('/');
        }, 5000);
      }
    },
  },
};
</script>

<style scoped>
.page {
  position: absolute;
  width: 100%;
  height: 100%;
}
.title {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
}
.bug-desc-title {
  display: flex;
  justify-content: center;
  padding-bottom: 0.7rem;
}
.bug-desc {
  width: calc(100% - 2rem);
  height: 50vh;
  resize: none;
  padding: 0.7rem;
  border-radius: 1rem;
  border: 0.1rem solid aliceblue;
  margin-left: 1rem;
  margin-right: 1rem;
  background: #333333;
  color: aliceblue;
  font-size: 2rem;
}
.submit {
  border-radius: 1rem;
  margin: 1rem;
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  background-color: #333333;
}
.submit:active {
  padding: calc(0.2rem - 2px);
  border: 2px solid aliceblue;
}
.reported {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.disabled {
  cursor: no-drop;
}
.disabled:hover {
  padding: 0.2rem;
  border: none;
}
@media screen and (max-width: 600px) {
  .page {
    padding: 0 0 5rem 0;
  }
}
@media screen and (min-width: 600px) {
  .page {
    padding: 0 0 0 5rem;
  }
}
</style>
