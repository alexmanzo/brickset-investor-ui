<template>
  <div>
    <h1>Signed Out</h1>
  </div>
</template>

<script setup lang="ts">
const auth = useAuthStore();
const supabase = useSupabaseClient();

const signOut = async () => {
  await supabase.auth.signOut();
  auth.reset();
};

signOut();
</script>
