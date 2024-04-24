<template>
    <div class="card">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </template>
  
  <style lang="scss">
  .card {
    header {
      background-color: #b1c0d0;
      padding: 10px;
      color: #fff;
    }
  }
  </style>
  