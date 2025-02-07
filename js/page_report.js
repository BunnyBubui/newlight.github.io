let currentLang = 'th';

function switchLanguage() {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    updateContent();

    const languageButton = document.getElementById("languageButton");
    languageButton.innerText = currentLang === 'th' ? 'THAI / ENG' : 'ENG / THAI';

    if (currentLang === 'en') {
        document.body.classList.add('lang-en');
    } else {
        document.body.classList.remove('lang-en');
    }
}

function updateContent() {
    const elements = {
        title: document.getElementById("title"),
        nameLabel: document.getElementById("nameLabel"),
        emailLabel: document.getElementById("emailLabel"),
        issueDescriptionLabel: document.getElementById("issueDescriptionLabel"),
        issueImageLabel: document.getElementById("issueImageLabel"),
        identityLabel: document.getElementById("identityLabel"),
        identifiedLabel: document.getElementById("identifiedLabel"),
        anonymousLabel: document.getElementById("anonymousLabel"),
        submitButton: document.getElementById("submitButton"),
        submittedInfoHeader: document.getElementById("submittedInfoHeader"),
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        issueDescription: document.getElementById("issueDescription"),
        selectCategory: document.getElementById("selectCategory"),
        safety: document.getElementById("safety"),
        building: document.getElementById("building"),
        equipment: document.getElementById("equipment"),
        staff: document.getElementById("staff"),
        other: document.getElementById("other")
    };

    const translations = {
        th: {
            title: "New Light Party - แจ้งปัญหา",
            nameLabel: "ชื่อ-สกุล",
            emailLabel: "อีเมล",
            issueDescriptionLabel: "รายละเอียดปัญหา",
            issueImageLabel: "แนบรูปภาพ (ถ้ามี)",
            identityLabel: "คุณต้องการระบุตัวตนหรือไม่?",
            identifiedLabel: "ระบุตัวตน",
            anonymousLabel: "ไม่ระบุตัวตน",
            submitButton: "ส่งปัญหา",
            submittedInfoHeader: "ข้อมูลที่ส่ง:",
            name: "กรอกชื่อของคุณ",
            email: "กรอกอีเมลของคุณ",
            issueDescription: "กรอกรายละเอียดปัญหาที่คุณพบ",
            selectCategory: "-- เลือกหมวดหมู่ --",
            safety: "ความปลอดภัย",
            building: "อาคารสถานที่",
            equipment: "ครุภัณฑ์",
            staff: "ร้องเรียนเจ้าหน้าที่",
            other: "อื่นๆ"
        },
        en: {
            title: "New Light Party - Report an Issue",
            nameLabel: "Full Name",
            emailLabel: "Email",
            issueDescriptionLabel: "Issue Description",
            issueImageLabel: "Attach Image (if any)",
            identityLabel: "Do you want to identify yourself?",
            identifiedLabel: "Identify",
            anonymousLabel: "Anonymous",
            submitButton: "Submit Issue",
            submittedInfoHeader: "Submitted Information:",
            name: "Enter your name",
            email: "Enter your email",
            issueDescription: "Enter the issue description",
            selectCategory: "-- Select Category --",
            safety: "Safety",
            building: "Building",
            equipment: "Equipment",
            staff: "Staff Complaint",
            other: "Other"
        }
    };

    for (const key in elements) {
        const element = elements[key];
        const translation = translations[currentLang][key];
        if (element) {
