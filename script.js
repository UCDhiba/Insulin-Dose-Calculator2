let isArabic = true;

const languageTexts = {
  en: {
    pageTitle: "Insulin Dose Calculator",
    heading: "Insulin Dose Calculator",
    carbsLabel: "Carbohydrates (grams):",
    currentSugarLabel: "Current Sugar (mg/dL):",
    targetSugarLabel: "Target Sugar (mg/dL):",
    insulinSensitivityLabel: "Insulin Sensitivity (grams per 1 unit):",
    submitButton: "Calculate",
    resultText: "The required dose for the meal: ",
    correctionDoseText: "Correction dose: ",
    totalDoseText: "Total insulin dose: "
  },
  ar: {
    pageTitle: "حاسبة جرعة الإنسولين",
    heading: "حاسبة جرعة الإنسولين",
    carbsLabel: "عدد الكربوهيدرات (غرام):",
    currentSugarLabel: "السكر الحالي (ملغ/dL):",
    targetSugarLabel: "السكر المستهدف (ملغ/dL):",
    insulinSensitivityLabel: "حساسية الإنسولين (غرام لكل 1 وحدة):",
    submitButton: "احسب",
    resultText: "الجرعة المطلوبة للوجبة: ",
    correctionDoseText: "الجرعة التصحيحة: ",
    totalDoseText: "الجرعة الإجمالية للإنسولين: "
  }
};

document.getElementById('insulinForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const carbs = parseFloat(document.getElementById('carbs').value);
  const currentSugar = parseFloat(document.getElementById('currentSugar').value);
  const targetSugar = parseFloat(document.getElementById('targetSugar').value);
  const insulinSensitivity = parseFloat(document.getElementById('insulinSensitivity').value);

  const carbInsulinDose = carbs / 10;
  const correctionDose = (currentSugar - targetSugar) / insulinSensitivity;

  const totalDose = carbInsulinDose + correctionDose;

  let resultText = languageTexts[isArabic ? 'ar' : 'en'].resultText + `${carbInsulinDose.toFixed(2)} وحدة.<br>`;
  resultText += languageTexts[isArabic ? 'ar' : 'en'].correctionDoseText + `${correctionDose.toFixed(2)} وحدة.<br>`;
  resultText += languageTexts[isArabic ? 'ar' : 'en'].totalDoseText + `${totalDose.toFixed(2)} وحدة.`;

  document.getElementById('result').innerHTML = resultText;
});

function toggleLanguage() {
  isArabic = !isArabic;

  // تغيير النصوص بناءً على اللغة
  document.getElementById('pageTitle').innerText = languageTexts[isArabic ? 'ar' : 'en'].pageTitle;
  document.getElementById('heading').innerText = languageTexts[isArabic ? 'ar' : 'en'].heading;
  document.getElementById('carbsLabel').innerText = languageTexts[isArabic ? 'ar' : 'en'].carbsLabel;
  document.getElementById('currentSugarLabel').innerText = languageTexts[isArabic ? 'ar' : 'en'].currentSugarLabel;
  document.getElementById('targetSugarLabel').innerText = languageTexts[isArabic ? 'ar' : 'en'].targetSugarLabel;
  document.getElementById('insulinSensitivityLabel').innerText = languageTexts[isArabic ? 'ar' : 'en'].insulinSensitivityLabel;
  document.getElementById('submitButton').innerText = languageTexts[isArabic ? 'ar' : 'en'].submitButton;
  document.getElementById('languageToggle').innerText = isArabic ? 'English' : 'العربية';
}
