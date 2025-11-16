/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect, createContext, useContext, useRef } from 'react';

// --- I18N (TRANSLATION) SETUP ---
const translations = {
  ar: {
    header: 'دورة اللغة العربية عبر الإنترنت مع متحدث أصلي',
    subtitle: 'كن جزءًا من مجتمع عالمي يتعلم العربية',
    teacherName: 'الأستاذ اسامة محمد الخطيب الشامي',
    register: 'سجل الان',
    courseInfo: 'معلومات عن الدورة',
    buyBook: 'اشتري الكتاب الآن',
    certificateSample: 'نموذج الشهادة',
    contactInquiry: 'للإتصال والإستفسار عبر واتساب',
    register_closed: 'التسجيل مغلق',
    register_closed_message: 'التسجيل مغلق حالياً. نعمل الآن على تجهيز دورة مجانية قادمة قريباً، فلا تنسَ متابعة الحساب لمعرفة كل جديد.',
    // Registration Form
    regTitle: 'استمارة التسجيل',
    name: 'الاسم',
    age: 'العمر',
    whatsapp: 'رقم الواتس اب',
    origin: 'الأصل (الدولة)',
    level: 'المستوى في اللغة العربية',
    beginner: 'مبتدئ',
    advanced: 'متقدم',
    schedule: 'حدد موعد تحديد المستوى مع الاستاذ عبر WhatsApp',
    date: 'التاريخ',
    time: 'الوقت',
    payNow: 'ادفع الان',
    paymentInfo: 'السعر: 290.000 روبية | 1971260489 BCA osama alkhatib',
    uploadProof: 'ارسل دليل التحويل',
    sendInfo: 'ارسل المعلومات',
    formSuccess: 'تم إرسال معلوماتك بنجاح! تواصل معنا على الواتساب لإكمال التسجيل.',
    whatsappContact: 'تواصل عبر الواتساب',
    uploadRequired: 'الرجاء إرفاق دليل التحويل.',
    // Course Info Modal
    courseInfoTitle: 'معلومات عن الدورة',
    courseDetails: '<p>دورة لغة عربية مجانية قريباً… التفاصيل ستُعلن هنا</p>',
    // Buy Book Modal
    buyBookTitle: 'اشتري الكتاب الآن',
    level1Book: 'كتاب المستوى الأول',
    level2Book: 'كتاب المستوى الثاني',
    bookPrice1_bw: 'شراء بـ 35.555 روبية',
    bookPrice1_bw_desc: 'هذا الكتاب بالأبيض والأسود',
    bookPrice1_color: 'شراء بـ 117.600 روبية',
    bookPrice1_color_desc: 'هذا الكتاب بالألوان',
    bookPrice2_bw: 'شراء بـ 35.500 روبية',
    bookPrice2_bw_desc: 'هذا الكتاب بالأبيض والأسود',
    bookPrice2_color: 'شراء بـ 117.600 روبية',
    bookPrice2_color_desc: 'هذا الكتاب بالألوان',
    bookCoverPlaceholder: 'صورة غلاف الكتاب',
    // Certificate Modal
    certificateTitle: 'نموذج الشهادة',
    imagePlaceholder: 'صورة الشهادة هنا',
    certificateDesc: 'كل مشارك سيحصل على مثل هذه الشهادة الرسمية فور اكمال مدة الكورس واجتياز الأختبار الشفهي والتحريري.',
    // Language Switcher
    lang_ar: 'العربية',
    lang_en: 'English',
    lang_id: 'Indonesia',
  },
  en: {
    header: 'Online Arabic Course with a Native Speaker',
    subtitle: 'Be part of a global community learning Arabic',
    teacherName: 'Ustadh Osama Muhammad Al-Khatib Al-Shami',
    register: 'Register Now',
    courseInfo: 'Course Information',
    buyBook: 'Buy the Book Now',
    certificateSample: 'Certificate Sample',
    contactInquiry: 'Contact & Inquiries via WhatsApp',
    register_closed: 'Registration Closed',
    register_closed_message: 'Registration is currently closed. We are now preparing for an upcoming free course, so don\'t forget to follow the account for all updates.',
    // Registration Form
    regTitle: 'Registration Form',
    name: 'Name',
    age: 'Age',
    whatsapp: 'WhatsApp Number',
    origin: 'Origin (Country)',
    level: 'Arabic Language Level',
    beginner: 'Beginner',
    advanced: 'Advanced',
    schedule: 'Schedule your level assessment with the teacher via WhatsApp',
    date: 'Date',
    time: 'Time',
    payNow: 'Pay Now',
    paymentInfo: 'Price: IDR 290,000 | 1971260489 BCA osama alkhatib',
    uploadProof: 'Send proof of transfer',
    sendInfo: 'Send Information',
    formSuccess: 'Your information has been sent successfully! Contact us on WhatsApp to complete your registration.',
    whatsappContact: 'Contact via WhatsApp',
    uploadRequired: 'Please attach proof of transfer.',
    // Course Info Modal
    courseInfoTitle: 'Course Information',
    courseDetails: '<p>Free Arabic language course coming soon... Details will be announced here.</p>',
    // Buy Book Modal
    buyBookTitle: 'Buy the Book Now',
    level1Book: 'Level 1 Book',
    level2Book: 'Level 2 Book',
    bookPrice1_bw: 'Buy for IDR 35,555',
    bookPrice1_bw_desc: 'This book is in black and white',
    bookPrice1_color: 'Buy for IDR 117,600',
    bookPrice1_color_desc: 'This book is in color',
    bookPrice2_bw: 'Buy for IDR 35,500',
    bookPrice2_bw_desc: 'This book is in black and white',
    bookPrice2_color: 'Buy for IDR 117,600',
    bookPrice2_color_desc: 'This book is in color',
    bookCoverPlaceholder: 'Book Cover',
    // Certificate Modal
    certificateTitle: 'Certificate Sample',
    imagePlaceholder: 'Certificate image here',
    certificateDesc: 'Every participant will receive an official certificate like this upon completing the course and passing the oral and written exams.',
    // Language Switcher
    lang_ar: 'العربية',
    lang_en: 'English',
    lang_id: 'Indonesia',
  },
  id: {
    header: 'Kursus Online Bahasa Arab bersama Native Speaker',
    subtitle: 'Jadilah bagian dari komunitas global yang belajar bahasa Arab',
    teacherName: 'Ustadz Osama Muhammad Al-Khatib Al-Shami',
    register: 'Daftar Sekarang',
    courseInfo: 'Informasi Kursus',
    buyBook: 'Beli Buku Sekarang',
    certificateSample: 'Contoh Sertifikat',
    contactInquiry: 'Kontak & Informasi via WhatsApp',
    register_closed: 'Pendaftaran Ditutup',
    register_closed_message: 'Pendaftaran saat ini ditutup. Kami sedang mempersiapkan kursus gratis yang akan datang, jadi jangan lupa ikuti akun kami untuk semua info terbaru.',
    // Registration Form
    regTitle: 'Formulir Pendaftaran',
    name: 'Nama',
    age: 'Usia',
    whatsapp: 'Nomor WhatsApp',
    origin: 'Asal (Negara)',
    level: 'Tingkat Bahasa Arab',
    beginner: 'Pemula',
    advanced: 'Mahir',
    schedule: 'Jadwalkan tes level Anda dengan guru via WhatsApp',
    date: 'Tanggal',
    time: 'Waktu',
    payNow: 'Bayar Sekarang',
    paymentInfo: 'Harga: IDR 290.000 | 1971260489 BCA osama alkhatib',
    uploadProof: 'Kirim bukti transfer',
    sendInfo: 'Kirim Informasi',
    formSuccess: 'Informasi Anda telah berhasil dikirim! Hubungi kami di WhatsApp untuk menyelesaikan pendaftaran Anda.',
    whatsappContact: 'Hubungi via WhatsApp',
    uploadRequired: 'Harap lampirkan bukti transfer.',
    // Course Info Modal
    courseInfoTitle: 'Informasi Kursus',
    courseDetails: '<p>Kursus bahasa Arab gratis segera hadir... Detail akan diumumkan di sini.</p>',
    // Buy Book Modal
    buyBookTitle: 'Beli Buku Sekarang',
    level1Book: 'Buku Level 1',
    level2Book: 'Buku Level 2',
    bookPrice1_bw: 'Beli seharga 35.555 IDR',
    bookPrice1_bw_desc: 'Buku ini hitam putih',
    bookPrice1_color: 'Beli seharga 117.600 IDR',
    bookPrice1_color_desc: 'Buku ini berwarna',
    bookPrice2_bw: 'Beli seharga 35.500 IDR',
    bookPrice2_bw_desc: 'Buku ini hitam putih',
    bookPrice2_color: 'Beli seharga 117.600 IDR',
    bookPrice2_color_desc: 'Buku ini berwarna',
    bookCoverPlaceholder: 'Sampul Buku',
    // Certificate Modal
    certificateTitle: 'Contoh Sertifikat',
    imagePlaceholder: 'Gambar sertifikat di sini',
    certificateDesc: 'Setiap peserta akan menerima sertifikat resmi seperti ini setelah menyelesaikan kursus dan lulus ujian lisan dan tulisan.',
    // Language Switcher
    lang_ar: 'العربية',
    lang_en: 'English',
    lang_id: 'Indonesia',
  },
};

type Lang = 'ar' | 'en' | 'id';
type Translations = typeof translations.ar;

const LanguageContext = createContext<{ lang: Lang; t: (key: keyof Translations) => string, setLang: (lang: Lang) => void }>({
  lang: 'ar',
  t: (key) => translations.ar[key],
  setLang: () => {},
});

const useLang = () => useContext(LanguageContext);

// --- MODAL COMPONENT ---
const Modal: React.FC<{ children: React.ReactNode, onClose: () => void }> = ({ children, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
        {children}
      </div>
    </div>
  );
};

// --- REGISTRATION FORM COMPONENT ---
const RegistrationForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    whatsapp: '',
    origin: '',
    level: 'beginner',
    date: '',
    time: ''
  });
  const [proof, setProof] = useState<File | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProof(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proof) {
      setError(t('uploadRequired'));
      return;
    }
    setError('');
    // Here you would typically send the data to a server
    console.log({ ...formData, proofOfPayment: proof });
    setIsSubmitted(true);
  };

  const getMinTime = () => {
    if (formData.date === '2024-09-28') return '16:00';
    return '06:00';
  };
  const getMaxTime = () => '22:00';

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  if (isSubmitted) {
    return (
      <div className="form-success-message">
        <h2>{t('regTitle')}</h2>
        <p>{t('formSuccess')}</p>
        <a href="https://wa.me/6285714397238" className="whatsapp-link" target="_blank" rel="noopener noreferrer">
          {t('whatsappContact')}
        </a>
      </div>
    );
  }

  return (
    <>
      <h2>{t('regTitle')}</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group"><label>{t('name')}</label><input type="text" name="name" required onChange={handleInputChange} /></div>
        <div className="form-group"><label>{t('age')}</label><input type="number" name="age" required onChange={handleInputChange} /></div>
        <div className="form-group"><label>{t('whatsapp')}</label><input type="tel" name="whatsapp" required onChange={handleInputChange} /></div>
        <div className="form-group"><label>{t('origin')}</label><input type="text" name="origin" required onChange={handleInputChange} /></div>
        <div className="form-group">
          <label htmlFor="level-select">{t('level')}</label>
          <select id="level-select" name="level" value={formData.level} onChange={handleInputChange}>
            <option value="beginner">{t('beginner')}</option>
            <option value="advanced">{t('advanced')}</option>
          </select>
        </div>
        <div className="form-group"><label>{t('schedule')}</label>
            <div className="date-time-group">
              <input type="date" name="date" required min={getTodayDate()} value={formData.date} onChange={handleInputChange} />
              <input type="time" name="time" required disabled={!formData.date} min={getMinTime()} max={getMaxTime()} onChange={handleInputChange} />
            </div>
        </div>

        {!showPayment && <button type="button" className="submit-btn" onClick={() => setShowPayment(true)}>{t('payNow')}</button>}

        {showPayment && (
            <div className="payment-section">
                <div className="payment-info">{t('paymentInfo')}</div>
                <div className="form-group"><label>{t('uploadProof')}</label><input type="file" required onChange={handleFileChange} accept="image/*" /></div>
            </div>
        )}
        
        {error && <p className="error-msg">{error}</p>}

        <button type="submit" className="submit-btn" disabled={!showPayment}>{t('sendInfo')}</button>
      </form>
    </>
  );
};

// --- OTHER MODAL COMPONENTS ---
const CourseInfoModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { t } = useLang();
    return (
      <Modal onClose={onClose}>
        <h2>{t('courseInfoTitle')}</h2>
        <div className="course-details-content" dangerouslySetInnerHTML={{ __html: t('courseDetails') }} />
      </Modal>
    );
};

const BuyBookModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { t } = useLang();
    const [selectedBook, setSelectedBook] = useState<'level1' | 'level2' | null>(null);
    const book1ImageUrl = "https://lh3.googleusercontent.com/d/17_vjpVQxpvcFfRNVsls9qZoULVk1eb6-";
    const book2ImageUrl = "https://lh3.googleusercontent.com/d/1zn9wVcRJNkKQhJ921VlSoFeJ10dXrDL7";

    return (
        <Modal onClose={onClose}>
            <h2>{t('buyBookTitle')}</h2>
            {!selectedBook ? (
                <div className="book-options">
                    <div className="book-card" onClick={() => setSelectedBook('level1')}>
                        <img src={book1ImageUrl} alt={t('level1Book')} className="book-cover-image" />
                        <h3>{t('level1Book')}</h3>
                    </div>
                    <div className="book-card" onClick={() => setSelectedBook('level2')}>
                        <img src={book2ImageUrl} alt={t('level2Book')} className="book-cover-image" />
                        <h3>{t('level2Book')}</h3>
                    </div>
                </div>
            ) : (
                <div className="price-options">
                    <h3>{selectedBook === 'level1' ? t('level1Book') : t('level2Book')}</h3>
                    
                    {selectedBook === 'level1' ? (
                        <>
                            <a href="https://id.shp.ee/zZj1s5u" target="_blank" rel="noopener noreferrer" className="main-btn">
                                <span>{t('bookPrice1_bw')}</span>
                                <small>{t('bookPrice1_bw_desc')}</small>
                            </a>
                            <a href="https://id.shp.ee/jH8nBFw" target="_blank" rel="noopener noreferrer" className="main-btn">
                                <span>{t('bookPrice1_color')}</span>
                                <small>{t('bookPrice1_color_desc')}</small>
                            </a>
                        </>
                    ) : (
                        <>
                            <a href="https://id.shp.ee/2ikZCpc" target="_blank" rel="noopener noreferrer" className="main-btn">
                                <span>{t('bookPrice2_bw')}</span>
                                <small>{t('bookPrice2_bw_desc')}</small>
                            </a>
                            <a href="https://id.shp.ee/jH8nBFw" target="_blank" rel="noopener noreferrer" className="main-btn">
                                <span>{t('bookPrice2_color')}</span>
                                <small>{t('bookPrice2_color_desc')}</small>
                            </a>
                        </>
                    )}
                    
                    <button className="secondary-btn" onClick={() => setSelectedBook(null)}>Back</button>
                </div>
            )}
        </Modal>
    );
};

const CertificateModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { t } = useLang();
    const certificateImageUrl1 = "https://lh3.googleusercontent.com/d/1suIrTOLhitDs_BYgNmOsqeiP0yg7u1ZC";
    const certificateImageUrl2 = "https://lh3.googleusercontent.com/d/1_3Ov6tWrtEcfv8oRT51BlcGf_XiURL_9";
    return (
        <Modal onClose={onClose}>
            <h2>{t('certificateTitle')}</h2>
            <img src={certificateImageUrl1} alt={t('certificateTitle')} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', marginBottom: '1rem' }} />
            <img src={certificateImageUrl2} alt={t('certificateTitle')} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} />
            <p style={{ marginTop: '1.5rem' }}>{t('certificateDesc')}</p>
        </Modal>
    );
};

const LanguageSwitcher = () => {
    const { lang, setLang, t } = useLang();
    const [isOpen, setIsOpen] = useState(false);
    const allLangs: Lang[] = ['ar', 'en', 'id'];
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const handleLangChange = (l: Lang) => {
        setLang(l);
        setIsOpen(false);
    };

    return (
        <div className="lang-switcher" ref={dropdownRef}>
            <button
                className="lang-btn active"
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {t(`lang_${lang}` as keyof Translations)}
                <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
            </button>
            {isOpen && (
                <div className="lang-dropdown">
                    {allLangs.map((l) => (
                        <button
                            key={l}
                            className={`lang-dropdown-item ${lang === l ? 'selected' : ''}`}
                            onClick={() => handleLangChange(l)}
                        >
                            {t(`lang_${l}` as keyof Translations)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};


// --- MAIN APP COMPONENT ---
function App() {
  const [lang, setLang] = useState<Lang>('ar');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = (key: keyof Translations) => translations[lang][key] || key;

  const renderModalContent = () => {
    switch (activeModal) {
      case 'register': return <RegistrationForm onClose={() => setActiveModal(null)} />;
      case 'info': return <CourseInfoModal onClose={() => setActiveModal(null)} />;
      case 'book': return <BuyBookModal onClose={() => setActiveModal(null)} />;
      case 'certificate': return <CertificateModal onClose={() => setActiveModal(null)} />;
      default: return null;
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
        <div className="app-container">
            <h1 className="main-header">{t('header')}</h1>
            <p className="subtitle">{t('subtitle')}</p>
            <div className="teacher-info">
              <span className="material-symbols-outlined">school</span>
              <span>{t('teacherName')}</span>
            </div>
            <LanguageSwitcher />
            <p className="registration-closed-message">{t('register_closed_message')}</p>
            <div className="button-grid">
                <button id="register-btn" className="main-btn" disabled>
                  <span className="material-symbols-outlined">lock</span>
                  {t('register_closed')}
                </button>
                <button className="main-btn" onClick={() => setActiveModal('info')}>
                  <span className="material-symbols-outlined">info</span>
                  {t('courseInfo')}
                </button>
                <button className="main-btn" onClick={() => setActiveModal('book')}>
                  <span className="material-symbols-outlined">shopping_cart</span>
                  {t('buyBook')}
                </button>
                <button className="main-btn" onClick={() => setActiveModal('certificate')}>
                  <span className="material-symbols-outlined">workspace_premium</span>
                  {t('certificateSample')}
                </button>
            </div>
            <a href="https://wa.me/6285714397238" className="secondary-btn contact-link" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">chat</span>
              {t('contactInquiry')}
            </a>
        </div>
        {activeModal && (
            <Modal onClose={() => setActiveModal(null)}>
                {renderModalContent()}
            </Modal>
        )}
    </LanguageContext.Provider>
  );
}

export default App;
