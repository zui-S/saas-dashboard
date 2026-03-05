# API Reference

This document describes the API endpoints and webhooks.

## API Endpoints

### Authentication

#### Stripe Callback
```
GET /api/auth/callback/stripe
```

Handles Stripe authentication callback.

**Query Parameters:**
- `session_id` - Stripe session ID

**Response:**
- Redirects to dashboard or billing page

---

### Webhooks

#### Stripe Webhook
```
POST /api/webhooks/stripe
```

Handles Stripe webhook events.

**Events Handled:**
- `checkout.session.completed`
- `customer.subscription.updated`
- `customer.subscription.deleted`

**Headers:**
- `stripe-signature` - Stripe signature for verification

**Request Body:**
```json
{
  "type": "checkout.session.completed",
  "data": {
    "object": {
      "id": "cs_test_...",
      "mode": "subscription",
      "metadata": {
        "userId": "user_123",
        "plan": "PRO"
      }
    }
  }
}
```

**Response:**
```json
{
  "received": true
}
```

---

## Server Actions

### Create Checkout Session

```ts
async function createCheckoutSession({
  userId,
  email,
  plan,
  successUrl,
  cancelUrl
})
```

Creates a Stripe checkout session.

**Parameters:**
- `userId` - User ID
- `email` - User email
- `plan` - Plan type (PRO | ENTERPRISE)
- `successUrl` - Redirect URL on success
- `cancelUrl` - Redirect URL on cancel

**Returns:** Stripe session URL

---

### Create Portal Session

```ts
async function createPortalSession({
  customerId,
  returnUrl
})
```

Creates a Stripe customer portal session.

**Parameters:**
- `customerId` - Stripe customer ID
- `returnUrl` - Redirect URL after portal

**Returns:** Portal session URL

---

### Manage Billing

```ts
async function handleManageBilling(formData: FormData)
```

Server Action for billing management.

**Flow:**
1. Get user subscription
2. Create portal session
3. Redirect to Stripe

---

## Error Handling

All API endpoints return consistent error format:

```json
{
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

**Common Error Codes:**
- `UNAUTHORIZED` - User not authenticated
- `INVALID_REQUEST` - Bad request parameters
- `NOT_FOUND` - Resource not found
- `INTERNAL_ERROR` - Server error

---

## Rate Limiting

API endpoints use rate limiting:
- 100 requests per minute per IP
- 1000 requests per hour per user

---

**Contact**: ginoshaw1991@hotmail.com
