<template>
  <FormContainer :errors="errors" @on-submit="handleRegister">
    <template #title>Sign Up</template>
    <template #link>
      <nuxt-link to="/login"> Have an account?</nuxt-link>
    </template>
    <template #form-group>
      <fieldset class="form-group">
        <input
          v-model="userName"
          type="text"
          class="form-control form-control-lg"
          placeholder="Username"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
          v-model="email"
          type="email"
          class="form-control form-control-lg"
          placeholder="Email"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
          v-model="password"
          type="password"
          class="form-control form-control-lg"
          placeholder="Password"
        />
      </fieldset>
    </template>
    <template #submit-button>Sign Up</template>
  </FormContainer>
</template>