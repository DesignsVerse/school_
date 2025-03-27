"use client";

import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: null as Date | null,
    gender: "",
    classApplyingFor: "",
    mobileNumber: "",
    email: "",
    address: "",
    fatherName: "",
    fatherMobile: "",
    motherName: "",
    motherMobile: "",
    enquirySource: "",
    scholarNo: "",
    guardianName: "",
    guardianContact: "",
    undertaking: "",
    boarding: "",
    interactionDate: null as Date | null,
    remarks: "",
    documents: {} as { [key: string]: File | null },
    photos: {
      student: null as File | null,
      father: null as File | null,
      mother: null as File | null,
    },
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle date change
  const handleDateChange = (date: Date | null, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: date }));
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0] || null;
    if (field.startsWith("add_checklist_doc_")) {
      const docId = field.replace("add_checklist_doc_", "");
      setFormData((prev) => ({
        ...prev,
        documents: { ...prev.documents, [docId]: file },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        photos: { ...prev.photos, [field]: file },
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName) newErrors.firstName = "This field is required";
    if (!formData.lastName) newErrors.lastName = "This field is required";
    if (!formData.dob) newErrors.dob = "This field is required";
    if (!formData.gender) newErrors.gender = "This field is required";
    if (!formData.classApplyingFor) newErrors.classApplyingFor = "This field is required";
    if (!formData.mobileNumber) newErrors.mobileNumber = "This field is required";
    if (!formData.email) newErrors.email = "This field is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.address) newErrors.address = "This field is required";
    if (!formData.fatherName) newErrors.fatherName = "This field is required";
    if (!formData.fatherMobile) newErrors.fatherMobile = "This field is required";
    if (!formData.motherName) newErrors.motherName = "This field is required";
    if (!formData.motherMobile) newErrors.motherMobile = "This field is required";
    if (!formData.undertaking) newErrors.undertaking = "This field is required";
    if (!formData.documents["1"]) newErrors.photoChild = "Photo of Child is required";
    if (!formData.documents["2"]) newErrors.aadhaarChild = "Child's Aadhaar is required";
    if (!formData.documents["3"]) newErrors.birthCert = "Birth Certificate is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData); // Replace with API call
      alert("Form submitted successfully!");
    } else {
      alert("Please fill all required fields correctly.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 font-[Verdana]">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="bg-[#005670] text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/logo/logo.png" // Replace with your logo
              alt="School Logo"
              width={80}
              height={80}
              className="w-auto h-20"
            />
            <h1 className="text-xl font-bold ml-4">Online Admission Enquiry</h1>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white p-6 shadow-md">
          <form id="form1" onSubmit={handleSubmit} className="space-y-6">
            {/* Student Details */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                First Name <span className="text-red-600">*</span>
              </div>
              <div className="lg:col-span-3">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                />
                {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Last Name <span className="text-red-600">*</span>
              </div>
              <div className="lg:col-span-3">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                />
                {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Date of Birth <span className="text-red-600">*</span>
              </div>
              <div className="lg:col-span-3">
                <DatePicker
                  selected={formData.dob}
                  onChange={(date) => handleDateChange(date, "dob")}
                  dateFormat="dd-MM-yyyy"
                  className="w-full p-2 border border-[#ccc] text-sm"
                  maxDate={new Date()}
                  showYearDropdown
                  yearDropdownItemNumber={100}
                  scrollableYearDropdown
                />
                {errors.dob && <p className="text-red-600 text-sm">{errors.dob}</p>}
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Gender <span className="text-red-600">*</span>
              </div>
              <div className="lg:col-span-3">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                >
                  <option value="">--- Select ---</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
                {errors.gender && <p className="text-red-600 text-sm">{errors.gender}</p>}
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Class Applying For <span className="text-red-600">*</span>
              </div>
              <div className="lg:col-span-3">
                <select
                  name="classApplyingFor"
                  value={formData.classApplyingFor}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                >
                  <option value="">--- Select ---</option>
                  {["Nursery", "KG-I", "KG-II", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"].map(
                    (cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    )
                  )}
                </select>
                {errors.classApplyingFor && (
                  <p className="text-red-600 text-sm">{errors.classApplyingFor}</p>
                )}
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Mobile Number <span className="text-red-600">*</span>
              </div>
              <div className="lg:col-span-3">
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                />
                {errors.mobileNumber && (
                  <p className="text-red-600 text-sm">{errors.mobileNumber}</p>
                )}
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Email Id <span className="text-red-600">*</span>
              </div>
              <div className="lg:col-span-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Address <span className="text-red-600">*</span>
              </div>
              <div className="lg:col-span-3">
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                  rows={3}
                />
                {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Father's Name <span className="text-red-600">*</span>
              </div>
              <div className="lg:col-span-3">
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                />
                {errors.fatherName && (
                  <p className="text-red-600 text-sm">{errors.fatherName}</p>
                )}
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Father's Mobile Number <span className="text-red-600">*</span>
              </div>
              <div className="lg:col-span-3">
                <input
                  type="tel"
                  name="fatherMobile"
                  value={formData.fatherMobile}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                />
                {errors.fatherMobile && (
                  <p className="text-red-600 text-sm">{errors.fatherMobile}</p>
                )}
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Mother's Name <span className="text-red-600">*</span>
              </div>
              <div className="lg:col-span-3">
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                />
                {errors.motherName && (
                  <p className="text-red-600 text-sm">{errors.motherName}</p>
                )}
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Mother's Mobile Number <span className="text-red-600">*</span>
              </div>
              <div className="lg:col-span-3">
                <input
                  type="tel"
                  name="motherMobile"
                  value={formData.motherMobile}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                />
                {errors.motherMobile && (
                  <p className="text-red-600 text-sm">{errors.motherMobile}</p>
                )}
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Source of Enquiry
              </div>
              <div className="lg:col-span-3">
                <select
                  name="enquirySource"
                  value={formData.enquirySource}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                >
                  <option value="">--- Select ---</option>
                  <option value="Newspaper">Newspaper</option>
                  <option value="Website">Website</option>
                  <option value="Friend">Friend</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                If student is Ex. Dipsite from DPS Indore, kindly mention the Scholar No.
              </div>
              <div className="lg:col-span-3">
                <input
                  type="text"
                  name="scholarNo"
                  value={formData.scholarNo}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                />
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Guardian Name
              </div>
              <div className="lg:col-span-3">
                <input
                  type="text"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                />
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Contact No.
              </div>
              <div className="lg:col-span-3">
                <input
                  type="tel"
                  name="guardianContact"
                  value={formData.guardianContact}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                />
              </div>
            </div>

            {/* Undertaking Agreement */}
            <div>
              <div className="text-[#2e5b87] text-[14px] pt-10 text-left font-bold">
                Undertaking Agreement
              </div>
              <hr className="style-three" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                I agree to the below mentioned undertaking <span className="text-red-600">*</span>
              </div>
              <div className="lg:col-span-3">
                <select
                  name="undertaking"
                  value={formData.undertaking}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#ccc] text-sm"
                >
                  <option value="">--- Select ---</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.undertaking && (
                  <p className="text-red-600 text-sm">{errors.undertaking}</p>
                )}
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Day Boarder/ Hosteller (BOYS ONLY)
              </div>
              <div className="lg:col-span-3 flex flex-col lg:flex-row gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="boarding"
                    value="Day Boarder"
                    checked={formData.boarding === "Day Boarder"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Day Boarder
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="boarding"
                    value="Hosteller (Boys Only)"
                    checked={formData.boarding === "Hosteller (Boys Only)"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Hosteller (Boys Only)
                </label>
              </div>

              <div className="lg:col-span-1 text-sm font-bold text-gray-700 pt-2 text-left lg:text-right">
                Interaction Scheduled on
              </div>
              <div className="lg:col-span-3">
                <DatePicker
                  selected={formData.interactionDate}
                  onChange={(date) => handleDateChange(date, "interactionDate")}
                  dateFormat="dd-MM-yyyy"
                  className="w-full p-2 border border-[#ccc] text-sm"
                  readOnly
                />
              </div>
            </div>

            {/* Upload Documents */}
            <div>
              <div className="text-[#2e5b87] text-[14px] pt-10 text-left font-bold">
                UPLOAD DOCUMENTS
              </div>
              <hr className="style-three" />
              <div className="pl-12 pt-4 space-y-6">
                {[
                  { id: "1", label: "Photo of Child", required: true },
                  { id: "2", label: "Child's Aadhaar card", required: true },
                  { id: "3", label: "Birth Certificate", required: true },
                  { id: "4", label: "Certificate(s) for proficiency in Games, Co-curricular/outstanding achievements. (If any)" },
                  { id: "5", label: "Mother's Aadhaar Card" },
                  { id: "6", label: "Father's Aadhaar Card" },
                  { id: "7", label: "SSSM ID" },
                  { id: "8", label: "Address Proof" },
                  { id: "9", label: "Father's ID Proof (Driving License/ Passport/ Voter ID/ Pan Card)" },
                  { id: "10", label: "Previous Year's Marksheet" },
                  { id: "11", label: "Fitness Certificate" },
                  { id: "12", label: "Mother's ID Proof (Driving License/ Passport/ Voter ID/ Pan Card)" },
                  { id: "13", label: "Caste Certificate" },
                ].map((doc) => (
                  <div key={doc.id}>
                    <div className="text-sm font-bold">
                      {doc.label} {doc.required && <span className="text-red-600">*</span>}
                    </div>
                    <input
                      type="file"
                      name={`add_checklist_doc_${doc.id}`}
                      onChange={(e) => handleFileChange(e, `add_checklist_doc_${doc.id}`)}
                      className="w-full p-2 text-sm"
                    />
                    {doc.required && errors[doc.label.split(" ")[0].toLowerCase()] && (
                      <p className="text-red-600 text-sm">{errors[doc.label.split(" ")[0].toLowerCase()]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Upload Photo */}
            <div>
              <div className="text-[#2e5b87] text-[14px] pt-10 text-left font-bold">
                Upload Photo
              </div>
              <hr className="style-three" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-4">
                {["Student", "Father", "Mother"].map((type) => (
                  <div key={type} className="text-center">
                    <div className="text-sm font-bold pb-2">{type}</div>
                    <div className="mb-2">
                      <img
                        height={170}
                        width={160}
                        src={formData.photos[type.toLowerCase()] ? URL.createObjectURL(formData.photos[type.toLowerCase()]!) : ""}
                        alt={`${type} Photo`}
                        className="mx-auto"
                      />
                    </div>
                    <div className="text-sm">
                      <a href="#" className="text-blue-600">
                        Click Photo
                      </a>{" "}
                      or{" "}
                      <input
                        type="file"
                        name={`${type.toLowerCase()}Photo`}
                        onChange={(e) => handleFileChange(e, type.toLowerCase())}
                        className="w-40 text-sm"
                      />
                    </div>
                    <div className="text-sm mt-2">
                      <a
                        href="#"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            photos: { ...prev.photos, [type.toLowerCase()]: null },
                          }))
                        }
                        className="text-blue-600"
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Undertaking */}
            <div>
              <div className="text-[#2e5b87] text-[14px] pt-10 text-left font-bold">
                Undertaking
              </div>
              <hr className="style-three" />
              <div className="text-sm pl-8 pt-4">
                <p><strong>UNDERTAKING/DECLARATION:</strong></p>
                <ul className="list-disc pl-5">
                  <li>I fully understand that the school, on accepting the registration of my ward, is not in any way bound to grant admission. I also understand that the decision of the school authorities regarding admission will be final and binding on me.</li>
                  <li>I fully understand that Delhi Public School, Indore has the right to offer admission based on vacancy of seats.</li>
                  <li>I hereby certify that the Date of Birth and spelling of name of my ward given in this form are true and correct and I shall not make any request for change.</li>
                  <li>I undertake that the information / documents submitted in this form are true and correct and not misleading and no relevant information has been concealed. I understand that false or misleading information or withholding correct information may disqualify my ward for admission/education at this school.</li>
                </ul>
                <p className="mt-4"><strong>INSTRUCTIONS:</strong></p>
                <ul className="list-disc pl-5">
                  <li>Registration once completed for a particular year is <strong>non-transferable</strong> to any other year or to any other child.</li>
                  <li>Issue of Registration Form does not Guarantee Admission.</li>
                  <li>Please attach attested copy of Municipal Birth Certificate.</li>
                  <li>Please attach copy of the attested Mark Sheet of previous class examination.</li>
                  <li>Attach copy of certificates for proficiency in Games, Co-curricular / outstanding achievements. (If any)</li>
                  <li>Incomplete registration form will not be accepted. It is mandatory to attach all enclosures as stated above.</li>
                </ul>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-10">
              <input
                type="submit"
                value="Submit Form"
                className="bg-[#005670] text-white px-10 py-2 text-sm hover:bg-[#003d52] cursor-pointer"
              />
            </div>

            {/* Footer */}
            <div className="text-center text-sm mt-4">
              Powered by <a href="https://schoolpad.in/" target="_blank" className="text-blue-600">SchoolPad</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;