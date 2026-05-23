'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/client';

const formItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return <ContactClient />;
}

function ContactClient() {
  const { lang } = useI18n();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const t = {
    title: lang === 'ja' ? '問い合せ' : 'Contact',
    name: lang === 'ja' ? 'お名前' : 'Your name',
    email: lang === 'ja' ? 'メールアドレス' : 'E-mail address',
    subject: lang === 'ja' ? '件名' : 'Subject',
    message: lang === 'ja' ? 'メッセージ' : 'Your message',
    send: lang === 'ja' ? '送信' : 'Send',
    sent:
      lang === 'ja'
        ? '送信しました。'
        : 'Thank you. Your message has been sent.',
  };

  const inputClass =
    'w-full border border-silver-dim/30 light:border-museum-ink-dim/40 bg-transparent px-4 py-3 font-sans text-sm text-silver-white placeholder:text-silver-dim/40 outline-none light:text-museum-ink light:placeholder:text-museum-ink-dim/40 transition-all duration-300 focus:border-silver-dim/50 light:focus:border-museum-ink-dim/55 focus:bg-silver-dim/[0.02] light:focus:bg-museum-ink-dim/[0.01]';

  return (
    <div className="min-h-screen pt-24 pb-16 bg-darkroom-black light:bg-museum-white">
      <div className="mx-auto max-w-4xl px-[3vw]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
        >
          {/* Header */}
          <motion.div variants={formItem} transition={{ duration: 0.7, ease: [0.3, 0, 0.15, 1] }}>
            <h1 className="font-sans text-3xl tracking-[0.2em] text-silver-white light:text-museum-ink">
              {t.title}
            </h1>
            <p className="mt-3 font-mono text-xs tracking-[0.15em] text-silver-dim light:text-museum-ink-dim">
              takiscope.jp
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={formItem}
            transition={{ duration: 0.7, ease: [0.3, 0, 0.15, 1] }}
            className="mt-12"
          >
            <div className="relative border border-silver-dim/30 light:border-museum-ink-dim/35 p-8 md:p-10">
              {/* Corner brackets */}
              <span className="absolute top-4 left-4 h-4 w-4 border-t border-l border-silver-white/30 light:border-museum-ink/35" />
              <span className="absolute top-4 right-4 h-4 w-4 border-t border-r border-silver-white/30 light:border-museum-ink/35" />
              <span className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-silver-white/30 light:border-museum-ink/35" />
              <span className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-silver-white/30 light:border-museum-ink/35" />

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.3, 0, 0.15, 1] }}
                  className="flex flex-col items-center gap-4 py-10"
                >
                  <span className="font-mono text-4xl text-silver-dim/30 light:text-museum-ink-dim/30">
                    &#10003;
                  </span>
                  <p className="font-sans text-sm text-silver-mid light:text-museum-ink-mid">
                    {t.sent}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  className="space-y-7"
                  onSubmit={handleSubmit}
                  transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={formItem} transition={{ duration: 0.7, ease: [0.3, 0, 0.15, 1] }}>
                      <label className="mb-2 block font-mono text-sm tracking-[0.15em] text-silver-dim/80 light:text-museum-ink">
                        {t.name}
                      </label>
                      <input type="text" className={inputClass} />
                    </motion.div>

                    <motion.div variants={formItem} transition={{ duration: 0.7, ease: [0.3, 0, 0.15, 1] }}>
                      <label className="mb-2 block font-mono text-sm tracking-[0.15em] text-silver-dim/80 light:text-museum-ink">
                        {t.email}
                      </label>
                      <input type="email" className={inputClass} />
                    </motion.div>
                  </div>

                  <motion.div variants={formItem} transition={{ duration: 0.7, ease: [0.3, 0, 0.15, 1] }}>
                    <label className="mb-2 block font-mono text-sm tracking-[0.15em] text-silver-dim/80 light:text-museum-ink">
                      {t.subject}
                    </label>
                    <input type="text" className={inputClass} />
                  </motion.div>

                  <motion.div variants={formItem} transition={{ duration: 0.7, ease: [0.3, 0, 0.15, 1] }}>
                    <label className="mb-2 block font-mono text-sm tracking-[0.15em] text-silver-dim/80 light:text-museum-ink">
                      {t.message}
                    </label>
                    <textarea rows={5} className={`${inputClass} resize-none`} />
                  </motion.div>

                  {/* Submit */}
                  <motion.div variants={formItem} transition={{ duration: 0.7, ease: [0.3, 0, 0.15, 1] }} className="flex justify-end pt-1">
                    <button
                      type="submit"
                      className="group/btn relative inline-flex items-center gap-4 px-8 py-3.5 border border-silver-dim/25 light:border-museum-ink-dim/25 bg-silver-dim/[0.02] light:bg-museum-ink-dim/[0.02] hover:bg-silver-dim/[0.06] light:hover:bg-museum-ink-dim/[0.05] hover:border-silver-dim/40 light:hover:border-museum-ink-dim/40 font-mono text-sm tracking-[0.2em] text-silver-dim hover:text-silver-white light:text-museum-ink-dim light:hover:text-museum-ink transition-all duration-300"
                    >
                      {/* Corner accents */}
                      <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-silver-dim/20 light:border-museum-ink-dim/20 group-hover/btn:border-silver-dim/35 light:group-hover/btn:border-museum-ink-dim/35 transition-colors duration-300" />
                      <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-silver-dim/20 light:border-museum-ink-dim/20 group-hover/btn:border-silver-dim/35 light:group-hover/btn:border-museum-ink-dim/35 transition-colors duration-300" />
                      <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-silver-dim/20 light:border-museum-ink-dim/20 group-hover/btn:border-silver-dim/35 light:group-hover/btn:border-museum-ink-dim/35 transition-colors duration-300" />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-silver-dim/20 light:border-museum-ink-dim/20 group-hover/btn:border-silver-dim/35 light:group-hover/btn:border-museum-ink-dim/35 transition-colors duration-300" />

                      <span className="leading-none">{t.send}</span>
                      <span className="leading-none text-silver-dim/40 light:text-museum-ink-dim/40 group-hover/btn:text-silver-dim/60 light:group-hover/btn:text-museum-ink-dim/60 group-hover/btn:translate-x-1 transition-all duration-300">→</span>
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
