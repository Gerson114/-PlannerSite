// Zoho Forms Validation Script
export const initZohoValidation = () => {
  if (typeof window === 'undefined') return;

  (window as any).zf_MandArray = ["SingleLine", "Email", "DecisionBox"];
  (window as any).zf_FieldArray = ["SingleLine", "SingleLine1", "Email", "PhoneNumber_countrycode", "MultiLine", "DecisionBox", "DecisionBox1"];
  
  const dateRegex = zf_SetDateAndMonthRegexBasedOnDateFormate('dd/MM/yyyy');
  (window as any).zf_DateRegex = new RegExp(dateRegex[0]);
  (window as any).zf_MonthYearRegex = new RegExp(dateRegex[1]);
};

export const zf_ValidateAndSubmit = (): boolean => {
  if (zf_CheckMandatory()) {
    if (zf_ValidCheck()) {
      return true;
    }
  }
  return false;
};

const zf_CheckMandatory = (): boolean => {
  const form = document.forms.namedItem('form');
  if (!form) return false;

  for (let i = 0; i < (window as any).zf_MandArray.length; i++) {
    const fieldName = (window as any).zf_MandArray[i];
    const fieldObj = form[fieldName] as HTMLInputElement;
    
    if (fieldObj) {
      if (fieldObj.type === 'checkbox' || fieldObj.type === 'radio') {
        if (!fieldObj.checked) {
          fieldObj.focus();
          zf_ShowErrorMsg(fieldName);
          return false;
        }
      } else if (fieldObj.value.trim().length === 0) {
        fieldObj.focus();
        zf_ShowErrorMsg(fieldName);
        return false;
      }
    }
  }
  return true;
};

const zf_ValidCheck = (): boolean => {
  const form = document.forms.namedItem('form');
  if (!form) return false;

  for (let ind = 0; ind < (window as any).zf_FieldArray.length; ind++) {
    const fieldName = (window as any).zf_FieldArray[ind];
    const fieldObj = form[fieldName] as HTMLInputElement;
    
    if (fieldObj) {
      const checkType = fieldObj.getAttribute("checktype");
      
      if (checkType === "c5") { // Email
        if (!zf_ValidateEmailID(fieldObj)) {
          fieldObj.focus();
          zf_ShowErrorMsg(fieldName);
          return false;
        }
      }
    }
  }
  return true;
};

const zf_ShowErrorMsg = (uniqName: string) => {
  for (let errInd = 0; errInd < (window as any).zf_FieldArray.length; errInd++) {
    const fldLinkName = (window as any).zf_FieldArray[errInd].split('_')[0];
    const errorElem = document.getElementById(fldLinkName + "_error");
    if (errorElem) errorElem.style.display = 'none';
  }
  
  const linkName = uniqName.split('_')[0];
  const errorElem = document.getElementById(linkName + "_error");
  if (errorElem) errorElem.style.display = 'block';
};

const zf_ValidateEmailID = (elem: HTMLInputElement): boolean => {
  const emailValue = elem.value;
  if (emailValue) {
    const emailExp = /^[\w]([\w\-.+&'\/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/;
    return emailExp.test(emailValue.trim());
  }
  return true;
};

const zf_SetDateAndMonthRegexBasedOnDateFormate = (dateFormat: string): string[] => {
  let dateFormatRegExp = "";
  let monthYearFormatRegExp = "";
  
  if (dateFormat === "dd/MM/yyyy") {
    dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[\/]([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
    monthYearFormatRegExp = "^([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
  }
  
  return [dateFormatRegExp, monthYearFormatRegExp];
};
