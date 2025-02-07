let currentLang = 'th';
let isEnglish = false; // ค่าเริ่มต้นเป็นภาษาไทย

function switchLanguage() {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    isEnglish = !isEnglish;
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
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        issueDescription: document.getElementById("issueDescription"),
        issueCategoryLabel: document.querySelector("label[for='issueCategory']")
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
            name: "กรอกชื่อของคุณ",
            email: "กรอกอีเมลของคุณ",
            issueDescription: "กรอกรายละเอียดปัญหาที่คุณพบ",
            issueCategoryLabel: "หมวดหมู่ปัญหา"
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
            name: "Enter your name",
            email: "Enter your email",
            issueDescription: "Enter the issue description",
            issueCategoryLabel: "Issue Category"
        }
    };

    for (const key in elements) {
        const element = elements[key];
        const translation = translations[currentLang][key];
        if (element) {
            if (key === 'name' || key === 'email' || key === 'issueDescription') {
                element.placeholder = translation;
            } else {
                element.innerText = translation;
            }
        }
    }

    let categoryDropdown = document.getElementById("issueCategory");
    categoryDropdown.innerHTML = isEnglish
        ? `<option value="" disabled selected>-- Select a category --</option>
           <option value="safety">Safety</option>
           <option value="building">Building Facilities</option>
           <option value="equipment">Equipment</option>
           <option value="staff">Staff Complaint</option>
           <option value="other">Other</option>`
        : `<option value="" disabled selected>-- เลือกหมวดหมู่ --</option>
           <option value="safety">ความปลอดภัย</option>
           <option value="building">อาคารสถานที่</option>
           <option value="equipment">ครุภัณฑ์</option>
           <option value="staff">ร้องเรียนเจ้าหน้าที่</option>
           <option value="other">อื่นๆ</option>`;
}

function submitForm() {
    document.getElementById("successModal").style.display = "flex";
    return false;
}

function closeModal(n = false) {
    document.getElementById("successModal").style.display = "none";
    if (n === true) {
        window.location.href = "https://bunnybubui.github.io/newlight.github.io/report/menu.html";
    }
}

window.addEventListener('DOMContentLoaded', updateContent);
