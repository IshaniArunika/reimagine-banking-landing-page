import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    mobile: "",
    email: "",
    website: "",
    consent: false,
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for registering!");
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const inputStyle = (fieldName) => `
    bg-gray-800 bg-opacity-80 backdrop-blur-sm border border-gray-600 rounded-lg px-4 py-3 w-full 
    text-white placeholder-gray-400 transition-all duration-300
    ${focusedField === fieldName 
      ? 'border-purple-400 ring-2 ring-purple-400 ring-opacity-30 shadow-lg transform scale-105 bg-gray-700' 
      : 'hover:border-gray-500 hover:bg-gray-700'
    }
  `;

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="py-16 px-4 sm:px-10 md:px-20" id="register">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative">
                <span className="relative z-10 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Register to Attend
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 blur-2xl opacity-20" />
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-300 mx-auto rounded-full transform transition-all duration-500 hover:w-32 hover:h-2" />
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-xl border border-gray-600 border-opacity-30 rounded-xl p-8 space-y-6 transition-all duration-300 hover:bg-opacity-70 hover:border-purple-400 hover:border-opacity-50">
            {/* Single column layout */}
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  onFocus={() => handleFocus('firstName')}
                  onBlur={handleBlur}
                  className={inputStyle('firstName')}
                  required
                />
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  onFocus={() => handleFocus('lastName')}
                  onBlur={handleBlur}
                  className={inputStyle('lastName')}
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  onFocus={() => handleFocus('jobTitle')}
                  onBlur={handleBlur}
                  className={inputStyle('jobTitle')}
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => handleFocus('company')}
                  onBlur={handleBlur}
                  className={inputStyle('company')}
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  onFocus={() => handleFocus('mobile')}
                  onBlur={handleBlur}
                  className={inputStyle('mobile')}
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className={inputStyle('email')}
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="url"
                  name="website"
                  placeholder="Company Website URL"
                  value={formData.website}
                  onChange={handleChange}
                  onFocus={() => handleFocus('website')}
                  onBlur={handleBlur}
                  className={inputStyle('website')}
                  required
                />
              </div>
            </div>

            <div className="flex items-start p-4 bg-purple-800 bg-opacity-30 rounded-lg border border-purple-500 border-opacity-40">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mr-3 mt-1 w-4 h-4 text-purple-400 bg-gray-700 border-purple-400 rounded focus:ring-purple-400 focus:ring-2"
                required
              />
              <label className="text-gray-200 text-sm leading-relaxed">
                By filling out the registration form to attend our event, you agree and consent to Cogent Solutions{" "}
                <a href="#" className="text-purple-400 underline hover:text-purple-300 transition-colors duration-300">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-4 px-6 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 hover:from-purple-600 hover:via-purple-500 hover:to-purple-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 active:scale-95"
            >
              <span className="relative z-10">Register Now</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterForm;