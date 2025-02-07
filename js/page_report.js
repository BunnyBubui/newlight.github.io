let currentLang = 'th'; // Default language is Thai

function switchLanguage() {
    currentLang = currentLang === 'th' ? 'en' : 'th'; // Toggle between Thai and English
    updateContent();

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
        categoryLabel: document.getElementById("categoryLabel"),
        issueCategory: document.getElementById("issueCategory")
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
            categoryLabel: "หมวดหมู่ปัญหา",
            categoryOptions: [
                { value: "", text: "-- เลือกหมวดหมู่ --" },
                { value: "safety", text: "ความปลอดภัย" },
                { value: "building", text: "อาคารสถานที่" },
                { value: "equipment", text: "ครุภัณฑ์" },
                { value: "staff", text: "ร้องเรียนเจ้าหน้าที่" },
                { value: "other", text: "อื่นๆ" }
            ]
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
            categoryLabel: "Issue Category",
            categoryOptions: [
                { value: "", text: "-- Select a category --" },
                { value: "safety", text: "Safety" },
                { value: "building", text: "Building Facilities" },
                { value: "equipment", text: "Equipment" },
                { value: "staff", text: "Staff Complaint" },
                { value: "other", text: "Other" }
            ]
        }
    };

    // Update the text content and placeholders
    for (const key in elements) {
        const element = elements[key];
        if (element) {
            if (key === 'name' || key === 'email' || key === 'issueDescription') {
                element.placeholder = translations[currentLang][key];
            } else if (key === 'issueCategory') {
                // Update dropdown options
                let optionsHTML = "";
                translations[currentLang].categoryOptions.forEach(option => {
                    optionsHTML += `<option value="${option.value}">${option.text}</option>`;
                });
                element.innerHTML = optionsHTML;
            } else {
                element.innerText = translations[currentLang][key];
            }
        }
    }
}

function submitForm() {
    // Show alert when the form is submitted
    document.getElementById("successModal").style.display = "flex";
    return false;  // Prevent the form from actually submitting
}

function closeModal(n = false) {
    document.getElementById("successModal").style.display = "none";
    if (n === true) {
        window.location.href = "https://bunnybubui.github.io/newlight.github.io/report/menu.html";
    }
}

// Call updateContent() on page load
window.addEventListener('DOMContentLoaded', updateContent);