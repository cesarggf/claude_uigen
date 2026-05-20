# Authentication System

## Authentication Flow

**Session Management ([@src/lib/auth.ts](file:///Users/cguzman/workspaceBench/claude_uigen/src/lib/auth.ts))**
- Uses JWT tokens stored in httpOnly cookies
- Tokens signed with `JWT_SECRET` (7-day expiration)
- Provides `createSession`, `getSession`, `deleteSession`, and `verifySession` functions

**User Interaction ([@src/components/auth/AuthDialog.tsx](file:///Users/cguzman/workspaceBench/claude_uigen/src/components/auth/AuthDialog.tsx))**
- Dialog component that toggles between sign-in and sign-up forms
- On successful auth, closes the dialog via `handleSuccess()`
- Redirects to most recent project (or creates new one if none exist)

**Post-Auth Logic ([@src/hooks/use-auth.ts](file:///Users/cguzman/workspaceBench/claude_uigen/src/hooks/use-auth.ts))**
- `signIn()` / `signUp()` call the respective actions
- After successful auth, `handlePostSignIn()` runs:
  1. Checks for anonymous work saved during unauthenticated session
  2. If anonymous work exists, creates a project with that data
  3. Otherwise, redirects to most recent project
  4. If no projects exist, creates a default "New Design" project

## Architecture

```
Auth Dialog → Form Submission → Actions (signInAction/signUpAction) 
    ↓
JWT Cookie Set 
    ↓
useAuth Hook → handlePostSignIn()
    ↓
→ Use anonymous work OR find most recent project OR create new project
    ↓
Router Redirect
```

The key feature is that anonymous work is captured during unauthenticated sessions and automatically converted to a project once the user signs in.
