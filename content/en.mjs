// English (source language). Other languages follow the same keys.
// Strings marked "html" may contain inline tags; everything else is escaped by build.mjs.
export default (cfg) => {
  const after = cfg.quota.total - cfg.quota.withoutAccount;
  const provider = cfg.aiProvider
    ? `${cfg.aiProvider}`
    : 'the AI provider named on the consent screen in the app';
  const updated = new Date(`${cfg.lastUpdated}T12:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const mail = `<a href="mailto:${cfg.contactEmail}">${cfg.contactEmail}</a>`;
  return {
    nav: { label: 'Pages', language: 'Language', home: 'Home', support: 'Support', privacy: 'Privacy', deletion: 'Delete account' },
    footer: {
      disclaimer:
        'Reverse Steps keeps a record of your own steps. It is not a repair manual and does not check that a repair is safe or correct.',
      contact: 'Questions and feedback:',
    },
    home: {
      title: 'Reverse Steps – photograph the teardown, reassemble in reverse',
      description:
        'Take a photo before each step while you take something apart. When it is time to put it back together, Reverse Steps shows the same steps in reverse order.',
      eyebrow: 'For anyone who has ended up with a spare screw',
      h1: 'Take it apart in photos. Put it back in the right order.',
      lede:
        'Snap a photo before every step of a teardown, add the parts you removed and a quick note. When you rebuild, Reverse Steps walks you back through your own steps, last to first, one big card at a time.',
      iosBeta: 'iPhone beta (TestFlight)',
      androidBeta: 'Android beta (Google Play)',
      iosLive: 'Download on the App Store',
      androidLive: 'Get it on Google Play',
      soon: 'soon',
      storesNote: `Free, no ads. Your first teardown needs no account; after a free sign-in you get ${after} more. Photos stay on your phone.`,
      illustrationAlt: 'Four teardown photos taken in order 1 to 4, then shown again in order 4 to 1 for reassembly.',
      illustrationTop: 'Taking apart',
      illustrationArrow: 'Putting back: 4 → 1',
      stepsTitle: 'How it works',
      steps: [
        { t: 'Photo first, then unscrew', d: 'Start a project, shoot how the thing looks now, then take a photo before each change. Steps are numbered for you.' },
        { t: 'Add parts and a note', d: 'Photograph the screws and brackets you removed, record “two short screws, cable clip up” by text or voice.' },
        { t: 'Reassemble in reverse', d: 'Switch to reassembly: full-screen cards from the last step to the first. Tick each one off and compare with the starting photo at the end.' },
      ],
      videoTitle: 'See it in 20 seconds',
      videoSoon: 'Demo video coming soon',
      videoNote: ' — a real teardown, a pile of screws, and the app walking back through six steps.',
      whyTitle: 'Why not just the camera roll?',
      why: [
        { t: 'Steps, not a photo pile', d: 'Each project keeps its own numbered steps, apart from your other photos.' },
        { t: 'Parts belong to a step', d: 'The screws you removed are attached to the step they came from, with your note.' },
        { t: 'Order is reversed for you', d: 'No scrolling back through the roll and guessing what came first.' },
        { t: 'Private by default', d: 'Photos, voice notes and notes stay on the device. Export a ZIP or save to your gallery whenever you want.' },
        { t: 'Optional reassembly hints', d: `If you turn them on, the app suggests a short caption for each step from your own photos. They can be wrong, so the photo is always shown next to them.` },
        { t: 'iPhone and Android', d: 'Free, no ads, in English, Polish, Russian, German, French and Spanish.' },
      ],
      honestTitle: 'What it does not do',
      honest:
        'Reverse Steps records what you did; it does not teach repairs or guarantee a correct reassembly. Follow the manufacturer’s instructions, switch off and unplug the power, and do not open batteries, gas appliances or high-voltage equipment.',
      more: 'Where photos are stored, export, free teardowns: see <a href="{support}">Support</a>.',
    },
    support: {
      title: 'Reverse Steps – Support and FAQ',
      description: 'Answers about storage, export, deleting the app or your account, and free teardowns in Reverse Steps.',
      eyebrow: 'Support',
      h1: 'Support and FAQ',
      lede: `Can’t find the answer? Write to ${mail} — in English, Polish or Russian. In the app you can also use Settings → Send feedback.`,
      faq: [
        {
          q: 'Where are my photos stored?',
          a: `<p>Only on your phone, inside the app’s private storage. They are not uploaded to our server or any cloud. The only exceptions are an export you start yourself and reassembly hints if you turn them on (see below).</p>`,
        },
        {
          q: 'How do I export a project?',
          a: `<p>Open the project → Export. You can save a ZIP with all photos and notes in step order (open it on a computer or keep it in your files), or save the photos to an album in your gallery.</p>`,
        },
        {
          q: 'What happens if I delete the app?',
          a: `<p>All projects are deleted with it, because they exist only on the phone. Export the projects you want to keep first. There is no sync, so a new phone also starts empty — move projects with export.</p>`,
        },
        {
          q: 'What happens if I delete my account?',
          a: `<p>Your sign-in and the counter of free teardowns are deleted on our server. Projects on the phone stay where they are. See <a href="../account-deletion/">Delete account</a>.</p>`,
        },
        {
          q: 'How many free teardowns do I get?',
          a: `<p>Right now: ${cfg.quota.total} in total. The first one needs no account; after a free sign-in (email, Google or Apple) you get ${after} more. The check happens only when you start a new teardown — a project you have started is never locked, including reassembly, export and hints. The numbers may change during the beta.</p>`,
        },
        {
          q: 'Why do I need to sign in at all?',
          a: `<p>Only to keep count of free teardowns. The account stores your email (or Apple/Google ID) and that counter — no photos, project names or notes.</p>`,
        },
        {
          q: 'What are reassembly hints and what is sent?',
          a: `<p>An optional feature. Before the first use the app asks for your consent and names the AI provider. Then reduced copies of your step photos and your notes are sent through our server to ${provider} to write a short caption for each step. We do not store them. Up to ${cfg.aiDailyLimit} hint requests per day. Without consent or without internet, reassembly works from your photos as usual.</p>`,
        },
        {
          q: 'Is it safe to repair things with this app?',
          a: `<p>The app records your own steps; it does not judge whether a repair is safe. Always follow the manufacturer’s instructions, disconnect power, and do not open batteries, gas appliances or high-voltage equipment.</p>`,
        },
        {
          q: 'How do I turn off anonymous statistics?',
          a: `<p>Settings → Anonymous statistics. When it is off, nothing is sent. What is collected is listed in the <a href="../privacy/">privacy policy</a>.</p>`,
        },
      ],
      sections: [
        {
          h: 'Contact',
          body: `<p>Email ${mail}. Please include your phone model and app version (Settings → About) for bugs. We usually reply within a few days.</p>`,
        },
      ],
    },
    privacy: {
      title: 'Reverse Steps – Privacy Policy',
      description: 'What Reverse Steps collects: anonymous statistics, feedback you write, an account for free teardowns, and optional reassembly hints. Photos stay on your device.',
      eyebrow: 'Privacy Policy',
      h1: 'Privacy Policy',
      updated: `Last updated: ${updated}`,
      lede:
        'Reverse Steps is a teardown journal: your photos, voice notes and notes stay on your device. This policy explains the few things that do leave it. No ads, no tracking across apps or websites, no third-party analytics or advertising SDKs, and we do not sell personal data.',
      sections: [
        {
          h: 'Who we are',
          body: `<p>Reverse Steps is developed by ${cfg.developer} (${cfg.developerCountry.en}), who is the data controller. Contact: ${mail}.</p>`,
        },
        {
          h: 'Stays on your device',
          body: `<p>Projects, step photos, parts photos, voice notes, text notes, project names and goals are stored only in the app’s private storage on your phone. We do not receive them. They leave the device only when you export a project or save photos to your gallery yourself, or, if you turn them on, for reassembly hints (below). Deleting the app deletes them.</p>`,
        },
        {
          h: 'Anonymous usage statistics',
          body: `<p>To see whether the app is useful, it sends a small set of events, for example “project created”, “step captured”, “reassembly started” or “export finished”. Events contain only numbers, yes/no values and fixed options (such as the number of steps or how long saving a step took), plus a random installation ID, a random session ID, the platform (iOS or Android), app version and interface language.</p>
<p>Events never contain photos, audio, notes, project names, file paths, your email or account ID, or a device model. They are stored in our own database at Supabase and are not linked to your account. Raw events are deleted after ${cfg.analyticsRawRetentionDays} days; after that only totals remain. Statistics are on by default; you can turn them off any time in Settings, and then nothing is sent. Legal basis: our legitimate interest in improving the app (GDPR Art. 6(1)(f)).</p>`,
        },
        {
          h: 'Feedback you send',
          body: `<p>If you send feedback in the app, we store the text you wrote together with the random installation ID, app version, platform and language, to read it and fix problems. If you write by email, we receive your email address and message. Please do not include personal data you do not want us to have.</p>`,
        },
        {
          h: 'Account and free teardowns',
          body: `<p>Your first teardown works without an account. To count it, the app sends the random installation ID to our server when you start a new teardown. After that, a free sign-in is needed for more free teardowns. With email sign-in we process your email address; with Google or Apple sign-in, the provider confirms your identity and shares your account ID and email (Apple may give a private relay address). We do not receive your Google or Apple password.</p>
<p>The account stores only: account ID, email or provider ID, and the number of teardowns started (with random project references). No photos, names or notes. If you sign in with Apple, our server keeps the Apple refresh token only to revoke access when you delete the account. Legal basis: providing the service you asked for (GDPR Art. 6(1)(b)).</p>`,
        },
        {
          h: 'Reassembly hints (optional)',
          body: `<p>Hints are off until you agree on a consent screen that names the AI provider. With your consent, when you ask for hints the app sends reduced copies (about 1024 px) of the step and parts photos of that project and your notes — voice notes as audio if the provider accepts it, otherwise as text transcribed on your phone — through our server function at Supabase to ${provider}. The cover photo is not sent.</p>
<p>Our server does not save the photos, audio or notes and does not log them. We keep only technical counters (number of photos, tokens, cost, response time, status) linked to the random installation ID, to apply a limit of ${cfg.aiDailyLimit} requests per day and to control costs. The provider processes the data under its API terms only to return the hints. We use only providers whose API terms do not allow training models on this data; the provider may keep it for a short period for abuse monitoring. The provider may process data outside the EU (for example in the United States) under standard contractual clauses or an adequacy decision. The hints are stored on your phone only. Legal basis: your consent (GDPR Art. 6(1)(a)), which you can withdraw in Settings at any time.</p>`,
        },
        {
          h: 'Permissions',
          body: `<ul><li><strong>Camera</strong> — to take step photos. Photos stay on the device.</li><li><strong>Microphone</strong> — only when you record a voice note. Audio stays on the device.</li><li><strong>Photos (add only)</strong> — only when you save a project to your gallery.</li></ul><p>No location, no contacts, no advertising ID, no App Tracking Transparency prompt — we do not track.</p>`,
        },
        {
          h: 'Service providers',
          body: `<ul><li>Supabase — database, sign-in and server functions.</li><li>Google and Apple — only if you choose to sign in with them, and the app stores that deliver the app.</li><li>${cfg.aiProvider ? cfg.aiProvider : 'The AI provider named in the app'} — only for reassembly hints you turned on.</li><li>GitHub Pages — hosts this website (it does not set cookies for us; GitHub may log visits for security).</li></ul>`,
        },
        {
          h: 'Retention and deletion',
          body: `<p>Account data is kept while the account exists. Raw usage events: ${cfg.analyticsRawRetentionDays} days. Feedback: as long as needed to handle it, at most 2 years. You can delete your account in the app (Settings → Delete account) or <a href="../account-deletion/">by email</a>. Deleting the account removes the account, its sign-in links, the teardown counter and stored Apple tokens. Anonymous statistics are not linked to the account, so they are not affected. Backups at our providers may keep data for a limited time.</p>`,
        },
        {
          h: 'Your rights',
          body: `<p>You can ask for access to, correction or deletion of your data, restriction of or objection to processing, and data portability, and you can withdraw consent at any time. Write to ${mail}. You also have the right to lodge a complaint with a supervisory authority — in Poland, the President of the Personal Data Protection Office (UODO), or the authority in your country.</p>`,
        },
        {
          h: 'Children',
          body: `<p>The app is not directed at children under 13, and we do not knowingly collect their data. If you think a child has created an account, contact us and we will delete it.</p>`,
        },
        {
          h: 'Changes',
          body: `<p>We will update this page before any change in what the app collects (for example, naming a new AI provider) and change the date at the top.</p>`,
        },
      ],
    },
    deletion: {
      title: 'Reverse Steps – Delete your account',
      description: 'How to delete your Reverse Steps account in the app or by email, and which data is deleted.',
      eyebrow: 'Account deletion',
      h1: 'Delete your account',
      lede: 'You can delete your account in the app, or by email if you no longer have the app or cannot sign in.',
      button: 'Email a deletion request',
      mailSubject: 'Reverse Steps account deletion request',
      mailBody: 'Hi,\n\nPlease delete my Reverse Steps account and the data linked to it.\n\nThe email of my account (or "Sign in with Apple/Google"): \n\nThanks.',
      sections: [
        {
          h: 'In the app',
          body: `<ol><li>Open Reverse Steps and sign in.</li><li>Go to Settings.</li><li>Tap Delete account and confirm.</li></ol>`,
        },
        {
          h: 'By email, without the app',
          body: `<ol><li>Write to <a href="mailto:${cfg.contactEmail}?subject=Reverse%20Steps%20account%20deletion%20request">${cfg.contactEmail}</a> from the email address of your account (the button above prepares the message).</li><li>If you signed in with Apple and hid your email, tell us that — we will find the account with you.</li><li>We confirm that the account is yours by email and delete it within 30 days, usually much sooner.</li></ol>`,
        },
        {
          h: 'What is deleted',
          body: `<ul><li>The account and its sign-in (email, Google or Apple link).</li><li>The free teardown counter and project references.</li><li>Stored Sign in with Apple tokens, after access is revoked with Apple.</li></ul>`,
        },
        {
          h: 'What is not affected',
          body: `<p>Projects and photos on your phone — they were never on our server; delete them in the app or by deleting the app. Anonymous statistics — they are not linked to the account and are deleted on schedule. A record that the deletion was requested and done (email and dates) is kept as proof. Provider backups may keep data for a limited time.</p>`,
        },
      ],
    },
  };
};
