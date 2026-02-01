// script.js

// ────────────────────────────────────────────────
//   روابطك الشخصية - قم بتعديل هذا الجزء فقط
// ────────────────────────────────────────────────
const socialLinks = {
    instagram:  "https://www.instagram.com/programadorofficial/",
    tiktok:     "https://www.tiktok.com/@programadorofficial",
    facebook:   "https://www.facebook.com/programadorofficial",
    twitter:    "https://x.com/fouadofficial5",           // أو twitter.com
    youtube:    "https://www.youtube.com/@programadorofficial1",
    snapchat:   "https://www.snapchat.com/add/yourusername",
    linkedin:   "https://www.linkedin.com/in/yourname",
    whatsapp:   "https://wa.me/212642138756?text=مرحبا%20فؤاد%2C%20شفت%20رابطك",   // أضف رقمك مع رمز الدولة (مثال: 212 للمغرب)
    telegram:   "https://t.me/yourusername",
    discord:    "https://discord.gg/yourinvite",        // أو رابط المستخدم discord.com/users/...
    pinterest:  "https://www.pinterest.com/yourusername/",
    reddit:     "https://www.reddit.com/user/yourusername"
};

// ────────────────────────────────────────────────
//   الدالة الرئيسية للتوجيه
// ────────────────────────────────────────────────
function goToLink(platform) {
    const url = socialLinks[platform];

    if (!url || url.trim() === "" || url === "#") {
        // يمكنك إزالة alert إذا أردت تصرفاً صامتاً
        alert("الرابط لهذه المنصة غير متوفر حالياً 😅");
        return;
    }

    // فتح في تبويب جديد
    window.open(url, '_blank', 'noopener,noreferrer');
}

// ────────────────────────────────────────────────
//   اختياري: تحميل اسم المستخدم و الصورة ديناميكياً (إذا أردت لاحقاً)
// ────────────────────────────────────────────────
// مثال بسيط: يمكنك جعلها تأخذ القيم من متغيرات أو حتى من localStorage لاحقاً

// document.getElementById('displayName').textContent = "Fouad";
// document.getElementById('username').textContent = "@fouad_real";
// document.getElementById('profileImage').src = "https://your-real-photo-link.jpg";

// ────────────────────────────────────────────────
//   إضافة تأثير بسيط عند تحميل الصفحة (اختياري)
// ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            container.style.transition = 'all 0.8s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }
});
