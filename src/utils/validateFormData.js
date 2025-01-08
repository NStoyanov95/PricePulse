const validateFormData = (formData) => {
    const newErrors = {};

    if (formData.username.length < 5 || formData.password.length < 5) {
        newErrors.message =
            "Username and password must be at least 5 characters";
    }

    return newErrors;
};

export default validateFormData;
