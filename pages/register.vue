<template>
  <h1>Register</h1>

  <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="submitForm">
    <UFormGroup label="First Name" name="firstName">
      <UInput v-model="state.firstName" />
    </UFormGroup>
    <UFormGroup label="Last Name" name="lastName">
      <UInput v-model="state.lastName" />
    </UFormGroup>
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
const router = useRouter();
const supabase = useSupabaseClient();

const form = ref();
const schema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(10, { message: 'Password must be at least 10 characters.' }),
  })
  .superRefine(({ password }, checkPassComplexity) => {
    const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
    const containsLowercase = (ch: string) => /[a-z]/.test(ch);
    const containsSpecialChar = (ch: string) => /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
    let countOfUpperCase = 0,
      countOfLowerCase = 0,
      countOfNumbers = 0,
      countOfSpecialChar = 0;
    for (let i = 0; i < password.length; i++) {
      let ch = password.charAt(i);
      if (!isNaN(+ch)) countOfNumbers++;
      else if (containsUppercase(ch)) countOfUpperCase++;
      else if (containsLowercase(ch)) countOfLowerCase++;
      else if (containsSpecialChar(ch)) countOfSpecialChar++;
    }
    if (countOfLowerCase < 1 || countOfUpperCase < 1 || countOfSpecialChar < 1 || countOfNumbers < 1) {
      checkPassComplexity.addIssue({
        code: 'custom',
        message: 'Password must include uppercase letters, lowercase letters, digits, and symbols.',
      });
    }
  });

type Schema = z.output<typeof schema>;

const state = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
});

async function submitForm(event: FormSubmitEvent<Schema>) {
  const { data, error } = await supabase.auth.signUp({
    email: event.data.email,
    password: event.data.password,
    options: {
      data: {
        firstName: event.data.firstName,
        lastName: event.data.lastName,
      },
    },
  });

  if (error) {
    form.value.setErrors(error);
  }

  const { session, user } = data;
  auth.setAuthData(session);
  auth.setUserData(user);

  router.push('/dashboard');
}
</script>
