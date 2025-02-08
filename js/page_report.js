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
                    submittedInfoHeader: "Submitted Information:",
                    name: "Enter your name",
                    email: "Enter your email",
                    issueDescription: "Enter the issue description"
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
        function closeModal(n = false) {
            document.getElementById("successModal").style.display = "none";
            if (n === true){
                window.location.href = "https://bunnybubui.github.io/newlight.github.io/menu.html";
            }
          }

        // เรียกฟังก์ชัน updateContent() ครั้งแรกเมื่อหน้าเว็บโหลด
        window.addEventListener('DOMContentLoaded', updateContent);

        window.onload = function() {
            document.getElementById('loader').style.display = 'none';
        };
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff" 
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 4,
                        size_min: 0.1,
                        sync: false
                    }
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    }
                }
            }
        });