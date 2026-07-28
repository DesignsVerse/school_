import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  const body = await request.json()

  const requiredFields = [
    "firstName",
    "lastName",
    "gender",
    "classApplyingFor",
    "mobileNumber",
    "email",
    "address",
    "fatherName",
    "fatherMobile",
    "motherName",
    "motherMobile",
  ]

  for (const field of requiredFields) {
    if (!body[field]) {
      return Response.json({ error: `${field} is required` }, { status: 400 })
    }
  }

  const enquiry = await prisma.admissionEnquiry.create({
    data: {
      firstName: body.firstName,
      lastName: body.lastName,
      dob: body.dob ? new Date(body.dob) : null,
      gender: body.gender,
      classApplyingFor: body.classApplyingFor,
      mobileNumber: body.mobileNumber,
      email: body.email,
      address: body.address,
      fatherName: body.fatherName,
      fatherMobile: body.fatherMobile,
      motherName: body.motherName,
      motherMobile: body.motherMobile,
      enquirySource: body.enquirySource || null,
      scholarNo: body.scholarNo || null,
      guardianName: body.guardianName || null,
      guardianContact: body.guardianContact || null,
      boarding: body.boarding || null,
      interactionDate: body.interactionDate ? new Date(body.interactionDate) : null,
      remarks: body.remarks || null,
      undertaking: body.undertaking === "Yes",
      documentNames: Array.isArray(body.documentNames) ? body.documentNames : [],
      photoNames: Array.isArray(body.photoNames) ? body.photoNames : [],
    },
  })

  return Response.json({ id: enquiry.id, success: true })
}
