"use client"

import { useActionState, useMemo, useState } from "react"
import { createAdminUser, type CreateAdminUserState } from "@/app/admin/(dashboard)/users/actions"

const initialState: CreateAdminUserState = {}

function generatePassword(length = 12) {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*"
  const values = crypto.getRandomValues(new Uint32Array(length))

  return Array.from(values, (value) => alphabet[value % alphabet.length]).join("")
}

export default function CreateAdminUserForm() {
  const [state, formAction, pending] = useActionState(createAdminUser, initialState)
  const [password, setPassword] = useState(() => generatePassword())
  const hint = useMemo(
    () => "Create a login here, then copy the email and password and share them once.",
    []
  )

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Create Admin Login</h2>
      <p className="mt-2 text-sm text-gray-500">{hint}</p>

      <form action={formAction} className="mt-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            className="mt-2 w-full rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            placeholder="School Admin"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email / Login ID</label>
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            placeholder="editor@school.com"
          />
        </div>

        <div>
          <div className="flex items-center justify-between gap-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <button
              type="button"
              onClick={() => setPassword(generatePassword())}
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Generate New Password
            </button>
          </div>
          <input
            type="text"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-2 w-full rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          <p className="mt-2 text-xs text-gray-500">
            This password is shown only here before you submit it. After creation it is stored securely as a hash.
          </p>
        </div>

        {state.error && (
          <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {state.error}
          </div>
        )}

        {state.success && (
          <div className="rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-700">
            {state.success}
          </div>
        )}

        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {pending ? "Creating Login..." : "Create Admin Login"}
        </button>
      </form>
    </div>
  )
}
