
const fetchWithTimeout = async (resource, options = {}) => {
  const { timeout = 15000 } = options;
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal  
  });
  clearTimeout(id);
  
  return response;
};

//-----------Submit Internship Application--------------------
export const submitInternshipApplication = async (formData) => {
  try {
    const response = await fetchWithTimeout(`/api/send-email/internship`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || result.message || "Something went wrong");
    }

    return { success: true, message: "Application submitted successfully!" };
  } catch (error) {
    console.error("API Error:", error);
    const msg = error.name === 'AbortError' ? 'Request timed out. Please try again.' : (error.message || "Failed to send application.");
    return { success: false, message: msg };
  }
};

//-----------Submit Mentor Application------------------------
export const submitMentorApplication = async (formData) => {
  try {
    const response = await fetchWithTimeout(`/api/send-email/mentor`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || result.message || "Something went wrong");
    }

    return { success: true, message: "Application submitted successfully!" };
  } catch (error) {
    console.error("API Error:", error);
    const msg = error.name === 'AbortError' ? 'Request timed out. Please try again.' : (error.message || "Failed to send application.");
    return { success: false, message: msg };
  }
};

//-----------Send Contact Message-----------------------------
export const sendContactMessage = async (formData) => {
    try {
      const response = await fetchWithTimeout(`/api/send-email/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || result.message || "Something went wrong");
      }
  
      return { success: true, message: "Message sent successfully!" };
    } catch (error) {
      console.error("API Error:", error);
      const msg = error.name === 'AbortError' ? 'Request timed out. Please try again.' : (error.message || "Failed to send message.");
      return { success: false, message: msg };
    }
};

//-----------Submit Enquiry Form-----------------------------
export const submitEnquiryForm = async (formData) => {
    try {
      const response = await fetchWithTimeout(`/api/send-email/course-enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || result.message || "Something went wrong");
      }
  
      return { success: true, message: "Enquiry submitted successfully!" };
    } catch (error) {
      console.error("API Error:", error);
      const msg = error.name === 'AbortError' ? 'Request timed out. Please try again.' : (error.message || "Failed to send enquiry.");
      return { success: false, message: msg };
    }
};

//---------------Project Enquiry Form-------------------------
export const submitProjectEnquiryForm = async (formData) => {
    try {
      const response = await fetchWithTimeout(`/api/send-email/project-enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || result.message || "Something went wrong");
      }
  
      return { success: true, message: "Enquiry submitted successfully!" };
    } catch (error) {
      console.error("API Error:", error);
      const msg = error.name === 'AbortError' ? 'Request timed out. Please try again.' : (error.message || "Failed to send enquiry.");
      return { success: false, message: msg };
    }
}