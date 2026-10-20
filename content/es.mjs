// Español (neutro). Claves como en en.mjs.
export default (cfg) => {
  const provider = cfg.aiProvider
    ? `${cfg.aiProvider}`
    : 'el proveedor de IA indicado en la pantalla de consentimiento de la app';
  const updated = new Date(`${cfg.lastUpdated}T12:00:00Z`).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const mail = `<a href="mailto:${cfg.contactEmail}">${cfg.contactEmail}</a>`;
  return {
    nav: { label: 'Páginas', language: 'Idioma', home: 'Inicio', support: 'Ayuda', privacy: 'Privacidad', deletion: 'Eliminar cuenta' },
    footer: {
      disclaimer:
        'Reverse Steps guarda un registro de tus propios pasos. No es un manual de reparación y no comprueba si una reparación es segura o correcta.',
      contact: 'Preguntas y comentarios:',
    },
    home: {
      title: 'Reverse Steps – fotografía el desmontaje, vuelve a armar en orden inverso',
      description:
        'Toma una foto antes de cada paso mientras desarmas algo. Cuando llegue el momento de volver a armarlo, Reverse Steps te muestra los mismos pasos en orden inverso.',
      eyebrow: 'Para quien alguna vez se quedó con un tornillo de sobra',
      h1: 'Desármalo en fotos. Vuelve a armarlo en el orden correcto.',
      lede:
        'Toma una foto antes de cada paso del desmontaje, añade las piezas que quitaste y una nota breve. Al volver a armar, Reverse Steps te guía por tus propios pasos, del último al primero, con una tarjeta grande cada vez.',
      iosBeta: 'Beta para iPhone (TestFlight)',
      androidBeta: 'Beta para Android (Google Play)',
      iosLive: 'Descargar en el App Store',
      androidLive: 'Disponible en Google Play',
      soon: 'pronto',
      storesNote: `Gratis y sin anuncios. Inicia sesión gratis (código por email, Google o Apple) y tienes ${cfg.quota.total} desmontajes gratuitos. Las fotos se quedan en tu teléfono.`,
      illustrationAlt: 'Cuatro fotos de un desmontaje tomadas en orden del 1 al 4 y luego mostradas de nuevo del 4 al 1 para el montaje.',
      illustrationTop: 'Desarmar',
      illustrationArrow: 'Volver a armar: 4 → 1',
      stepsTitle: 'Cómo funciona',
      steps: [
        { t: 'Primero la foto, luego desatornillas', d: 'Crea un proyecto, fotografía cómo está el objeto ahora y luego toma una foto antes de cada cambio. Los pasos se numeran solos.' },
        { t: 'Añade piezas y una nota', d: 'Fotografía los tornillos y soportes que quitaste y anota por texto o por voz: «dos tornillos cortos, clip del cable hacia arriba».' },
        { t: 'Vuelve a armar en orden inverso', d: 'Cambia al modo montaje: tarjetas a pantalla completa del último paso al primero. Marca cada una y, al final, compara con la foto inicial.' },
      ],
      videoTitle: 'Míralo en 20 segundos',
      videoSoon: 'Video de demostración muy pronto',
      videoNote: ' — un desmontaje real, un montón de tornillos y la app recorriendo seis pasos hacia atrás.',
      whyTitle: '¿Por qué no usar simplemente la galería?',
      why: [
        { t: 'Pasos, no un montón de fotos', d: 'Cada proyecto tiene sus propios pasos numerados, separados del resto de tus fotos.' },
        { t: 'Las piezas van con su paso', d: 'Los tornillos que quitaste quedan unidos al paso del que salieron, junto con tu nota.' },
        { t: 'El orden se invierte solo', d: 'Sin retroceder por la galería intentando adivinar qué fue primero.' },
        { t: 'Privado desde el principio', d: 'Las fotos, las notas de voz y las notas de texto se quedan en el dispositivo. Exporta un ZIP o guarda en tu galería cuando quieras.' },
        { t: 'Sugerencias de montaje opcionales', d: `Si las activas, la app propone un breve texto para cada paso a partir de tus propias fotos. Pueden equivocarse, por eso la foto siempre se muestra al lado.` },
        { t: 'iPhone y Android', d: 'Gratis, sin anuncios, en español, inglés, polaco, ruso, alemán y francés.' },
      ],
      honestTitle: 'Lo que no hace',
      honest:
        'Reverse Steps registra lo que hiciste; no enseña a reparar ni garantiza un montaje correcto. Sigue las instrucciones del fabricante, apaga y desconecta la corriente, y no abras baterías, aparatos de gas ni equipos de alta tensión.',
      more: 'Dónde se guardan las fotos, exportación, desmontajes gratuitos: consulta <a href="{support}">Ayuda</a>.',
    },
    support: {
      title: 'Reverse Steps – Ayuda y preguntas frecuentes',
      description: 'Respuestas sobre almacenamiento, exportación, eliminar la app o tu cuenta y los desmontajes gratuitos en Reverse Steps.',
      eyebrow: 'Ayuda',
      h1: 'Ayuda y preguntas frecuentes',
      lede: `¿No encuentras la respuesta? Escribe a ${mail} en inglés, polaco o ruso. En la app también puedes usar Ajustes → Enviar comentarios.`,
      faq: [
        {
          q: '¿Dónde se guardan mis fotos?',
          a: `<p>Solo en tu teléfono, dentro del almacenamiento privado de la app. No se suben a nuestro servidor ni a ninguna nube. Las únicas excepciones son una exportación que inicias tú y las sugerencias de montaje, si las activas (ver más abajo).</p>`,
        },
        {
          q: '¿Cómo exporto un proyecto?',
          a: `<p>Abre el proyecto → Exportar. Puedes guardar un ZIP con todas las fotos y notas en el orden de los pasos (ábrelo en tu PC o guárdalo en tus archivos) o guardar las fotos en un álbum de tu galería.</p>`,
        },
        {
          q: '¿Qué pasa si elimino la app?',
          a: `<p>Todos los proyectos se eliminan con ella, porque solo existen en el teléfono. Exporta primero los que quieras conservar. No hay sincronización, así que un teléfono nuevo también empieza vacío: pasa los proyectos mediante la exportación.</p>`,
        },
        {
          q: '¿Qué pasa si elimino mi cuenta?',
          a: `<p>Eliminamos de nuestro servidor tu cuenta, tu dirección de email y el ID de tu proveedor de inicio de sesión. Se conserva un recuento anónimo de los desmontajes empezados en tu dispositivo, al que se le quita el vínculo con tu cuenta, para que una cuenta nueva no reinicie el límite gratuito. Los proyectos del teléfono se quedan donde están. Consulta <a href="../account-deletion/">Eliminar cuenta</a>.</p>`,
        },
        {
          q: '¿Cuántos desmontajes gratuitos tengo?',
          a: `<p>Por ahora, ${cfg.quota.total} por cuenta. Para usar la app necesitas iniciar sesión gratis; la primera vez que inicias sesión se crea la cuenta. Puedes iniciar sesión con email (un código de un solo uso y un enlace, sin contraseña), con Google o con Apple. La comprobación se hace solo al empezar un desmontaje nuevo: un proyecto ya empezado nunca se bloquea, incluido el montaje, la exportación y las sugerencias. Las cifras pueden cambiar durante la beta.</p>`,
        },
        {
          q: '¿Por qué tengo que iniciar sesión?',
          a: `<p>Iniciar sesión es necesario para usar la app, y la cuenta solo sirve para contar los desmontajes gratuitos. La cuenta guarda tu dirección de email (con Apple puede ser una dirección de reenvío privada) y el ID de usuario de tu proveedor de inicio de sesión. Los desmontajes empezados se cuentan con un ID aleatorio de proyecto, un ID aleatorio de instalación y tu cuenta; nada de fotos, nombres de proyectos, notas ni audio.</p>`,
        },
        {
          q: '¿Qué son las sugerencias de montaje y qué se envía?',
          a: `<p>Es una función opcional y está desactivada hasta que la activas. Antes del primer uso, la app te pide consentimiento e indica el nombre del proveedor de IA. Después, copias reducidas de las fotos de tus pasos y piezas (sin datos de ubicación) y tus notas de texto y de voz se envían a través de nuestro servidor a ${provider}, solo para escribir un breve texto para cada paso. No las guardamos y el proveedor no las usa para entrenar modelos. El nombre del proyecto, la foto de portada «antes» y tu cuenta no se envían. Nuestro servidor también recibe tu ID aleatorio de instalación para aplicar el límite diario y llevar la cuenta de los costes; no se pasa al proveedor de IA. Hasta ${cfg.aiDailyLimit} solicitudes de sugerencias al día. Puedes desactivar las sugerencias en Ajustes o para un solo proyecto. Sin consentimiento o sin internet, el montaje funciona con tus fotos como siempre.</p>`,
        },
        {
          q: '¿Es seguro reparar cosas con esta app?',
          a: `<p>La app registra tus propios pasos; no evalúa si una reparación es segura. Sigue siempre las instrucciones del fabricante, desconecta la corriente y no abras baterías, aparatos de gas ni equipos de alta tensión.</p>`,
        },
        {
          q: '¿Cómo desactivo las estadísticas anónimas?',
          a: `<p>Ajustes → Estadísticas anónimas. Cuando están desactivadas, no se envía nada. Lo que se recopila se detalla en la <a href="../privacy/">política de privacidad</a>.</p>`,
        },
      ],
      sections: [
        {
          h: 'Contacto',
          body: `<p>Email: ${mail}. Si nos escribes por un error, indica el modelo de tu teléfono y la versión de la app (Ajustes → Acerca de). Normalmente respondemos en unos días.</p>`,
        },
      ],
    },
    privacy: {
      title: 'Reverse Steps – Política de privacidad',
      description: 'Qué recopila Reverse Steps: estadísticas anónimas, los comentarios que escribes, una cuenta para los desmontajes gratuitos y sugerencias de montaje opcionales. Las fotos se quedan en tu dispositivo.',
      eyebrow: 'Política de privacidad',
      h1: 'Política de privacidad',
      updated: `Última actualización: ${updated}`,
      lede:
        'Reverse Steps es un diario de desmontaje: tus fotos, notas de voz y notas de texto se quedan en tu dispositivo. Esta política explica las pocas cosas que sí salen de él. Sin anuncios, sin seguimiento entre apps o sitios web, sin SDK de analítica o publicidad de terceros, y no vendemos datos personales.',
      sections: [
        {
          h: 'Quiénes somos',
          body: `<p>Reverse Steps lo desarrolla ${cfg.developer} (${cfg.developerCountry.es}), responsable del tratamiento de los datos. Contacto: ${mail}.</p>`,
        },
        {
          h: 'Lo que se queda en tu dispositivo',
          body: `<p>Los proyectos, las fotos de los pasos, las fotos de las piezas, las notas de voz, las notas de texto, los nombres y objetivos de los proyectos se guardan solo en el almacenamiento privado de la app en tu teléfono. Nosotros no los recibimos. Solo salen del dispositivo cuando tú exportas un proyecto o guardas fotos en tu galería, o, si las activas, para las sugerencias de montaje (ver más abajo). Al eliminar la app, se eliminan.</p>`,
        },
        {
          h: 'Estadísticas de uso anónimas',
          body: `<p>Para saber si la app resulta útil, envía un pequeño conjunto de eventos, por ejemplo «proyecto creado», «paso capturado», «montaje iniciado» o «exportación terminada». Los eventos contienen solo números, valores sí/no y opciones fijas (como el número de pasos o cuánto tardó en guardarse un paso), además de un ID aleatorio de instalación, un ID aleatorio de sesión, la plataforma (iOS o Android), la versión de la app y el idioma de la interfaz.</p>
<p>Los eventos nunca contienen fotos, audio, notas, nombres de proyectos, rutas de archivos, tu email ni el ID de tu cuenta, ni el modelo del dispositivo. Se guardan en nuestra propia base de datos en Supabase. Como la app requiere iniciar sesión, el mismo ID aleatorio de instalación también se guarda con tu cuenta en el registro de desmontajes gratuitos (consulta «Cuenta y desmontajes gratuitos»), así que los eventos de esa instalación pueden vincularse técnicamente a tu cuenta. Usamos los eventos solo para ver cómo se usa la app, nunca para hacerte seguimiento ni para publicidad. Los eventos sin procesar se eliminan a los ${cfg.analyticsRawRetentionDays} días; después solo quedan totales. Las estadísticas están activadas por defecto; puedes desactivarlas en cualquier momento en Ajustes y entonces no se envía nada. Base jurídica: nuestro interés legítimo en mejorar la app (art. 6.1.f del RGPD).</p>`,
        },
        {
          h: 'Comentarios que envías',
          body: `<p>Si envías comentarios desde la app, guardamos el texto que escribiste junto con el ID aleatorio de instalación, la versión de la app, la plataforma y el idioma, para leerlo y corregir problemas. Si escribes por email, recibimos tu dirección de email y tu mensaje. No incluyas datos personales que no quieras compartir con nosotros.</p>`,
        },
        {
          h: 'Cuenta y desmontajes gratuitos',
          body: `<p>Para usar la app necesitas una cuenta. Después de las pantallas de bienvenida, inicias sesión gratis con email, Google o Apple; la primera vez que inicias sesión se crea la cuenta. Cada cuenta tiene ${cfg.quota.total} desmontajes gratuitos. Para contarlos, la app envía a nuestro servidor un ID aleatorio de instalación, un ID aleatorio de proyecto y el ID de tu cuenta cuando empiezas un desmontaje nuevo. El inicio de sesión con email usa un código de un solo uso y un enlace, sin contraseña; los emails de inicio de sesión se envían a través de Gmail SMTP (Google). Si inicias sesión con Google o Apple, el proveedor confirma tu identidad; no recibimos tu contraseña de Google ni de Apple.</p>
<p>Solo guardamos: tu dirección de email (con Apple puede ser una dirección de reenvío privada) y el ID de usuario de tu proveedor de inicio de sesión, que usamos solo para gestionar tu cuenta y contar tus desmontajes gratuitos; y, por cada proyecto que empiezas, un ID aleatorio de proyecto y un ID aleatorio de instalación, además del ID de tu cuenta. Nunca el nombre del proyecto, fotos, notas ni audio. Si inicias sesión con Apple, guardamos el token de actualización de Apple solo para revocarlo cuando elimines la cuenta. Estos datos se almacenan en Supabase, que los trata por cuenta nuestra (encargado del tratamiento). Base jurídica: la prestación del servicio que has solicitado (art. 6.1.b del RGPD).</p>`,
        },
        {
          h: 'Sugerencias de montaje (opcional)',
          body: `<p>Las sugerencias están desactivadas hasta que las activas y aceptas una pantalla de consentimiento que indica el nombre del proveedor de IA. Con tu consentimiento, cuando se escriben las sugerencias de un proyecto, la app envía copias reducidas (unos 1024 px, sin ubicación ni otros datos EXIF) de las fotos de pasos y piezas de ese proyecto y tus notas de texto y de voz (las notas de voz como audio si el proveedor admite audio y, si no, solo las notas de texto) a través de nuestra función de servidor en Supabase a ${provider}, solo para escribir las sugerencias. El nombre del proyecto, la foto de portada «antes» y tu cuenta no se envían. La solicitud a nuestro servidor también lleva el ID aleatorio de instalación (ver más abajo); es nuestro servidor el que llama al proveedor, y el proveedor recibe solo las fotos y las notas, no el ID de instalación.</p>
<p>Nuestro servidor no guarda las fotos, el audio ni las notas y no los registra en los logs. Solo llevamos un registro técnico —el ID aleatorio de instalación, el número de solicitudes y de fotos, los tokens, el coste, el tiempo de respuesta y el estado— para aplicar un límite de ${cfg.aiDailyLimit} solicitudes al día y controlar los costes; se conserva hasta 400 días. El proveedor trata los datos según las condiciones de su API de pago, solo para devolver las sugerencias, y no los usa para entrenar modelos; puede conservarlos durante un breve periodo para detectar abusos. El proveedor puede tratar datos fuera de la UE (por ejemplo, en Estados Unidos) con base en cláusulas contractuales tipo o en una decisión de adecuación. Las sugerencias se guardan solo en tu teléfono. Base jurídica: tu consentimiento (art. 6.1.a del RGPD). Puedes retirarlo en cualquier momento desactivando las sugerencias en Ajustes; también puedes desactivarlas para un solo proyecto.</p>`,
        },
        {
          h: 'Permisos',
          body: `<ul><li><strong>Cámara</strong>: para tomar las fotos de los pasos. Las fotos se quedan en el dispositivo.</li><li><strong>Micrófono</strong>: solo cuando grabas una nota de voz. El audio se queda en el dispositivo.</li><li><strong>Fotos (solo añadir)</strong>: solo cuando guardas un proyecto en tu galería.</li></ul><p>Sin ubicación, sin contactos, sin ID de publicidad y sin aviso de App Tracking Transparency: no hacemos seguimiento.</p>`,
        },
        {
          h: 'Proveedores de servicios',
          body: `<ul><li>Supabase: base de datos, inicio de sesión y funciones de servidor; trata los datos por cuenta nuestra (encargado del tratamiento).</li><li>Google: envía los emails de inicio de sesión (Gmail SMTP) y, solo si lo eliges, el inicio de sesión con Google.</li><li>Apple: solo si eliges iniciar sesión con Apple.</li><li>Las tiendas de apps que distribuyen la app.</li><li>${cfg.aiProvider ? cfg.aiProvider : 'El proveedor de IA indicado en la app'}: solo para las sugerencias de montaje que hayas activado.</li><li>GitHub Pages: aloja este sitio web (no instala cookies por nuestra cuenta; GitHub puede registrar las visitas por motivos de seguridad).</li></ul>`,
        },
        {
          h: 'Conservación y eliminación',
          body: `<p>Los datos de la cuenta se conservan mientras exista la cuenta. Eventos de uso sin procesar: ${cfg.analyticsRawRetentionDays} días. Registro técnico de las sugerencias de montaje: hasta 400 días. Comentarios: el tiempo necesario para atenderlos, como máximo 2 años. Puedes eliminar tu cuenta en la app (Ajustes → Cuenta → Eliminar cuenta) o <a href="../account-deletion/">por email</a>. Al eliminar la cuenta se borran la cuenta, tu dirección de email, el ID del proveedor de inicio de sesión y el token de Apple guardado, después de revocar el acceso en Apple. Se elimina el vínculo entre tu cuenta y los desmontajes que empezaste; se conserva un recuento anónimo de los desmontajes empezados en el dispositivo (el ID aleatorio de instalación e IDs aleatorios de proyecto), para que el límite gratuito no pueda reiniciarse creando una cuenta nueva. Las estadísticas anónimas no se eliminan con la cuenta; no contienen el ID de la cuenta y, una vez eliminado el vínculo con la cuenta, ya no pueden relacionarse con ella a través del registro de desmontajes gratuitos. Las copias de seguridad de nuestros proveedores pueden conservar datos durante un tiempo limitado.</p>`,
        },
        {
          h: 'Tus derechos',
          body: `<p>Puedes solicitar el acceso a tus datos, su rectificación o supresión, la limitación del tratamiento o oponerte a él, y la portabilidad de tus datos; además, puedes retirar tu consentimiento en cualquier momento. Escribe a ${mail}. También tienes derecho a presentar una reclamación ante una autoridad de control: en Polonia, el Presidente de la Oficina de Protección de Datos Personales (UODO, la autoridad polaca de protección de datos), o la autoridad de tu país.</p>`,
        },
        {
          h: 'Menores',
          body: `<p>La app no está dirigida a menores de 13 años y no recopilamos sus datos de forma consciente. Si crees que un menor ha creado una cuenta, contáctanos y la eliminaremos.</p>`,
        },
        {
          h: 'Cambios',
          body: `<p>Actualizaremos esta página antes de cualquier cambio en lo que recopila la app (por ejemplo, al indicar un nuevo proveedor de IA) y cambiaremos la fecha que aparece arriba.</p>`,
        },
      ],
    },
    deletion: {
      title: 'Reverse Steps – Eliminar tu cuenta',
      description: 'Cómo eliminar tu cuenta de Reverse Steps desde la app o por email, y qué datos se eliminan.',
      eyebrow: 'Eliminación de la cuenta',
      h1: 'Eliminar tu cuenta',
      lede: 'Tu cuenta solo guarda tu dirección de email y el ID de tu proveedor de inicio de sesión (email, Google o Apple). Las fotos, las notas y los nombres de proyectos nunca forman parte de ella. Puedes eliminar la cuenta desde la app, o por email si ya no tienes la app o no puedes iniciar sesión.',
      button: 'Enviar solicitud de eliminación por email',
      mailSubject: 'Delete my account',
      mailBody: 'Hola:\n\nPor favor, eliminen mi cuenta de Reverse Steps y los datos vinculados a ella.\n\nEl email de mi cuenta (o "Sign in with Apple/Google"): \n\nGracias.',
      sections: [
        {
          h: 'Desde la app',
          body: `<ol><li>Abre Reverse Steps e inicia sesión.</li><li>Ve a Ajustes → Cuenta.</li><li>Toca Eliminar cuenta y confirma. Si iniciaste sesión con Apple, puede que Apple te pida confirmarlo una vez más.</li></ol><p>La cuenta se elimina de inmediato y revocamos el acceso de Sign in with Apple.</p>`,
        },
        {
          h: 'Por email, sin la app',
          body: `<ol><li>Escribe a <a href="mailto:${cfg.contactEmail}?subject=Delete%20my%20account">${cfg.contactEmail}</a> desde la dirección de email de tu cuenta con el asunto «Delete my account» (el botón de arriba prepara el mensaje).</li><li>Si iniciaste sesión con Apple y ocultaste tu email, indícalo: encontraremos la cuenta contigo.</li><li>Eliminamos la cuenta en un plazo de 30 días y te respondemos cuando esté hecho.</li></ol>`,
        },
        {
          h: 'Qué se elimina',
          body: `<ul><li>Tu cuenta.</li><li>Tu dirección de email.</li><li>El ID de usuario de tu proveedor de inicio de sesión (email, Google o Apple).</li><li>El token de Sign in with Apple guardado, después de revocar el acceso en Apple.</li><li>El vínculo entre tu cuenta y los desmontajes que empezaste.</li></ul>`,
        },
        {
          h: 'Qué se conserva',
          body: `<ul><li>Un recuento anónimo de los desmontajes empezados en tu dispositivo —un ID aleatorio de instalación e IDs aleatorios de proyecto, ya sin vínculo con tu cuenta—, para que el límite gratuito no pueda reiniciarse creando una cuenta nueva.</li><li>Las estadísticas de uso anónimas: contienen el ID aleatorio de instalación, pero no tu cuenta, y se conservan ${cfg.analyticsRawRetentionDays} días.</li><li>Tus proyectos y fotos: nunca estuvieron en nuestro servidor y se quedan en tu teléfono hasta que los elimines en la app o la desinstales.</li></ul><p>Las copias de seguridad de los proveedores pueden conservar datos durante un tiempo limitado.</p>`,
        },
      ],
    },
  };
};
