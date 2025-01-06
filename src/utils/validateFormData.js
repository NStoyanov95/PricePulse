const validateFormData = (formData) => {
    const newErrors = {};

    if (formData.username.length < 5) {
        newErrors.username = "Username must be at least 5 characters";
    }

    if (formData.password.length < 5) {
        newErrors.password = "Password must be at least 5 characters";
    }

    return newErrors;
};

export default validateFormData;
