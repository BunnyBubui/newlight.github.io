let isEnglish = false; // ค่าเริ่มต้นเป็นภาษาไทย

function switchLanguage() {
    isEnglish = !isEnglish; // สลับสถานะระหว่างไทย-อังกฤษ

    // เปลี่ยนข้อความของ label และ placeholder
    document.getElementById("title").innerText = isEnglish ? "Report an Issue" : "แจ้งปัญหา";
    document.getElementById("nameLabel").innerText = isEnglish ? "Full Name" : "ชื่อ-สกุล";
    document.getElementById("name").placeholder = isEnglish ? "Enter your name" : "กรอกชื่อของคุณ";
    document.getElementById("emailLabel").innerText = isEnglish ? "Email" : "อีเมล";
    document.getElementById("email").placeholder = isEnglish ? "Enter your email" : "กรอกอีเมลของคุณ";
    document.getElementById("issueDescriptionLabel").innerText = isEnglish ? "Issue Details" : "รายละเอียดปัญหา";
    document.getElementById("issueDescription").placeholder = isEnglish ? "Enter the issue details" : "กรอกรายละเอียดปัญหาที่คุณพบ";
    document.getElementById("categoryLabel").innerText = isEnglish ? "Issue Category" : "หมวดหมู่ปัญหา";

    // เปลี่ยนข้อความใน dropdown หมวดหมู่ปัญหา
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

    // เปลี่ยนข้อความในตัวเลือกระบุตัวตน
    document.getElementById("identityLabel").innerText = isEnglish ? "Do you want to reveal your identity?" : "คุณต้องการระบุตัวตนหรือไม่?";
    document.getElementById("identifiedLabel").innerText = isEnglish ? "Identify" : "ระบุตัวตน";
    document.getElementById("anonymousLabel").innerText = isEnglish ? "Anonymous" : "ไม่ระบุตัวตน";

    // ปุ่มส่ง
    document.getElementById("submitButton").innerText = isEnglish ? "Submit Issue" : "ส่งปัญหา";
}