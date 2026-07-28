"use client"

import { useState } from "react"

type ImageUploadFieldProps = {
  name: string
  label?: string
  defaultValue?: string
  required?: boolean
  className?: string
}

export default function ImageUploadField({
  name,
  label = "Image",
  defaultValue = "",
  required = false,
  className = "",
}: ImageUploadFieldProps) {
  const [value, setValue] = useState(defaultValue)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState("")

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError("")

    const body = new FormData()
    body.append("file", file)

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Upload failed")
      }

      setValue(data.url)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setUploading(false)
      event.target.value = ""
    }
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required ? <span className="text-red-500"> *</span> : null}
        </label>
        {value ? (
          <button
            type="button"
            onClick={() => setValue("")}
            className="text-xs font-medium text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        ) : null}
      </div>

      <input type="hidden" name={name} value={value} required={required} />

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-center transition hover:border-blue-400 hover:bg-blue-50 dark:border-gray-600 dark:bg-gray-700/40 dark:hover:border-blue-500">
        <input
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/webp,image/gif"
          onChange={handleUpload}
          className="hidden"
          disabled={uploading}
        />
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          {uploading ? "Uploading..." : "Click to upload image"}
        </span>
        <span className="mt-1 text-xs text-gray-500">
          JPG, PNG, WEBP, or GIF up to 5MB
        </span>
      </label>

      {error ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : null}

      {value ? (
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
          <img
            src={value}
            alt="Uploaded preview"
            className="h-40 w-full object-cover"
          />
        </div>
      ) : (
        <p className="text-xs text-gray-500">No image selected yet.</p>
      )}
    </div>
  )
}
