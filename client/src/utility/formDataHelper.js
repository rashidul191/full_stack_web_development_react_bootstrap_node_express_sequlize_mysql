export const createFormDataWithFile = (data) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value instanceof FileList) {
      if (value.length > 0) {
        formData.append(key, value[0]);
      }
    } else if (value instanceof File) {
      formData.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((item) => formData.append(`${key}[]`, item));
    } else {
      // empty string avoid
      if (value !== "" && value !== undefined && value !== null) {
        formData.append(key, value);
      }
    }
  });

  return formData;
};

// empty string → null convert
export const createFormData = (data) => {
  Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      value === "" ? null : value,
    ]),
  );
};
