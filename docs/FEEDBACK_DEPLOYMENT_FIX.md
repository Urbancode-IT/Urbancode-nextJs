# Feedback Form – Live Deployment Errors (CORS & 500)

## What’s going wrong

After going live you see:

1. **CORS** – Browser blocks requests from `https://www.urbancode.in` to `https://feedback-uc-urbancode.onrender.com` because the backend does not send `Access-Control-Allow-Origin`.
2. **500 Internal Server Error** – The backend endpoints `/api/questions` and `/api/trainers/active` return 500 (often DB connection or env/config on Render).

So both **backend CORS** and **backend 500** must be fixed for the form to work when the frontend calls the Render API directly.

---

## Option 1: Fix the backend on Render (recommended if you control it)

### 1. Fix CORS

On the **feedback backend** (the app deployed at `feedback-uc-urbancode.onrender.com`):

- Allow your frontend origins, for example:
  - `https://www.urbancode.in`
  - `https://urbancode.in`
- Send headers:
  - `Access-Control-Allow-Origin: https://www.urbancode.in` (or your frontend origin)
  - Or use a CORS library (e.g. `cors` in Express) and allow these origins.

Example with Express:

```js
const cors = require('cors');
app.use(cors({
  origin: ['https://www.urbancode.in', 'https://urbancode.in'],
  credentials: true
}));
```

### 2. Fix 500 errors

- In **Render Dashboard** → your feedback service → **Logs**, check the stack trace for `/api/questions` and `/api/trainers/active`.
- Typical causes:
  - **MongoDB**: Wrong or missing `MONGODB_URI` in Render **Environment**.
  - **Env**: Any env var the backend needs (DB, API keys) must be set in Render.
  - **Cold start**: Render free tier spins down; first request can be slow or fail. Increase timeout on the frontend (already 30s in this project) and consider upgrading if needed.

After CORS and 500 are fixed, the current frontend (calling the Render URL directly) will work without any frontend change.

---

## Option 2: Use Next.js as a proxy (no CORS from browser to Render)

So the **browser only talks to your own domain** (same-origin). The Next.js server then calls the Render backend. CORS is not needed for the browser→Next.js request.

**Important:** This only works if the Next.js app runs with a **server** (e.g. Vercel, Node server). It does **not** work with a purely static export (`output: 'export'`) because there are no API routes in that build.

### Steps

1. **Deploy with a server**  
   For example deploy to **Vercel** (default runs a server).  
   If you keep `output: 'export'` for a static host, the proxy routes are **not** used there.

2. **Use the proxy for the feedback form**  
   Set in your host’s environment (e.g. Vercel):

   - `NEXT_PUBLIC_FEEDBACK_API_URL=`  
     (empty string)

   Then the feedback **form** will call your own API routes:

   - `/api/feedback/questions`
   - `/api/feedback/trainers/active`
   - `/api/feedback/responses`

   Those routes (in this repo) proxy to `https://feedback-uc-urbancode.onrender.com`, so the browser never hits Render directly and CORS is avoided.

3. **Backend URL**  
   Optional: set `FEEDBACK_API_URL` on the **server** (e.g. in Vercel env) if the backend URL is different. Default is `https://feedback-uc-urbancode.onrender.com`.

4. **500 from Render**  
   If the backend still returns 500, the proxy will return 502/errors to the client. You still need to fix the backend (DB, env, etc.) as in Option 1.

---

## Summary

| Issue   | Cause                          | Fix |
|--------|---------------------------------|-----|
| CORS   | Backend not allowing your origin | Option 1: Add CORS on Render backend. Option 2: Use Next.js proxy and deploy with a server. |
| 500    | Backend error (DB/env/code)     | Fix backend (env vars, MongoDB, logs on Render). |

**If you stay on static export (e.g. current host):** you must fix **both** CORS and 500 on the **Render backend**.  
**If you switch to a server deploy (e.g. Vercel):** set `NEXT_PUBLIC_FEEDBACK_API_URL=''` and fix the **500** on the backend so the proxy can succeed.
