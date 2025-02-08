    // ฟังก์ชันเปิด/ปิดรหัสผ่าน
    const togglePassword = document.getElementById("togglePassword");
    const passwordField = document.getElementById("password");

    togglePassword.addEventListener("click", function () {
      const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
      passwordField.setAttribute("type", type);
      this.textContent = type === "password" ? "👁️" : "🙈"; // เปลี่ยนไอคอนระหว่างเปิด/ปิด
    });

    // ฟังก์ชันจัดการเมื่อกดปุ่มล็อกอิน
    function handleLogin(event) {
      event.preventDefault();  // หยุดการรีเฟรชหน้าเมื่อฟอร์มถูกส่ง

      // แสดงโมดอลแจ้งเตือน
      document.getElementById("successModal").style.display = "flex";
    }

    // ฟังก์ชันเมื่อกดปุ่มในโมดอล
    function goToNextPage() {
      window.location.href = "https://bunnybubui.github.io/newlight.github.io/report/index.html"; // เปลี่ยนไปที่หน้าอื่นที่ต้องการ
    }

    function validateLength(input) {
      const minLength = 8;
      const maxLength = 10;
      let value = input.value.replace(/\D/, "");
      if (value.length < minLength) {
          input.setCustomValidity(`กรุณากรอกตัวเลขอย่างน้อย ${minLength} ตัว`);
      } else if (value.length > maxLength) {
          input.setCustomValidity(`กรุณากรอกตัวเลขไม่เกิน ${maxLength} ตัว`);
      } else {
          input.setCustomValidity("");
      }
  }

  function passwordLength(input) {
    const minLength = 5;
    let value = input.value.replace(/\D/, "");
    if (value.length < minLength) {
        input.setCustomValidity(`กรุณากรอกรหัสผ่านอย่างน้อย ${minLength} ตัว`);
    } else {
        input.setCustomValidity("");
    }
}
window.onload = function() {
  document.getElementById('loader').style.display = 'none';
};