"use client";

import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | null, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: date }));
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
    } else {
      alert("Please fill all required fields correctly.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-10 from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Card */}
        <div className="bg-gradient-to-r from-blue-700 to-teal-600 rounded-t-xl shadow-lg overflow-hidden">
          <div className="p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <Image
                  src="/images/logo/logo.png"
                  alt="School Logo"
                  width={80}
                  height={80}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Online Admission Form</h1>
                <p className="text-blue-100">Delhi Public School, Indore</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-sm text-blue-50 font-medium">Academic Year 2023-24</p>
                <p className="text-white font-bold">Admission Open</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-b-xl shadow-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
            {/* Student Details Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-blue-600 rounded-full mr-3"></div>
                <h2 className="text-xl font-bold text-gray-800">Student Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Info */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                    />
                    {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <DatePicker
                      selected={formData.dob}
                      onChange={(date) => handleDateChange(date, "dob")}
                      dateFormat="dd-MM-yyyy"
                      className={`w-full px-4 py-2 rounded-lg border ${errors.dob ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                      maxDate={new Date()}
                      showYearDropdown
                      yearDropdownItemNumber={100}
                      scrollableYearDropdown
                      placeholderText="Select date"
                    />
                    {errors.dob && <p className="mt-1 text-sm text-red-600">{errors.dob}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Class Applying For <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="classApplyingFor"
                      value={formData.classApplyingFor}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.classApplyingFor ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                    >
                      <option value="">Select Class</option>
                      {["Nursery", "KG-I", "KG-II", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"].map(
                        (cls) => (
                          <option key={cls} value={cls}>
                            {cls}
                          </option>
                        )
                      )}
                    </select>
                    {errors.classApplyingFor && (
                      <p className="mt-1 text-sm text-red-600">{errors.classApplyingFor}</p>
                    )}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.gender ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                    {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                    />
                    {errors.mobileNumber && (
                      <p className="mt-1 text-sm text-red-600">{errors.mobileNumber}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                />
                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
              </div>
            </motion.div>

            {/* Parent Details Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-blue-600 rounded-full mr-3"></div>
                <h2 className="text-xl font-bold text-gray-800">Parent Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Father's Details */}
                <div className="bg-blue-50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Father's Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Father's Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${errors.fatherName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                      />
                      {errors.fatherName && (
                        <p className="mt-1 text-sm text-red-600">{errors.fatherName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="fatherMobile"
                        value={formData.fatherMobile}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${errors.fatherMobile ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                      />
                      {errors.fatherMobile && (
                        <p className="mt-1 text-sm text-red-600">{errors.fatherMobile}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Mother's Details */}
                <div className="bg-pink-50 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-pink-800 mb-4">Mother's Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mother's Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${errors.motherName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                      />
                      {errors.motherName && (
                        <p className="mt-1 text-sm text-red-600">{errors.motherName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="motherMobile"
                        value={formData.motherMobile}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${errors.motherMobile ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                      />
                      {errors.motherMobile && (
                        <p className="mt-1 text-sm text-red-600">{errors.motherMobile}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Parent Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Source of Enquiry
                  </label>
                  <select
                    name="enquirySource"
                    value={formData.enquirySource}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  >
                    <option value="">Select Source</option>
                    <option value="Newspaper">Newspaper</option>
                    <option value="Website">Website</option>
                    <option value="Friend">Friend</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Documents Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-blue-600 rounded-full mr-3"></div>
                <h2 className="text-xl font-bold text-gray-800">Required Documents</h2>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: "1", label: "Photo of Child", required: true },
                    { id: "2", label: "Child's Aadhaar card", required: true },
                    { id: "3", label: "Birth Certificate", required: true },
                    { id: "4", label: "Achievement Certificates (if any)" },
                    { id: "5", label: "Mother's Aadhaar Card" },
                    { id: "6", label: "Father's Aadhaar Card" },
                  ].map((doc) => (
                    <div key={doc.id} className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        {doc.label} {doc.required && <span className="text-red-500">*</span>}
                      </label>
                      <div className="flex items-center space-x-2">
                        <label className="flex-1">
                          <div className={`w-full px-4 py-2 rounded-lg border ${errors[doc.id] ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition cursor-pointer bg-white`}>
                            <input
                              type="file"
                              name={`add_checklist_doc_${doc.id}`}
                              onChange={(e) => handleFileChange(e, `add_checklist_doc_${doc.id}`)}
                              className="hidden"
                            />
                            <span className="text-gray-500">Choose file</span>
                          </div>
                        </label>
                        {formData.documents[doc.id] && (
                          <span className="text-sm text-green-600 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round"  strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Selected
                          </span>
                        )}
                      </div>
                      {doc.required && errors[doc.id] && (
                        <p className="text-sm text-red-600">{errors[doc.id]}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Photo Upload Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-blue-600 rounded-full mr-3"></div>
                <h2 className="text-xl font-bold text-gray-800">Upload Photographs</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["student", "father", "mother"].map((type) => (
                  <div key={type} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 capitalize">{type}'s Photo</h3>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-32 h-32 bg-gray-100 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center">
                        {formData.photos[type] ? (
                          <img
                            src={URL.createObjectURL(formData.photos[type]!)}
                            alt={`${type}'s photo`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round"  strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        )}
                      </div>
                      <label className="w-full">
                        <div className="px-4 py-2 bg-blue-600 text-white rounded-lg text-center cursor-pointer hover:bg-blue-700 transition">
                          <input
                            type="file"
                            name={`${type}Photo`}
                            onChange={(e) => handleFileChange(e, type)}
                            className="hidden"
                            accept="image/*"
                          />
                          Upload Photo
                        </div>
                      </label>
                      {formData.photos[type] && (
                        <button
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              photos: { ...prev.photos, [type]: null },
                            }))
                          }
                          className="text-sm text-red-600 hover:text-red-800"
                        >
                          Remove Photo
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Undertaking Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-blue-600 rounded-full mr-3"></div>
                <h2 className="text-xl font-bold text-gray-800">Undertaking Agreement</h2>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="prose prose-sm max-w-none">
                  <p className="font-semibold">UNDERTAKING/DECLARATION:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>I fully understand that the school, on accepting the registration of my ward, is not in any way bound to grant admission.</li>
                    <li>I understand that the decision of the school authorities regarding admission will be final and binding on me.</li>
                    <li>I hereby certify that the Date of Birth and spelling of name of my ward given in this form are true and correct.</li>
                    <li>I undertake that the information / documents submitted in this form are true and correct.</li>
                  </ul>

                  <p className="font-semibold mt-6">INSTRUCTIONS:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Registration once completed for a particular year is <strong>non-transferable</strong> to any other year or to any other child.</li>
                    <li>Issue of Registration Form does not Guarantee Admission.</li>
                    <li>Please attach attested copy of Municipal Birth Certificate.</li>
                    <li>Attach copy of certificates for proficiency in Games, Co-curricular / outstanding achievements (if any).</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="undertaking"
                      checked={formData.undertaking === "Yes"}
                      onChange={(e) => handleChange({ ...e, target: { ...e.target, name: "undertaking", value: e.target.checked ? "Yes" : "No" } })}
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the above mentioned undertaking <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.undertaking && (
                    <p className="mt-1 text-sm text-red-600">{errors.undertaking}</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Submit Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm text-gray-500">
                  All fields marked with <span className="text-red-500">*</span> are mandatory
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Submit Application
                </motion.button>
              </div>
            </motion.div>

            {/* Footer */}
            <div className="pt-8 text-center text-sm text-gray-500 border-t border-gray-200">
              <p>© {new Date().getFullYear()} Delhi Public School, Indore. All rights reserved.</p>
              <p className="mt-1">Powered by <a href="https://schoolpad.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DesignsVerse</a></p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdmissionForm;