<template>
  <h1>Login or Register</h1>

  <UForm :schema="schema" :state="state" class="space-y-4" @submit="submitForm">
    <UFormGroup label="Email" name="email" required description="We'll send a magic link to log you in.">
      <UInput v-model="state.email" />
    </UFormGroup>
    <UFormGroup label="Captcha validation" name="captcha">
      <template #label>
        <span class="hidden">Captcha validation</span>
      </template>
      <UInput v-model="state.captchaToken" class="hidden" />
      <vue-hcaptcha
        sitekey="baf3230d-71a9-4306-a5c8-0a5c47e2dbc7"
        :theme="colorMode.value"
        @verify="onVerify"
        @error="onError"
      />
    </UFormGroup>
    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
import type { FormSubmitEvent } from '#ui/types';
import { object, string, type InferType } from 'yup';

const colorMode = useColorMode();

const schema = object({
  email: string().email('Invalid email').required('Required'),
  captchaToken: string().required('Required'),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: '',
  captchaToken: '',
});

const user = useUserStore();

async function submitForm(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
  // await user.login({ email: event.data.email, captchaToken: event.data.captchaToken });
}

const captchaError = ref('');

function onVerify(tokenStr: string) {
  state.captchaToken = tokenStr;
}

function onError(err: string) {
  state.captchaToken = '';
  captchaError.value = err;
}
</script>
