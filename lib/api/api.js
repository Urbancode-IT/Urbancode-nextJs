
const BASE_URL = "https://uc-backend-tpje.onrender.com";
//-----------Submit Internship Application--------------------
export const submitInternshipApplication = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/send-email/internship`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Something went wrong");
    }

    return { success: true, message: "Application submitted successfully!" };
  } catch (error) {
    console.error("API Error:", error);
    return { success: false, message: error.message || "Failed to send application." };
  }
};
//------------------------------------------------------------
//-----------Submit Mentor Application------------------------
export const submitMentorApplication = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/send-email/mentor`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Something went wrong");
    }

    return { success: true, message: "Application submitted successfully!" };
  } catch (error) {
    console.error("API Error:", error);
    return { success: false, message: error.message || "Failed to send application." };
  }
};
//------------------------------------------------------------

//-----------Send Contact Message-----------------------------
export const sendContactMessage = async (formData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/send-email/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }
  
      return { success: true, message: "Message sent successfully!" };
    } catch (error) {
      console.error("API Error:", error);
      return { success: false, message: error.message || "Failed to send message." };
    }
};
//------------------------------------------------------------
//-----------Submit Enquiry Form-----------------------------
export const submitEnquiryForm = async (formData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/send-email/course-enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }
  
      return { success: true, message: "Enquiry submitted successfully!" };
    } catch (error) {
      console.error("API Error:", error);
      return { success: false, message: error.message || "Failed to send enquiry." };
    }
};
//------------------------------------------------------------
//---------------Project Enquiry Form-------------------------
export const submitProjectEnquiryForm = async (formData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/send-email/project-enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }
  
      return { success: true, message: "Enquiry submitted successfully!" };
    } catch (error) {
      console.error("API Error:", error);
      return { success: false, message: error.message || "Failed to send enquiry." };
    }
}