let currentLang = 'th';

function switchLanguage() {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    updateContent();

    // Toggle the 'lang-en' class based on language
    document.body.classList.toggle('lang-en', currentLang === 'en');
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
        issueDescription: document.getElementById("issueDescription")
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
            issueDescription: "กรอกรายละเอียดปัญหาที่คุณพบ"
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
            issueDescription: "Enter the issue description"
        }
    };

    // Apply translations
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
}

function submitForm() {
    // Show modal when the form is submitted
    document.getElementById("successModal").style.display = "flex";
    return false;  // Prevent the form from actually submitting
}

function closeModal(confirmed = false) {
    const modal = document.getElementById("successModal");
    modal.style.display = "none";
    
    // If confirmed, redirect the user
    if (confirmed) {
        window.location.href = "https://bunnybubui.github.io/newlight.github.io/report/menu.html";
    }
}

// Initialize language content when the page loads
window.addEventListener('DOMContentLoaded', updateContent);
