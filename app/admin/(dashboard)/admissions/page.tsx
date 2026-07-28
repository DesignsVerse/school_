import { prisma } from "@/lib/prisma"
import { updateAdmissionStatus } from "./actions"
import ConfirmSubmitButton from "@/components/Admin/ConfirmSubmitButton"

export default async function AdmissionsAdminPage() {
  const enquiries = await prisma.admissionEnquiry.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admission Enquiries</h1>
      <p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-300">
        View and track enquiries submitted from the public admission form.
      </p>

      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <p className="text-sm text-gray-500">Total Enquiries</p>
            <p className="mt-2 text-3xl font-bold text-blue-600">{enquiries.length}</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <p className="text-sm text-gray-500">New</p>
            <p className="mt-2 text-3xl font-bold text-amber-500">
              {enquiries.filter((item) => item.status === "new").length}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <p className="text-sm text-gray-500">Contacted</p>
            <p className="mt-2 text-3xl font-bold text-green-600">
              {enquiries.filter((item) => item.status === "contacted").length}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {enquiries.map((item) => (
            <div key={item.id} className="rounded-lg border border-gray-200 p-5 dark:border-gray-700">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.firstName} {item.lastName}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Applied for {item.classApplyingFor} | {item.mobileNumber} | {item.email}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Parents: {item.fatherName} / {item.motherName}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.address}</p>
                  {item.remarks && (
                    <p className="text-sm text-gray-600 dark:text-gray-300">Remarks: {item.remarks}</p>
                  )}
                </div>

                <form action={updateAdmissionStatus.bind(null, item.id)} className="flex items-center gap-3">
                  <select
                    name="status"
                    defaultValue={item.status}
                    className="rounded-md border p-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="admission-in-process">Admission In Process</option>
                    <option value="closed">Closed</option>
                  </select>
                  <ConfirmSubmitButton
                    message="Update this admission enquiry status?"
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Update
                  </ConfirmSubmitButton>
                </form>
              </div>
            </div>
          ))}

          {enquiries.length === 0 && <p className="text-sm text-gray-500">No enquiries submitted yet.</p>}
        </div>
      </div>
    </div>
  )
}
