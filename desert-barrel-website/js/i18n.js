// Desert Barrel — i18n (English default, Arabic, Spanish)
// Loaded before main.js. Exposes window.DesertBarrelI18N.

(function () {
  var SUPPORTED_LANGS = ['en', 'ar', 'es'];
  var DEFAULT_LANG = 'en';
  var STORAGE_KEY = 'db_lang';

  var translations = {
    en: {
      'meta.title': 'Desert Barrel | Premium BBQ Smoker Barrels — United Arab Emirates',
      'meta.description': "Desert Barrel: premium stainless steel smoker barrels. Delivery across the United Arab Emirates. Prices in AED.",
      'brand.tagline': 'UAE · Premium BBQ Smoker Barrels',
      'nav.catalog': 'Catalog',
      'nav.about': 'About',
      'nav.howtobuy': 'How to Buy',
      'nav.contact': 'Contact',
      'hero.eyebrow': 'Made for the desert. Made for grilling.',
      'hero.title': 'The authentic taste of the desert,<br>in your own smoker barrel.',
      'hero.subtitle': 'Stainless steel smoker barrels, designed and assembled in the United Arab Emirates. From tabletop size to the big barrel for the whole family.',
      'hero.cta.catalog': 'View Catalog',
      'hero.cta.contact': 'Talk to Sales',
      'hero.badge1': '🔥 Heavy-gauge stainless steel',
      'hero.badge2': '🐫 Design inspired by the Arabian desert',
      'hero.badge3': '🚚 Delivery across the UAE',
      'hero.badge4': '💳 Secure online or cash-on-delivery payment',
      'catalog.eyebrow': 'Pilot catalog',
      'catalog.title': 'Choose your Desert Barrel size',
      'catalog.subtitle': 'All prices are shown in United Arab Emirates Dirhams (AED). Pilot demo page — final prices subject to confirmation.',
      'product.badge.sale': 'Sale',
      'product.buy': 'Buy Now',
      'p1.desc': 'Compact tabletop barrel, ideal for 2 to 4 people. Perfect for terraces and desert camping trips.',
      'p1.spec1': 'Height: 45 cm',
      'p1.spec2': 'Includes grill grate and lid',
      'p1.spec3': 'Stainless steel',
      'p2.desc': 'Medium barrel with a set of 6 accessories: tongs, brush, gloves, thermometer and more. Ready to enjoy.',
      'p2.spec1': 'Height: 65 cm',
      'p2.spec2': '6 accessories included',
      'p2.spec3': 'Stainless steel',
      'p3.desc': 'Large barrel with hook, ten hangers and a protective cover. The complete essence of barrel smoking.',
      'p3.spec1': 'Height: 85 cm',
      'p3.spec2': 'Hook + 10 hangers + cover',
      'p3.spec3': 'Stainless steel',
      'p4.desc': 'Our largest barrel, for businesses and large family gatherings. Maximum smoking capacity.',
      'p4.spec1': 'Height: 105 cm',
      'p4.spec2': 'Extra-large capacity',
      'p4.spec3': 'Reinforced stainless steel',
      'lifestyle.eyebrow': 'Real moments',
      'lifestyle.title': 'Made to gather people around the fire',
      'lifestyle.caption1': 'Low and slow smoking, straight off the hook.',
      'lifestyle.caption2': 'Every barrel is built for sharing.',
      'about.eyebrow': 'Our story',
      'about.title': 'Designed in the desert, built to last.',
      'about.p1': "Desert Barrel was born in the United Arab Emirates with a simple idea: bring the ritual of fire and smoke to every home, restaurant and campsite in the country. Each barrel is made from heavy-gauge stainless steel, built to withstand the Gulf's extreme heat and to last for years.",
      'about.p2': 'This is a <strong>pilot demo page</strong> — the catalog, prices and payment portal are for testing purposes, used to validate the shopping experience ahead of the official launch.',
      'howtobuy.eyebrow': 'Payment portal',
      'howtobuy.title': 'How to buy from Desert Barrel',
      'howtobuy.subtitle': 'Choose your barrel, fill in your shipping details and pay securely. We accept the following payment methods:',
      'pay.card.title': 'Credit / debit card',
      'pay.card.desc': 'Visa, Mastercard and local UAE cards.',
      'pay.transfer.title': 'Bank transfer',
      'pay.transfer.desc': "You'll receive the bank details after confirming your order.",
      'pay.cod.title': 'Cash on delivery',
      'pay.cod.desc': 'Pay in cash when your barrel arrives in Dubai, Abu Dhabi and Sharjah.',
      'demo.note': '⚠️ Demo mode: this payment portal simulates the purchase process. No real transactions are processed and no card data is stored.',
      'cta.title': 'Ready for your Desert Barrel?',
      'cta.subtitle': "Write to us or call us and we'll help you choose the ideal size for your event.",
      'cta.call.label': '📞 Call:',
      'footer.brand.desc': 'Premium BBQ smoker barrels, built for the climate and lifestyle of the United Arab Emirates.',
      'footer.nav.title': 'Navigation',
      'footer.contact.title': 'Contact',
      'footer.contact.support': 'Customer Service:',
      'footer.contact.address': '📍 Dubai, United Arab Emirates',
      'footer.social.title': 'Follow us',
      'footer.copyright': 'Desert Barrel. All rights reserved. · Pilot demo page.',
      'modal.title': 'Secure Payment Portal',
      'modal.buying': 'You are buying:',
      'modal.qty': 'Quantity',
      'modal.total': 'Total',
      'modal.shipping.legend': 'Shipping Details',
      'modal.field.fullname': 'Full name',
      'modal.field.fullname.placeholder': 'Your name',
      'modal.field.email': 'Email address',
      'modal.field.email.placeholder': 'youremail@email.com',
      'modal.field.phone': 'Phone',
      'modal.field.phone.placeholder': '+971 5X XXX XXXX',
      'modal.field.emirate': 'Emirate',
      'modal.field.emirate.placeholder': 'Select...',
      'emirate.dubai': 'Dubai',
      'emirate.abudhabi': 'Abu Dhabi',
      'emirate.sharjah': 'Sharjah',
      'emirate.ajman': 'Ajman',
      'emirate.rak': 'Ras Al Khaimah',
      'emirate.fujairah': 'Fujairah',
      'emirate.uaq': 'Umm Al Quwain',
      'modal.field.address': 'Delivery address',
      'modal.field.address.placeholder': 'Street, building, villa/apartment number',
      'modal.payment.legend': 'Payment Method',
      'modal.pay.card': '💳 Card',
      'modal.pay.cod': '📦 Cash on Delivery',
      'modal.pay.transfer': '🏦 Transfer',
      'modal.card.name': 'Name on card',
      'modal.card.name.placeholder': 'As shown on the card',
      'modal.card.number': 'Card number',
      'modal.card.expiry': 'Expiry',
      'modal.card.cvv': 'CVV',
      'modal.card.secure': '🔒 Simulated, encrypted connection — demo page, no real charges are made.',
      'modal.pay.button': 'Pay Now',
      'modal.card.invalid': 'Please fill in the card details correctly (demo).',
      'modal.processing': 'Processing your payment securely...',
      'modal.success.title': 'Order confirmed!',
      'modal.success.thanks': 'Thank you for your purchase. Your order number is:',
      'modal.success.followup': 'Marco Toala will contact you at the number provided to arrange delivery.',
      'modal.done': 'Done'
    },

    ar: {
      'meta.title': 'ديزرت باريل | براميل شواء وتدخين فاخرة — الإمارات العربية المتحدة',
      'meta.description': 'ديزرت باريل: براميل شواء وتدخين فاخرة من الفولاذ المقاوم للصدأ. التوصيل إلى جميع أنحاء الإمارات العربية المتحدة. الأسعار بالدرهم الإماراتي.',
      'brand.tagline': 'الإمارات · براميل شواء فاخرة',
      'nav.catalog': 'الكتالوج',
      'nav.about': 'من نحن',
      'nav.howtobuy': 'كيفية الشراء',
      'nav.contact': 'اتصل بنا',
      'hero.eyebrow': 'صُنع من أجل الصحراء. صُنع من أجل الشواء.',
      'hero.title': 'المذاق الأصيل للصحراء،<br>في برميل الشواء الخاص بك.',
      'hero.subtitle': 'براميل تدخين من الفولاذ المقاوم للصدأ، مصممة ومجمّعة في دولة الإمارات العربية المتحدة. من الحجم الصغير لطاولتك إلى البرميل الكبير لكل العائلة.',
      'hero.cta.catalog': 'عرض الكتالوج',
      'hero.cta.contact': 'تحدث مع المبيعات',
      'hero.badge1': '🔥 فولاذ مقاوم للصدأ سميك',
      'hero.badge2': '🐫 تصميم مستوحى من الصحراء العربية',
      'hero.badge3': '🚚 التوصيل إلى جميع أنحاء الإمارات',
      'hero.badge4': '💳 دفع آمن عبر الإنترنت أو عند الاستلام',
      'catalog.eyebrow': 'كتالوج تجريبي',
      'catalog.title': 'اختر حجم برميل ديزرت باريل الخاص بك',
      'catalog.subtitle': 'جميع الأسعار موضحة بالدرهم الإماراتي (AED). صفحة تجريبية للعرض التوضيحي — الأسعار النهائية قابلة للتأكيد.',
      'product.badge.sale': 'عرض',
      'product.buy': 'اشتر الآن',
      'p1.desc': 'برميل صغير لسطح الطاولة، مثالي لعدد 2 إلى 4 أشخاص. مثالي للشرفات ورحلات التخييم في الصحراء.',
      'p1.spec1': 'الارتفاع: 45 سم',
      'p1.spec2': 'يشمل شبكة الشواء والغطاء',
      'p1.spec3': 'فولاذ مقاوم للصدأ',
      'p2.desc': 'برميل متوسط الحجم مع مجموعة من 6 إكسسوارات: ملقط، فرشاة، قفازات، ميزان حرارة والمزيد. جاهز للاستخدام.',
      'p2.spec1': 'الارتفاع: 65 سم',
      'p2.spec2': 'يشمل 6 إكسسوارات',
      'p2.spec3': 'فولاذ مقاوم للصدأ',
      'p3.desc': 'برميل كبير مع خطاف، وعشرة معلّقات، وغطاء واقٍ. التجربة الكاملة للتدخين بالبرميل.',
      'p3.spec1': 'الارتفاع: 85 سم',
      'p3.spec2': 'خطاف + 10 معلّقات + غطاء',
      'p3.spec3': 'فولاذ مقاوم للصدأ',
      'p4.desc': 'أكبر براميلنا، مخصص للأعمال التجارية والتجمعات العائلية الكبيرة. أقصى سعة للتدخين.',
      'p4.spec1': 'الارتفاع: 105 سم',
      'p4.spec2': 'سعة كبيرة جدًا',
      'p4.spec3': 'فولاذ مقاوم للصدأ معزز',
      'lifestyle.eyebrow': 'لحظات حقيقية',
      'lifestyle.title': 'صُنع ليجمع الناس حول النار',
      'lifestyle.caption1': 'تدخين بطيء وعلى نار هادئة، مباشرة من الخطاف.',
      'lifestyle.caption2': 'كل برميل صُمم لمشاركته مع من تحب.',
      'about.eyebrow': 'قصتنا',
      'about.title': 'صُممت في الصحراء، وصُنعت لتدوم.',
      'about.p1': 'وُلدت ديزرت باريل في دولة الإمارات العربية المتحدة من فكرة بسيطة: نقل طقوس النار والدخان إلى كل منزل ومطعم ومخيم في البلاد. يُصنع كل برميل من فولاذ مقاوم للصدأ سميك، مصمم لتحمل الحرارة الشديدة في الخليج وليدوم لسنوات.',
      'about.p2': 'هذه <strong>صفحة تجريبية للعرض التوضيحي</strong> — الكتالوج والأسعار وبوابة الدفع لأغراض الاختبار فقط، وتُستخدم للتحقق من تجربة الشراء قبل الإطلاق الرسمي.',
      'howtobuy.eyebrow': 'بوابة الدفع',
      'howtobuy.title': 'كيفية الشراء من ديزرت باريل',
      'howtobuy.subtitle': 'اختر برميلك، وأدخل بيانات الشحن، وادفع بأمان. نقبل طرق الدفع التالية:',
      'pay.card.title': 'بطاقة ائتمان / خصم',
      'pay.card.desc': 'فيزا وماستركارد والبطاقات المحلية الإماراتية.',
      'pay.transfer.title': 'تحويل بنكي',
      'pay.transfer.desc': 'ستصلك بيانات الحساب البنكي بعد تأكيد طلبك.',
      'pay.cod.title': 'الدفع عند الاستلام',
      'pay.cod.desc': 'ادفع نقدًا عند استلام برميلك في دبي وأبوظبي والشارقة.',
      'demo.note': '⚠️ وضع العرض التوضيحي: تحاكي بوابة الدفع هذه عملية الشراء. لا تتم معالجة أي معاملات حقيقية ولا يتم تخزين بيانات البطاقة.',
      'cta.title': 'هل أنت مستعد لبرميل ديزرت باريل الخاص بك؟',
      'cta.subtitle': 'راسلنا أو اتصل بنا وسنساعدك على اختيار الحجم المثالي لمناسبتك.',
      'cta.call.label': '📞 اتصل:',
      'footer.brand.desc': 'براميل شواء وتدخين فاخرة، مصممة لتناسب مناخ وأسلوب حياة دولة الإمارات العربية المتحدة.',
      'footer.nav.title': 'التنقل',
      'footer.contact.title': 'اتصل بنا',
      'footer.contact.support': 'خدمة العملاء:',
      'footer.contact.address': '📍 دبي، الإمارات العربية المتحدة',
      'footer.social.title': 'تابعنا',
      'footer.copyright': 'ديزرت باريل. جميع الحقوق محفوظة. · صفحة تجريبية للعرض التوضيحي.',
      'modal.title': 'بوابة الدفع الآمنة',
      'modal.buying': 'أنت تشتري:',
      'modal.qty': 'الكمية',
      'modal.total': 'الإجمالي',
      'modal.shipping.legend': 'بيانات الشحن',
      'modal.field.fullname': 'الاسم الكامل',
      'modal.field.fullname.placeholder': 'اسمك',
      'modal.field.email': 'البريد الإلكتروني',
      'modal.field.email.placeholder': 'بريدك@email.com',
      'modal.field.phone': 'الهاتف',
      'modal.field.phone.placeholder': '+971 5X XXX XXXX',
      'modal.field.emirate': 'الإمارة',
      'modal.field.emirate.placeholder': 'اختر...',
      'emirate.dubai': 'دبي',
      'emirate.abudhabi': 'أبوظبي',
      'emirate.sharjah': 'الشارقة',
      'emirate.ajman': 'عجمان',
      'emirate.rak': 'رأس الخيمة',
      'emirate.fujairah': 'الفجيرة',
      'emirate.uaq': 'أم القيوين',
      'modal.field.address': 'عنوان التسليم',
      'modal.field.address.placeholder': 'الشارع، المبنى، رقم الفيلا/الشقة',
      'modal.payment.legend': 'طريقة الدفع',
      'modal.pay.card': '💳 بطاقة',
      'modal.pay.cod': '📦 عند الاستلام',
      'modal.pay.transfer': '🏦 تحويل بنكي',
      'modal.card.name': 'الاسم على البطاقة',
      'modal.card.name.placeholder': 'كما يظهر على البطاقة',
      'modal.card.number': 'رقم البطاقة',
      'modal.card.expiry': 'تاريخ الانتهاء',
      'modal.card.cvv': 'رمز التحقق CVV',
      'modal.card.secure': '🔒 اتصال مشفّر تجريبي — صفحة عرض توضيحي، لا يتم إجراء أي عمليات دفع حقيقية.',
      'modal.pay.button': 'ادفع الآن',
      'modal.card.invalid': 'يرجى إدخال بيانات البطاقة بشكل صحيح (تجريبي).',
      'modal.processing': 'جارٍ معالجة دفعتك بأمان...',
      'modal.success.title': 'تم تأكيد الطلب!',
      'modal.success.thanks': 'شكرًا لشرائك. رقم طلبك هو:',
      'modal.success.followup': 'سيتواصل معك ماركو تووالا على الرقم المُقدَّم لتنسيق التسليم.',
      'modal.done': 'تم'
    },

    es: {
      'meta.title': 'Desert Barrel | Barriles Asadores Premium — Emiratos Árabes Unidos',
      'meta.description': 'Desert Barrel: barriles asadores y ahumadores premium, fabricados en acero inoxidable. Envíos en Emiratos Árabes Unidos. Precios en AED.',
      'brand.tagline': 'UAE · Barriles Asadores Premium',
      'nav.catalog': 'Catálogo',
      'nav.about': 'Nosotros',
      'nav.howtobuy': 'Cómo Comprar',
      'nav.contact': 'Contacto',
      'hero.eyebrow': 'Hecho para el desierto. Hecho para asar.',
      'hero.title': 'El auténtico sabor del desierto,<br>en tu propio barril asador.',
      'hero.subtitle': 'Barriles ahumadores en acero inoxidable, diseñados y ensamblados en Emiratos Árabes Unidos. Del tamaño de mesa al barril grande para toda la familia.',
      'hero.cta.catalog': 'Ver Catálogo',
      'hero.cta.contact': 'Hablar con Ventas',
      'hero.badge1': '🔥 Acero inoxidable calibre grueso',
      'hero.badge2': '🐫 Diseño inspirado en el desierto árabe',
      'hero.badge3': '🚚 Envíos a todo EAU',
      'hero.badge4': '💳 Pago seguro en línea o contra entrega',
      'catalog.eyebrow': 'Catálogo piloto',
      'catalog.title': 'Elige el tamaño de tu Desert Barrel',
      'catalog.subtitle': 'Todos los precios están expresados en Dirhams de Emiratos Árabes Unidos (AED). Página piloto de demostración — precios sujetos a confirmación final.',
      'product.badge.sale': 'Oferta',
      'product.buy': 'Comprar ahora',
      'p1.desc': 'Barril compacto de mesa, ideal para 2 a 4 personas. Perfecto para terrazas y campamentos en el desierto.',
      'p1.spec1': 'Altura: 45 cm',
      'p1.spec2': 'Incluye parrilla y tapa',
      'p1.spec3': 'Acero inoxidable',
      'p2.desc': 'Barril mediano con set de 6 accesorios: pinzas, cepillo, guantes, termómetro y más. Listo para disfrutar.',
      'p2.spec1': 'Altura: 65 cm',
      'p2.spec2': '6 accesorios incluidos',
      'p2.spec3': 'Acero inoxidable',
      'p3.desc': 'Barril grande con gancho, diez colgadores y funda protectora. La esencia completa del ahumado en barril.',
      'p3.spec1': 'Altura: 85 cm',
      'p3.spec2': 'Gancho + 10 colgadores + funda',
      'p3.spec3': 'Acero inoxidable',
      'p4.desc': 'Nuestro barril más grande, para negocios y reuniones familiares numerosas. Máxima capacidad de ahumado.',
      'p4.spec1': 'Altura: 105 cm',
      'p4.spec2': 'Capacidad extra grande',
      'p4.spec3': 'Acero inoxidable reforzado',
      'lifestyle.eyebrow': 'Momentos reales',
      'lifestyle.title': 'Hecho para reunir a los tuyos alrededor del fuego',
      'lifestyle.caption1': 'Ahumado lento y a fuego bajo, directo del gancho.',
      'lifestyle.caption2': 'Cada barril está hecho para compartir.',
      'about.eyebrow': 'Nuestra historia',
      'about.title': 'Diseñados en el desierto, hechos para durar.',
      'about.p1': 'Desert Barrel nace en Emiratos Árabes Unidos con una idea simple: llevar el ritual del fuego y el humo a cada casa, restaurante y campamento del país. Cada barril se fabrica en acero inoxidable de calibre grueso, pensado para soportar el calor extremo del Golfo y ofrecer años de uso.',
      'about.p2': 'Esta es una <strong>página piloto de demostración</strong> — el catálogo, precios y portal de pago son de prueba y sirven para validar la experiencia de compra antes del lanzamiento oficial.',
      'howtobuy.eyebrow': 'Portal de pago',
      'howtobuy.title': 'Cómo comprar en Desert Barrel',
      'howtobuy.subtitle': 'Elige tu barril, completa tus datos de envío y paga de forma segura. Aceptamos las siguientes formas de pago:',
      'pay.card.title': 'Tarjeta de crédito / débito',
      'pay.card.desc': 'Visa, Mastercard y tarjetas locales de EAU.',
      'pay.transfer.title': 'Transferencia bancaria',
      'pay.transfer.desc': 'Recibirás los datos bancarios tras confirmar tu pedido.',
      'pay.cod.title': 'Pago contra entrega',
      'pay.cod.desc': 'Paga en efectivo al recibir tu barril en Dubái, Abu Dabi y Sharjah.',
      'demo.note': '⚠️ Modo demostración: este portal de pago simula el proceso de compra. No se procesan transacciones reales ni se almacenan datos de tarjeta.',
      'cta.title': '¿Listo para tu Desert Barrel?',
      'cta.subtitle': 'Escríbenos o llámanos y te ayudamos a elegir el tamaño ideal para tu evento.',
      'cta.call.label': '📞 Llamar:',
      'footer.brand.desc': 'Barriles asadores y ahumadores premium, fabricados para el clima y el estilo de vida de Emiratos Árabes Unidos.',
      'footer.nav.title': 'Navegación',
      'footer.contact.title': 'Contacto',
      'footer.contact.support': 'Atención al cliente:',
      'footer.contact.address': '📍 Dubái, Emiratos Árabes Unidos',
      'footer.social.title': 'Síguenos',
      'footer.copyright': 'Desert Barrel. Todos los derechos reservados. · Página piloto de demostración.',
      'modal.title': 'Portal de Pago Seguro',
      'modal.buying': 'Estás comprando:',
      'modal.qty': 'Cantidad',
      'modal.total': 'Total',
      'modal.shipping.legend': 'Datos de envío',
      'modal.field.fullname': 'Nombre completo',
      'modal.field.fullname.placeholder': 'Tu nombre',
      'modal.field.email': 'Correo electrónico',
      'modal.field.email.placeholder': 'tucorreo@email.com',
      'modal.field.phone': 'Teléfono',
      'modal.field.phone.placeholder': '+971 5X XXX XXXX',
      'modal.field.emirate': 'Emirato',
      'modal.field.emirate.placeholder': 'Selecciona...',
      'emirate.dubai': 'Dubái',
      'emirate.abudhabi': 'Abu Dabi',
      'emirate.sharjah': 'Sharjah',
      'emirate.ajman': 'Ajman',
      'emirate.rak': 'Ras Al Khaimah',
      'emirate.fujairah': 'Fujairah',
      'emirate.uaq': 'Umm Al Quwain',
      'modal.field.address': 'Dirección de entrega',
      'modal.field.address.placeholder': 'Calle, edificio, número de villa/apto',
      'modal.payment.legend': 'Método de pago',
      'modal.pay.card': '💳 Tarjeta',
      'modal.pay.cod': '📦 Contra entrega',
      'modal.pay.transfer': '🏦 Transferencia',
      'modal.card.name': 'Nombre en la tarjeta',
      'modal.card.name.placeholder': 'Como aparece en la tarjeta',
      'modal.card.number': 'Número de tarjeta',
      'modal.card.expiry': 'Vencimiento',
      'modal.card.cvv': 'CVV',
      'modal.card.secure': '🔒 Conexión simulada y cifrada — página de demostración, no se realizan cargos reales.',
      'modal.pay.button': 'Pagar ahora',
      'modal.card.invalid': 'Por favor completa correctamente los datos de la tarjeta (demo).',
      'modal.processing': 'Procesando tu pago de forma segura...',
      'modal.success.title': '¡Pedido confirmado!',
      'modal.success.thanks': 'Gracias por tu compra. Tu número de orden es:',
      'modal.success.followup': 'Marco Toala se pondrá en contacto contigo al número indicado para coordinar la entrega.',
      'modal.done': 'Listo'
    }
  };

  function t(key, lang) {
    var dict = translations[lang] || translations[DEFAULT_LANG];
    if (dict[key] !== undefined) return dict[key];
    return translations[DEFAULT_LANG][key] !== undefined ? translations[DEFAULT_LANG][key] : key;
  }

  function getLang() {
    return document.documentElement.getAttribute('lang') || DEFAULT_LANG;
  }

  function formatPrice(amount, lang) {
    var num = Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (lang === 'ar') return num + ' د.إ';
    if (lang === 'es') return 'Dhs. ' + num + ' AED';
    return 'AED ' + num;
  }

  function updateProductPrices(lang) {
    var cards = document.querySelectorAll('.product-card');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var price = parseFloat(card.getAttribute('data-price'));
      var oldPriceAttr = card.getAttribute('data-old-price');
      var newEl = card.querySelector('.price-new');
      if (newEl && !isNaN(price)) newEl.textContent = formatPrice(price, lang);
      var oldEl = card.querySelector('.price-old');
      if (oldEl) {
        if (oldPriceAttr) {
          oldEl.textContent = formatPrice(parseFloat(oldPriceAttr), lang);
          oldEl.hidden = false;
        } else {
          oldEl.hidden = true;
        }
      }
    }
  }

  function applyLanguage(lang) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) lang = DEFAULT_LANG;

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    var textNodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < textNodes.length; i++) {
      var el = textNodes[i];
      el.textContent = t(el.getAttribute('data-i18n'), lang);
    }

    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlNodes.length; j++) {
      var elh = htmlNodes[j];
      elh.innerHTML = t(elh.getAttribute('data-i18n-html'), lang);
    }

    var placeholderNodes = document.querySelectorAll('[data-i18n-placeholder]');
    for (var k = 0; k < placeholderNodes.length; k++) {
      var elp = placeholderNodes[k];
      elp.setAttribute('placeholder', t(elp.getAttribute('data-i18n-placeholder'), lang));
    }

    updateProductPrices(lang);

    document.title = t('meta.title', lang);
    var metaDesc = document.getElementById('metaDescription');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description', lang));

    var langButtons = document.querySelectorAll('.lang-switch button');
    for (var b = 0; b < langButtons.length; b++) {
      var btn = langButtons[b];
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore (private browsing, etc.) */ }

    document.dispatchEvent(new CustomEvent('db:languagechange', { detail: { lang: lang } }));
  }

  function getInitialLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    if (saved && SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
    return DEFAULT_LANG;
  }

  window.DesertBarrelI18N = {
    t: t,
    formatPrice: formatPrice,
    getLang: getLang,
    applyLanguage: applyLanguage,
    SUPPORTED_LANGS: SUPPORTED_LANGS,
    DEFAULT_LANG: DEFAULT_LANG
  };

  var langButtonsInit = document.querySelectorAll('.lang-switch button');
  for (var x = 0; x < langButtonsInit.length; x++) {
    langButtonsInit[x].addEventListener('click', function (evt) {
      applyLanguage(evt.currentTarget.getAttribute('data-lang'));
    });
  }

  applyLanguage(getInitialLang());
})();
