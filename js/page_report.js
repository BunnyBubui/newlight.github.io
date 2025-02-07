let currentLang = 'th';

function switchLanguage() {
    currentLang = currentLang === 'th' ? 'en' : 'th';
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
        issueCategory: document.getElementById("issueCategory")  // เพิ่ม element สำหรับหมวดหมู่ปัญหา
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
            issueCategoryOptions: ["ความปลอดภัย", "อาคารสถานที่", "ครุภัณฑ์", "ร้องเรียนเจ้าหน้าที่", "อื่นๆ"] // ตัวเลือกหมวดหมู่
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
            issueCategoryOptions: ["Safety", "Building Facilities", "Equipment", "Staff Complaint", "Other"] // ตัวเลือกหมวดหมู่
        }
    };

    for (const key in elements) {
        const element = elements[key];
        const translation = translations[currentLang][key];
        if (element) {
            if (key === 'name' || key === 'email' || key === 'issueDescription') {
                element.placeholder = translation;
            } else if (key === 'issueCategory') {
                // แปลตัวเลือกหมวดหมู่
                for (let i = 0; i < element.options.length; i++) {
                    element.options[i].textContent = translation[i]; // เปลี่ยนข้อความในตัวเลือก
                }
            } else {
                element.innerText = translation;
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

// เรียกฟังก์ชัน updateContent() ครั้งแรกเมื่อหน้าเว็บโหลด
window.addEventListener('DOMContentLoaded', updateContent);
