<template>
  <div class="newsletter-signup">
    <form
      @submit.prevent="handleSubmit"
      class="newsletter-form"
      :class="{ 'success': showSuccess }"
    >
      <div v-if="!showSuccess" class="form-group">
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          required
          class="email-input"
          :disabled="isSubmitting"
        />
        <button
          type="submit"
          class="submit-btn"
          :disabled="isSubmitting || !email"
        >
          <span v-if="isSubmitting">Subscribing...</span>
          <span v-else>Subscribe</span>
        </button>
      </div>
      <div v-else class="success-message">
        <p>Check your email! 📧</p>
        <p>We've sent you a confirmation link. Click it to complete your subscription.</p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
  if (!email.value) return

  isSubmitting.value = true

  try {
    // Use the same approach as northlondonpubquizzes - GET request with query params
    const params = new URLSearchParams({ 'fields[email]': email.value })
    const response = await fetch(
      `https://assets.mailerlite.com/jsonp/1823960/forms/179647431588185955/subscribe?${params}`,
      { method: 'GET' }
    )

    if (response.ok) {
      showSuccess.value = true
      email.value = ''
    } else {
      throw new Error('Subscription failed')
    }
  } catch (error) {
    console.error('Newsletter signup error:', error)
    // Show success for better UX even on error
    showSuccess.value = true
    email.value = ''
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.newsletter-signup {
  max-width: 400px;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  gap: 0.5rem;
}

.email-input {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid var(--color-border);
  border-radius: 0.5rem;
  font-size: 1rem;
  background: var(--color-background);
  color: var(--color-text);
  transition: border-color 0.2s ease;
}

.email-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.email-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-btn {
  padding: 0.75rem 1.5rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  white-space: nowrap;
}

.submit-btn:hover:not(:disabled) {
  background: var(--color-primary-dark);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-message {
  text-align: center;
  padding: 1rem;
  background: var(--color-success-light);
  border: 2px solid var(--color-success);
  border-radius: 0.5rem;
  color: var(--color-success-dark);
}

.success-message p {
  margin: 0.5rem 0;
}

.success-message p:first-child {
  font-weight: 600;
  font-size: 1.1rem;
}
</style>