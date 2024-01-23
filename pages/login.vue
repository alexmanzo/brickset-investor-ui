<template>
  <h1>Login</h1>

  <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="submitForm">
    <UFormGroup label="Email" name="email" required>
      <UInput v-model="state.email" />
    </UFormGroup>
    <UFormGroup label="Password" name="password" required>
      <UInput v-model="state.password" type="password" />
    </UFormGroup>
    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import { z } from 'zod';

const auth = useAuthStore();
const supabase = useSupabaseClient();
const router = useRouter();

const form = ref();
const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});
type Schema = z.output<typeof schema>;
const state = reactive({
  email: '',
  password: '',
});

async function submitForm(event: FormSubmitEvent<Schema>) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: event.data.email,
    password: event.data.password,
  });

  if (error) {
    form.value.setErrors([
      {path: 'email', message: error.message},
      {path: 'password', message: error.message},
    ])
  }

  const { session, user } = data;
  auth.setAuthData(session);
  auth.setUserData(user);

  router.push('/dashboard');
}
</script>
