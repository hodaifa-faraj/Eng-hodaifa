document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل افتراضي

    // مسح الرسائل السابقة
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // الحصول على القيم المدخلة
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let isValid = true;

    // التحقق من صحة الاسم
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'الاسم مطلوب';
        isValid = false;
    }

    // التحقق من صحة البريد الإلكتروني
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'البريد الإلكتروني مطلوب';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'البريد الإلكتروني غير صالح';
        isValid = false;
    }

    // التحقق من صحة الرسالة
    if (message.trim() === '') {
        document.getElementById('messageError').textContent = 'الرسالة مطلوبة';
        isValid = false;
    }

    // إذا كانت جميع المدخلات صحيحة، إرسال النموذج
    if (isValid) {
        alert('تم إرسال النموذج بنجاح!');
        document.getElementById('contactForm').reset(); // مسح النموذج
    }
});