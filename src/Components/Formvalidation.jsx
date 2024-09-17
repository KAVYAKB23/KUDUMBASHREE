function validation(formData) {
  const errors = {};
  const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   const phoneregex = ^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$ ;

  if (!formData.name) {
    errors.name = "name is required";
  }
  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!emailregex.test(formData.email)) {
    errors.email = "Email is invalid";
  }
  if (!formData.phone) {
    errors.phone = "phone number is required";
  } else if (formData.phone.length < 10) {
    errors.phone = "invalid phone number";
  }
  if (!formData.message) {
    errors.message = "enter the message";
  }

  return errors;
}
export default validation;
