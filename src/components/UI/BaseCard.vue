<template>
  <div class="container">
    <div class="card">
      <div class="title">
        <div>
          <slot name="title"></slot>
        </div>
        <div class="right-title">
          <slot name="title-right"></slot>
        </div>
      </div>
      <div class="subtitle">
        <slot name="subtitle"></slot>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  padding: 1rem;
  height: 100%;
}
.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #252526;
  height: 100%;
  border-radius: 1rem;
}
.title {
  display: flex;
  justify-content: space-between;
  margin: 0 0 0.5rem 0;
  font-size: 1.4rem;
}
.right-title {
  margin-right: 1rem;
}
.subtitle {
  margin: 0 0 1rem 0;
  color: gray;
}
.content {
  overflow-wrap: break-word;
}
</style>
