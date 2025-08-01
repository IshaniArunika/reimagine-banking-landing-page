export const registerUser = async (formData) => {
  try {
    const response = await fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(err || "Failed to register");
    }

    return await response.json(); // return success response (optional)
  } catch (error) {
    console.error("Register Error:", error);
    throw error;
  }
};