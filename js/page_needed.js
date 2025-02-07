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
                issueDescription: document.getElementById("issueDescription")
            };

            const translations = {
                th: {
                    title: "New Light Party - แสดงความต้องการของนักศึกษา",
                    nameLabel: "ชื่อ-สกุล",
                    emailLabel: "อีเมล",
                    issueDescriptionLabel: "รายละเอียดความต้องการ",
                    issueImageLabel: "แนบรูปภาพ (ถ้ามี)",
                    identityLabel: "คุณต้องการระบุตัวตนหรือไม่?",
                    identifiedLabel: "ระบุตัวตน",
                    anonymousLabel: "ไม่ระบุตัวตน",
                    submitButton: "ส่งความต้องการ",
                    submittedInfoHeader: "ข้อมูลที่ส่ง:",
                    name: "กรอกชื่อของคุณ",
                    email: "กรอกอีเมลของคุณ",
                    issueDescription: "กรอกรายละเอียดความต้องการของคุณ"
                },
                en: {
                    title: "New Light Party - Student Requests",
                    nameLabel: "Full Name",
                    emailLabel: "Email",
                    issueDescriptionLabel: "Request Description",
                    issueImageLabel: "Attach Image (if any)",
                    identityLabel: "Do you want to identify yourself?",
                    identifiedLabel: "Identify",
                    anonymousLabel: "Anonymous",
                    submitButton: "Submit Request",
                    submittedInfoHeader: "Submitted Information:",
                    name: "Enter your name",
                    email: "Enter your email",
                    issueDescription: "Enter the request description"
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
        }

        function submitForm() {
            // Show alert when the form is submitted
            document.getElementById("successModal").style.display = "flex";
            return false;  // Prevent the form from actually submitting
        }
        function closeModal() {
            document.getElementById("successModal").style.display = "none";
            if (n === true){
                window.location.href = "https://bunnybubui.github.io/newlight.github.io/needed/menu.html";
            }
          }

        // เรียกฟังก์ชัน updateContent() ครั้งแรกเมื่อหน้าเว็บโหลด
        window.addEventListener('DOMContentLoaded', updateContent);