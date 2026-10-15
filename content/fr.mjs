// Français (France). Clés identiques à en.mjs.
// Strings marked "html" may contain inline tags; everything else is escaped by build.mjs.
export default (cfg) => {
  const after = cfg.quota.total - cfg.quota.withoutAccount;
  const provider = cfg.aiProvider
    ? `${cfg.aiProvider}`
    : 'le fournisseur d’IA indiqué dans l’application sur l’écran de consentement';
  const updated = new Date(`${cfg.lastUpdated}T12:00:00Z`).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const mail = `<a href="mailto:${cfg.contactEmail}">${cfg.contactEmail}</a>`;
  return {
    nav: { label: 'Pages', language: 'Langue', home: 'Accueil', support: 'Aide', privacy: 'Confidentialité', deletion: 'Supprimer le compte' },
    footer: {
      disclaimer:
        'Reverse Steps garde une trace de vos propres étapes. Ce n’est pas un manuel de réparation, et l’application ne vérifie pas qu’une réparation est sûre ou correcte.',
      contact: 'Questions et retours :',
    },
    home: {
      title: 'Reverse Steps – photographiez le démontage, remontez dans l’ordre inverse',
      description:
        'Prenez une photo avant chaque étape quand vous démontez quelque chose. Au moment de tout remettre en place, Reverse Steps vous montre les mêmes étapes dans l’ordre inverse.',
      eyebrow: 'Pour tous ceux à qui il est déjà resté une vis en trop',
      h1: 'Démontez en photos. Remontez dans le bon ordre.',
      lede:
        'Prenez une photo avant chaque étape du démontage, ajoutez les pièces retirées et une courte note. Au remontage, Reverse Steps vous fait repasser par vos propres étapes, de la dernière à la première, une grande carte à la fois.',
      iosBeta: 'Bêta iPhone (TestFlight)',
      androidBeta: 'Bêta Android (Google Play)',
      iosLive: 'Télécharger dans l’App Store',
      androidLive: 'Disponible sur Google Play',
      soon: 'bientôt',
      storesNote: `Gratuit, sans publicité. Votre premier démontage ne demande pas de compte ; après une connexion gratuite, vous en avez ${after} de plus. Les photos restent sur votre téléphone.`,
      illustrationAlt: 'Quatre photos de démontage prises dans l’ordre de 1 à 4, puis affichées de nouveau de 4 à 1 pour le remontage.',
      illustrationTop: 'Démontage',
      illustrationArrow: 'Remontage : 4 → 1',
      stepsTitle: 'Comment ça marche',
      steps: [
        { t: 'D’abord la photo, ensuite le tournevis', d: 'Créez un projet, photographiez l’objet tel qu’il est, puis prenez une photo avant chaque changement. Les étapes sont numérotées pour vous.' },
        { t: 'Ajoutez les pièces et une note', d: 'Photographiez les vis et les supports retirés, notez « deux vis courtes, clip du câble vers le haut » par écrit ou à la voix.' },
        { t: 'Remontez dans l’ordre inverse', d: 'Passez au remontage : des cartes plein écran, de la dernière étape à la première. Cochez-les une à une et comparez à la fin avec la photo de départ.' },
      ],
      videoTitle: 'Voir en 20 secondes',
      videoSoon: 'Vidéo de démonstration bientôt disponible',
      videoNote: ' — un vrai démontage, un tas de vis, et l’application qui repasse les six étapes à l’envers.',
      whyTitle: 'Pourquoi pas simplement la pellicule ?',
      why: [
        { t: 'Des étapes, pas un tas de photos', d: 'Chaque projet a ses propres étapes numérotées, à part de vos autres photos.' },
        { t: 'Les pièces sont liées à une étape', d: 'Les vis retirées sont rattachées à l’étape d’où elles viennent, avec votre note.' },
        { t: 'L’ordre est inversé pour vous', d: 'Plus besoin de remonter la pellicule en devinant ce qui venait en premier.' },
        { t: 'Privé par défaut', d: 'Les photos, notes vocales et notes restent sur l’appareil. Exportez un ZIP ou enregistrez dans votre galerie quand vous le souhaitez.' },
        { t: 'Conseils de remontage facultatifs', d: `Si vous les activez, l’application propose une courte légende pour chaque étape à partir de vos propres photos. Ils peuvent se tromper, c’est pourquoi la photo est toujours affichée à côté.` },
        { t: 'iPhone et Android', d: 'Gratuit, sans publicité, en anglais, polonais, russe, allemand, français et espagnol.' },
      ],
      honestTitle: 'Ce que l’application ne fait pas',
      honest:
        'Reverse Steps enregistre ce que vous avez fait ; l’application n’enseigne pas la réparation et ne garantit pas un remontage correct. Suivez les instructions du fabricant, coupez le courant et débranchez l’appareil, et n’ouvrez pas de batteries, d’appareils à gaz ni d’équipements à haute tension.',
      more: 'Où sont stockées les photos, l’export, les démontages gratuits : voir <a href="{support}">Aide</a>.',
    },
    support: {
      title: 'Reverse Steps – Aide et FAQ',
      description: 'Réponses sur le stockage, l’export, la suppression de l’application ou du compte, et les démontages gratuits dans Reverse Steps.',
      eyebrow: 'Aide',
      h1: 'Aide et FAQ',
      lede: `Vous ne trouvez pas la réponse ? Écrivez à ${mail} — en anglais, en polonais ou en russe. Dans l’application, vous pouvez aussi utiliser Réglages → Envoyer un retour.`,
      faq: [
        {
          q: 'Où sont stockées mes photos ?',
          a: `<p>Uniquement sur votre téléphone, dans l’espace de stockage privé de l’application. Elles ne sont envoyées ni sur notre serveur ni dans un cloud. Les seules exceptions : un export que vous lancez vous-même, et les conseils de remontage si vous les activez (voir plus bas).</p>`,
        },
        {
          q: 'Comment exporter un projet ?',
          a: `<p>Ouvrez le projet → Exporter. Vous pouvez enregistrer un ZIP avec toutes les photos et notes dans l’ordre des étapes (à ouvrir sur un ordinateur ou à garder dans vos fichiers), ou enregistrer les photos dans un album de votre galerie.</p>`,
        },
        {
          q: 'Que se passe-t-il si je supprime l’application ?',
          a: `<p>Tous les projets sont supprimés avec elle, car ils n’existent que sur le téléphone. Exportez d’abord les projets que vous voulez garder. Il n’y a pas de synchronisation : un nouveau téléphone démarre donc vide lui aussi — transférez vos projets par export.</p>`,
        },
        {
          q: 'Que se passe-t-il si je supprime mon compte ?',
          a: `<p>Votre connexion et le compteur de démontages gratuits sont supprimés sur notre serveur. Les projets sur le téléphone restent en place. Voir <a href="../account-deletion/">Supprimer le compte</a>.</p>`,
        },
        {
          q: 'Combien de démontages gratuits ai-je ?',
          a: `<p>Pour l’instant : ${cfg.quota.total} au total. Le premier ne demande pas de compte ; après une connexion gratuite (e-mail, Google ou Apple), vous en avez ${after} de plus. La vérification n’a lieu qu’au lancement d’un nouveau démontage — un projet commencé n’est jamais bloqué, y compris le remontage, l’export et les conseils. Ces chiffres peuvent changer pendant la bêta.</p>`,
        },
        {
          q: 'Pourquoi faut-il se connecter ?',
          a: `<p>Uniquement pour compter les démontages gratuits. Le compte conserve votre adresse e-mail (ou votre identifiant Apple/Google) et ce compteur — aucune photo, aucun nom de projet ni aucune note.</p>`,
        },
        {
          q: 'Que sont les conseils de remontage et qu’est-ce qui est envoyé ?',
          a: `<p>Une fonction facultative. Avant la première utilisation, l’application vous demande votre consentement et indique le fournisseur d’IA. Ensuite, des copies réduites de vos photos d’étapes et vos notes sont envoyées via notre serveur vers ${provider}, qui rédige une courte légende pour chaque étape. Nous ne les conservons pas. Jusqu’à ${cfg.aiDailyLimit} demandes de conseils par jour. Sans consentement ou sans connexion internet, le remontage fonctionne normalement à partir de vos photos.</p>`,
        },
        {
          q: 'Est-ce sans danger de réparer avec cette application ?',
          a: `<p>L’application enregistre vos propres étapes ; elle ne juge pas si une réparation est sûre. Suivez toujours les instructions du fabricant, coupez l’alimentation, et n’ouvrez pas de batteries, d’appareils à gaz ni d’équipements à haute tension.</p>`,
        },
        {
          q: 'Comment désactiver les statistiques anonymes ?',
          a: `<p>Réglages → Statistiques anonymes. Lorsqu’elles sont désactivées, rien n’est envoyé. Les données collectées sont listées dans la <a href="../privacy/">politique de confidentialité</a>.</p>`,
        },
      ],
      sections: [
        {
          h: 'Contact',
          body: `<p>E-mail : ${mail}. Pour un bug, indiquez le modèle de votre téléphone et la version de l’application (Réglages → À propos). Nous répondons en général sous quelques jours.</p>`,
        },
      ],
    },
    privacy: {
      title: 'Reverse Steps – Politique de confidentialité',
      description: 'Ce que Reverse Steps collecte : statistiques anonymes, retours que vous écrivez, un compte pour les démontages gratuits et des conseils de remontage facultatifs. Les photos restent sur votre appareil.',
      eyebrow: 'Politique de confidentialité',
      h1: 'Politique de confidentialité',
      updated: `Dernière mise à jour : ${updated}`,
      lede:
        'Reverse Steps est un journal de démontage : vos photos, notes vocales et notes restent sur votre appareil. Cette politique explique les quelques éléments qui en sortent. Pas de publicité, pas de suivi entre applications ou sites web, pas de SDK d’analyse ou de publicité tiers, et nous ne vendons pas de données personnelles.',
      sections: [
        {
          h: 'Qui sommes-nous',
          body: `<p>Reverse Steps est développé par ${cfg.developer} (${cfg.developerCountry.fr}), responsable du traitement. Contact : ${mail}.</p>`,
        },
        {
          h: 'Ce qui reste sur votre appareil',
          body: `<p>Les projets, photos d’étapes, photos de pièces, notes vocales, notes écrites, noms et objectifs de projets sont stockés uniquement dans l’espace de stockage privé de l’application sur votre téléphone. Nous ne les recevons pas. Ils ne quittent l’appareil que lorsque vous exportez vous-même un projet ou enregistrez des photos dans votre galerie, ou, si vous les activez, pour les conseils de remontage (voir plus bas). Supprimer l’application les supprime.</p>`,
        },
        {
          h: 'Statistiques d’utilisation anonymes',
          body: `<p>Pour savoir si l’application est utile, elle envoie un petit ensemble d’événements, par exemple « projet créé », « étape enregistrée », « remontage commencé » ou « export terminé ». Les événements ne contiennent que des nombres, des valeurs oui/non et des options fixes (comme le nombre d’étapes ou le temps d’enregistrement d’une étape), ainsi qu’un identifiant d’installation aléatoire, un identifiant de session aléatoire, la plateforme (iOS ou Android), la version de l’application et la langue de l’interface.</p>
<p>Les événements ne contiennent jamais de photos, d’audio, de notes, de noms de projets, de chemins de fichiers, votre adresse e-mail ou identifiant de compte, ni le modèle de l’appareil. Ils sont stockés dans notre propre base de données chez Supabase et ne sont pas liés à votre compte. Les événements bruts sont supprimés après ${cfg.analyticsRawRetentionDays} jours ; seuls des totaux restent ensuite. Les statistiques sont activées par défaut ; vous pouvez les désactiver à tout moment dans les Réglages, et rien n’est alors envoyé. Base légale : notre intérêt légitime à améliorer l’application (art. 6, par. 1, point f) du RGPD).</p>`,
        },
        {
          h: 'Retours que vous envoyez',
          body: `<p>Si vous envoyez un retour depuis l’application, nous conservons le texte que vous avez écrit avec l’identifiant d’installation aléatoire, la version de l’application, la plateforme et la langue, afin de le lire et de corriger les problèmes. Si vous écrivez par e-mail, nous recevons votre adresse e-mail et votre message. Merci de ne pas y inclure de données personnelles que vous ne souhaitez pas nous transmettre.</p>`,
        },
        {
          h: 'Compte et démontages gratuits',
          body: `<p>Votre premier démontage fonctionne sans compte. Pour le comptabiliser, l’application envoie l’identifiant d’installation aléatoire à notre serveur quand vous lancez un nouveau démontage. Ensuite, une connexion gratuite est nécessaire pour d’autres démontages gratuits. Avec la connexion par e-mail, nous traitons votre adresse e-mail ; avec la connexion Google ou Apple, le fournisseur confirme votre identité et nous transmet votre identifiant de compte et votre adresse e-mail (Apple peut fournir une adresse relais privée). Nous ne recevons pas votre mot de passe Google ou Apple.</p>
<p>Le compte conserve uniquement : l’identifiant de compte, l’adresse e-mail ou l’identifiant du fournisseur, et le nombre de démontages commencés (avec des références de projet aléatoires). Aucune photo, aucun nom ni aucune note. Si vous vous connectez avec Apple, notre serveur conserve le jeton d’actualisation Apple uniquement pour révoquer l’accès lors de la suppression du compte. Base légale : la fourniture du service que vous avez demandé (art. 6, par. 1, point b) du RGPD).</p>`,
        },
        {
          h: 'Conseils de remontage (facultatifs)',
          body: `<p>Les conseils sont désactivés tant que vous n’avez pas donné votre accord sur un écran de consentement qui indique le fournisseur d’IA. Avec votre consentement, lorsque vous demandez des conseils, l’application envoie des copies réduites (environ 1024 px) des photos d’étapes et de pièces de ce projet ainsi que vos notes — les notes vocales sous forme audio si le fournisseur l’accepte, sinon sous forme de texte transcrit sur votre téléphone — via notre fonction serveur chez Supabase vers ${provider}. La photo de couverture n’est pas envoyée.</p>
<p>Notre serveur n’enregistre pas les photos, l’audio ni les notes et ne les inscrit pas dans les journaux. Nous conservons uniquement des compteurs techniques (nombre de photos, jetons, coût, temps de réponse, statut) liés à l’identifiant d’installation aléatoire, afin d’appliquer une limite de ${cfg.aiDailyLimit} demandes par jour et de maîtriser les coûts. Le fournisseur traite les données selon les conditions de son API, uniquement pour renvoyer les conseils. Nous utilisons uniquement des fournisseurs dont les conditions d’API n’autorisent pas l’entraînement de modèles sur ces données ; le fournisseur peut les conserver pendant une courte durée pour détecter les abus. Le fournisseur peut traiter les données hors de l’UE (par exemple aux États-Unis) sur la base de clauses contractuelles types ou d’une décision d’adéquation. Les conseils sont stockés uniquement sur votre téléphone. Base légale : votre consentement (art. 6, par. 1, point a) du RGPD), que vous pouvez retirer à tout moment dans les Réglages.</p>`,
        },
        {
          h: 'Autorisations',
          body: `<ul><li><strong>Appareil photo</strong> — pour prendre les photos d’étapes. Les photos restent sur l’appareil.</li><li><strong>Micro</strong> — uniquement quand vous enregistrez une note vocale. L’audio reste sur l’appareil.</li><li><strong>Photos (ajout uniquement)</strong> — uniquement quand vous enregistrez un projet dans votre galerie.</li></ul><p>Pas de localisation, pas de contacts, pas d’identifiant publicitaire, pas de demande App Tracking Transparency — nous ne faisons pas de suivi.</p>`,
        },
        {
          h: 'Prestataires',
          body: `<ul><li>Supabase — base de données, connexion et fonctions serveur.</li><li>Google et Apple — uniquement si vous choisissez de vous connecter avec eux, ainsi que les boutiques d’applications qui distribuent l’application.</li><li>${cfg.aiProvider ? cfg.aiProvider : 'Le fournisseur d’IA indiqué dans l’application'} — uniquement pour les conseils de remontage que vous avez activés.</li><li>GitHub Pages — héberge ce site (il ne dépose pas de cookies pour nous ; GitHub peut journaliser les visites pour des raisons de sécurité).</li></ul>`,
        },
        {
          h: 'Conservation et suppression',
          body: `<p>Les données du compte sont conservées tant que le compte existe. Événements d’utilisation bruts : ${cfg.analyticsRawRetentionDays} jours. Retours : le temps nécessaire pour les traiter, 2 ans au maximum. Vous pouvez supprimer votre compte dans l’application (Réglages → Supprimer le compte) ou <a href="../account-deletion/">par e-mail</a>. La suppression du compte efface le compte, ses liens de connexion, le compteur de démontages et les jetons Apple conservés. Les statistiques anonymes ne sont pas liées au compte et ne sont donc pas concernées. Les sauvegardes chez nos prestataires peuvent conserver des données pendant une durée limitée.</p>`,
        },
        {
          h: 'Vos droits',
          body: `<p>Vous pouvez demander l’accès à vos données, leur rectification ou leur effacement, la limitation du traitement ou vous y opposer, ainsi que la portabilité de vos données, et vous pouvez retirer votre consentement à tout moment. Écrivez à ${mail}. Vous avez également le droit d’introduire une réclamation auprès d’une autorité de contrôle — en Pologne, le Président de l’Office de protection des données personnelles (UODO, autorité polonaise de protection des données), ou l’autorité de votre pays (en France, la CNIL).</p>`,
        },
        {
          h: 'Enfants',
          body: `<p>L’application ne s’adresse pas aux enfants de moins de 13 ans, et nous ne collectons pas sciemment leurs données. Si vous pensez qu’un enfant a créé un compte, contactez-nous et nous le supprimerons.</p>`,
        },
        {
          h: 'Modifications',
          body: `<p>Nous mettrons à jour cette page avant tout changement dans ce que l’application collecte (par exemple, l’indication d’un nouveau fournisseur d’IA) et modifierons la date en haut de page.</p>`,
        },
      ],
    },
    deletion: {
      title: 'Reverse Steps – Supprimer votre compte',
      description: 'Comment supprimer votre compte Reverse Steps dans l’application ou par e-mail, et quelles données sont supprimées.',
      eyebrow: 'Suppression du compte',
      h1: 'Supprimer votre compte',
      lede: 'Vous pouvez supprimer votre compte dans l’application, ou par e-mail si vous n’avez plus l’application ou ne pouvez plus vous connecter.',
      button: 'Envoyer une demande de suppression par e-mail',
      mailSubject: 'Demande de suppression du compte Reverse Steps',
      mailBody: 'Bonjour,\n\nMerci de supprimer mon compte Reverse Steps et les données qui y sont liées.\n\nL’adresse e-mail de mon compte (ou « Sign in with Apple/Google ») : \n\nMerci.',
      sections: [
        {
          h: 'Dans l’application',
          body: `<ol><li>Ouvrez Reverse Steps et connectez-vous.</li><li>Allez dans Réglages.</li><li>Touchez Supprimer le compte et confirmez.</li></ol>`,
        },
        {
          h: 'Par e-mail, sans l’application',
          body: `<ol><li>Écrivez à <a href="mailto:${cfg.contactEmail}?subject=Demande%20de%20suppression%20du%20compte%20Reverse%20Steps">${cfg.contactEmail}</a> depuis l’adresse e-mail de votre compte (le bouton ci-dessus prépare le message).</li><li>Si vous vous êtes connecté avec Apple en masquant votre adresse, indiquez-le-nous — nous retrouverons le compte avec vous.</li><li>Nous vérifions par e-mail que le compte vous appartient et le supprimons sous 30 jours, en général bien plus tôt.</li></ol>`,
        },
        {
          h: 'Ce qui est supprimé',
          body: `<ul><li>Le compte et sa connexion (e-mail, lien Google ou Apple).</li><li>Le compteur de démontages gratuits et les références de projet.</li><li>Les jetons Sign in with Apple conservés, après révocation de l’accès auprès d’Apple.</li></ul>`,
        },
        {
          h: 'Ce qui n’est pas concerné',
          body: `<p>Les projets et photos sur votre téléphone — ils n’ont jamais été sur notre serveur ; supprimez-les dans l’application ou en supprimant l’application. Les statistiques anonymes — elles ne sont pas liées au compte et sont supprimées selon le calendrier prévu. Une trace de la demande de suppression et de son exécution (adresse e-mail et dates) est conservée comme preuve. Les sauvegardes des prestataires peuvent conserver des données pendant une durée limitée.</p>`,
        },
      ],
    },
  };
};
