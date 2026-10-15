// Español (neutro). Claves como en en.mjs.
export default (cfg) => {
  const after = cfg.quota.total - cfg.quota.withoutAccount;
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
      storesNote: `Gratis y sin anuncios. Tu primer desmontaje no necesita cuenta; al iniciar sesión gratis tienes ${after} más. Las fotos se quedan en tu teléfono.`,
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
          a: `<p>Eliminamos de nuestro servidor tu inicio de sesión y el contador de desmontajes gratuitos. Los proyectos del teléfono se quedan donde están. Consulta <a href="../account-deletion/">Eliminar cuenta</a>.</p>`,
        },
        {
          q: '¿Cuántos desmontajes gratuitos tengo?',
          a: `<p>Por ahora, ${cfg.quota.total} en total. El primero no necesita cuenta; al iniciar sesión gratis (con email, Google o Apple) tienes ${after} más. La comprobación se hace solo al empezar un desmontaje nuevo: un proyecto ya empezado nunca se bloquea, incluido el montaje, la exportación y las sugerencias. Las cifras pueden cambiar durante la beta.</p>`,
        },
        {
          q: '¿Por qué tengo que iniciar sesión?',
          a: `<p>Solo para llevar la cuenta de los desmontajes gratuitos. La cuenta guarda tu email (o tu ID de Apple/Google) y ese contador; nada de fotos, nombres de proyectos ni notas.</p>`,
        },
        {
          q: '¿Qué son las sugerencias de montaje y qué se envía?',
          a: `<p>Es una función opcional. Antes del primer uso, la app te pide consentimiento e indica el nombre del proveedor de IA. Después, copias reducidas de las fotos de tus pasos y tus notas se envían a través de nuestro servidor para que ${provider} escriba un breve texto para cada paso. No las guardamos. Hasta ${cfg.aiDailyLimit} solicitudes de sugerencias al día. Sin consentimiento o sin internet, el montaje funciona con tus fotos como siempre.</p>`,
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
<p>Los eventos nunca contienen fotos, audio, notas, nombres de proyectos, rutas de archivos, tu email ni el ID de tu cuenta, ni el modelo del dispositivo. Se guardan en nuestra propia base de datos en Supabase y no están vinculados a tu cuenta. Los eventos sin procesar se eliminan a los ${cfg.analyticsRawRetentionDays} días; después solo quedan totales. Las estadísticas están activadas por defecto; puedes desactivarlas en cualquier momento en Ajustes y entonces no se envía nada. Base jurídica: nuestro interés legítimo en mejorar la app (art. 6.1.f del RGPD).</p>`,
        },
        {
          h: 'Comentarios que envías',
          body: `<p>Si envías comentarios desde la app, guardamos el texto que escribiste junto con el ID aleatorio de instalación, la versión de la app, la plataforma y el idioma, para leerlo y corregir problemas. Si escribes por email, recibimos tu dirección de email y tu mensaje. No incluyas datos personales que no quieras compartir con nosotros.</p>`,
        },
        {
          h: 'Cuenta y desmontajes gratuitos',
          body: `<p>Tu primer desmontaje funciona sin cuenta. Para contarlo, la app envía el ID aleatorio de instalación a nuestro servidor cuando empiezas un desmontaje nuevo. Después, para más desmontajes gratuitos hace falta iniciar sesión gratis. Si inicias sesión con email, tratamos tu dirección de email; si lo haces con Google o Apple, el proveedor confirma tu identidad y nos comparte el ID de tu cuenta y tu email (Apple puede darnos una dirección de reenvío privada). No recibimos tu contraseña de Google ni de Apple.</p>
<p>La cuenta guarda solo: el ID de cuenta, el email o el ID del proveedor y el número de desmontajes iniciados (con referencias aleatorias a los proyectos). Nada de fotos, nombres ni notas. Si inicias sesión con Apple, nuestro servidor conserva el token de actualización de Apple únicamente para revocar el acceso cuando elimines la cuenta. Base jurídica: la prestación del servicio que solicitaste (art. 6.1.b del RGPD).</p>`,
        },
        {
          h: 'Sugerencias de montaje (opcional)',
          body: `<p>Las sugerencias están desactivadas hasta que aceptas una pantalla de consentimiento que indica el nombre del proveedor de IA. Con tu consentimiento, cuando pides sugerencias, la app envía copias reducidas (unos 1024 px) de las fotos de pasos y piezas de ese proyecto y tus notas (las notas de voz como audio si el proveedor lo admite y, si no, como texto transcrito en tu teléfono) a través de nuestra función de servidor en Supabase, para que las procese ${provider}. La foto de portada no se envía.</p>
<p>Nuestro servidor no guarda las fotos, el audio ni las notas, y no los registra en logs. Solo conservamos contadores técnicos (número de fotos, tokens, coste, tiempo de respuesta, estado) vinculados al ID aleatorio de instalación, para aplicar un límite de ${cfg.aiDailyLimit} solicitudes al día y controlar los costes. El proveedor trata los datos según las condiciones de su API, únicamente para devolver las sugerencias. Solo usamos proveedores cuyas condiciones de API no permiten entrenar modelos con estos datos; el proveedor puede conservarlos durante un breve periodo para detectar abusos. El proveedor puede tratar datos fuera de la UE (por ejemplo, en Estados Unidos) al amparo de cláusulas contractuales tipo o de una decisión de adecuación. Las sugerencias se guardan solo en tu teléfono. Base jurídica: tu consentimiento (art. 6.1.a del RGPD), que puedes retirar en cualquier momento en Ajustes.</p>`,
        },
        {
          h: 'Permisos',
          body: `<ul><li><strong>Cámara</strong>: para tomar las fotos de los pasos. Las fotos se quedan en el dispositivo.</li><li><strong>Micrófono</strong>: solo cuando grabas una nota de voz. El audio se queda en el dispositivo.</li><li><strong>Fotos (solo añadir)</strong>: solo cuando guardas un proyecto en tu galería.</li></ul><p>Sin ubicación, sin contactos, sin ID de publicidad y sin aviso de App Tracking Transparency: no hacemos seguimiento.</p>`,
        },
        {
          h: 'Proveedores de servicios',
          body: `<ul><li>Supabase: base de datos, inicio de sesión y funciones de servidor.</li><li>Google y Apple: solo si decides iniciar sesión con ellos, y las tiendas de apps que distribuyen la app.</li><li>${cfg.aiProvider ? cfg.aiProvider : 'El proveedor de IA indicado en la app'}: solo para las sugerencias de montaje que hayas activado.</li><li>GitHub Pages: aloja este sitio web (no instala cookies por nuestra cuenta; GitHub puede registrar las visitas por motivos de seguridad).</li></ul>`,
        },
        {
          h: 'Conservación y eliminación',
          body: `<p>Los datos de la cuenta se conservan mientras exista la cuenta. Eventos de uso sin procesar: ${cfg.analyticsRawRetentionDays} días. Comentarios: el tiempo necesario para atenderlos, como máximo 2 años. Puedes eliminar tu cuenta en la app (Ajustes → Eliminar cuenta) o <a href="../account-deletion/">por email</a>. Al eliminar la cuenta se borran la cuenta, sus vínculos de inicio de sesión, el contador de desmontajes y los tokens de Apple guardados. Las estadísticas anónimas no están vinculadas a la cuenta, así que no se ven afectadas. Las copias de seguridad de nuestros proveedores pueden conservar datos durante un tiempo limitado.</p>`,
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
      lede: 'Puedes eliminar tu cuenta desde la app, o por email si ya no tienes la app o no puedes iniciar sesión.',
      button: 'Enviar solicitud de eliminación por email',
      mailSubject: 'Solicitud de eliminación de cuenta de Reverse Steps',
      mailBody: 'Hola:\n\nPor favor, eliminen mi cuenta de Reverse Steps y los datos vinculados a ella.\n\nEl email de mi cuenta (o "Sign in with Apple/Google"): \n\nGracias.',
      sections: [
        {
          h: 'Desde la app',
          body: `<ol><li>Abre Reverse Steps e inicia sesión.</li><li>Ve a Ajustes.</li><li>Toca Eliminar cuenta y confirma.</li></ol>`,
        },
        {
          h: 'Por email, sin la app',
          body: `<ol><li>Escribe a <a href="mailto:${cfg.contactEmail}?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20cuenta%20de%20Reverse%20Steps">${cfg.contactEmail}</a> desde la dirección de email de tu cuenta (el botón de arriba prepara el mensaje).</li><li>Si iniciaste sesión con Apple y ocultaste tu email, indícalo: encontraremos la cuenta contigo.</li><li>Te confirmamos por email que la cuenta es tuya y la eliminamos en un plazo de 30 días, normalmente mucho antes.</li></ol>`,
        },
        {
          h: 'Qué se elimina',
          body: `<ul><li>La cuenta y su inicio de sesión (email, vínculo con Google o Apple).</li><li>El contador de desmontajes gratuitos y las referencias a los proyectos.</li><li>Los tokens de Sign in with Apple guardados, después de revocar el acceso en Apple.</li></ul>`,
        },
        {
          h: 'Qué no se ve afectado',
          body: `<p>Los proyectos y fotos de tu teléfono: nunca estuvieron en nuestro servidor; elimínalos en la app o eliminando la app. Las estadísticas anónimas: no están vinculadas a la cuenta y se eliminan según el calendario previsto. Conservamos como prueba un registro de que la eliminación se solicitó y se realizó (email y fechas). Las copias de seguridad de los proveedores pueden conservar datos durante un tiempo limitado.</p>`,
        },
      ],
    },
  };
};
