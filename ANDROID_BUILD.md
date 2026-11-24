# تحويل ذِكري إلى APK باستخدام Capacitor

تم تجهيز المشروع ليُغلّف كتطبيق Android باستخدام Capacitor مع تصدير Next.js ثابتًا إلى مجلد `out`.

## المتطلبات
- Node.js 20+
- Android Studio حديث
- Android SDK وBuild Tools
- JDK 17

## إنشاء مشروع Android لأول مرة
من مجلد المشروع:

```bash
npm install
npx cap add android
npm run build
npx cap sync android
npx cap open android
```

داخل Android Studio:
1. انتظر اكتمال Gradle Sync.
2. اختر Build > Build Bundle(s) / APK(s) > Build APK(s).
3. نسخة Debug تظهر عادةً في `android/app/build/outputs/apk/debug/app-debug.apk`.

## إنشاء APK موقّع للنشر
Android Studio > Build > Generate Signed Bundle / APK ثم أنشئ keystore خاصًا بك واحتفظ به بأمان. لا تشارك ملف keystore أو كلمات مروره.

## ملاحظات مهمة
- هذه عملية تغليف لواجهة الويب الحالية وليست تحويلًا تلقائيًا لكل خصائص الخادم إلى تطبيق Native.
- أي ميزات تتطلب Supabase أو API أو مفاتيح خارجية تظل بحاجة إلى إعدادها.
- لا تضع مفاتيح الخدمة السرية داخل التطبيق.
- لم يتم إنشاء APK فعلي في بيئة التسليم الحالية لعدم توفر Android SDK وAndroid Gradle tooling؛ الملفات هنا تجهز المشروع للفتح والبناء في Android Studio.

## البناء من الموبايل فقط عبر GitHub Actions
1. أنشئ حسابًا على GitHub من الموبايل.
2. أنشئ مستودعًا جديدًا (Repository) باسم `zikri` واجعله Private أو Public.
3. ارفع محتويات هذا المجلد إلى المستودع، مع الحفاظ على مجلد `.github/workflows`.
4. افتح تبويب Actions في المستودع، واختر `Build ZIKRI Android APK` ثم `Run workflow`.
5. انتظر حتى تصبح عملية البناء خضراء. افتح نتيجة التشغيل، وانزل إلى Artifacts، ثم نزّل `zikri-debug-apk`.
6. فك ضغط الملف على الهاتف وثبّت `app-debug.apk`. قد يطلب Android السماح بالتثبيت من هذا المصدر.

إذا فشل البناء، افتح سجل الخطأ وأرسل صورة أو انسخ آخر جزء منه؛ لا تعتبر وجود ملف Artifact دليلًا على نجاح التطبيق إلا إذا اكتملت خطوات البناء ورفع APK بنجاح.
