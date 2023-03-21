<template>
  <button type="button" class="common__button"><slot></slot></button>
</template>

<style lang="scss">
.common__button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 276px;
  height: 40px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.19;
  color: #000000cc;
  background-color: #ffffff;
  border: 2px solid #4b99f5;
  border-radius: 24px;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;

  &:hover {
    color: #ffffff;
    background-color: #4b99f5;
  }
}
</style>
