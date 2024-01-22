<template>
  <form @submit.prevent="submitOTP">
    <label for="otp">Enter OTP:</label>
    <input v-model="otp" type="text" id="otp" />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const otp = ref('');

const submitOTP = () => {
  // Handle OTP submission logic here
  console.log('OTP:', otp.value);
};
</script>
