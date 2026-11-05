import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Route, Mail, Wrench } from "lucide-react";
import styles from "./FeaturedProject.module.css";

const ICONS = { clock: Clock, route: Route, mail: Mail, wrench: Wrench };

/**
 * Wide "featured" project card: switchable screenshot gallery on one side,
 * story + highlights on the other. Stacks on small screens.
 */
function FeaturedProject({ eyebrow, title, subtitle, tech, description, images, mobileImages = [], highlights, stats, footnote }) {
  const [active, setActive] = useState(0);
  const current = images[active];
  // Phones: one big screenshot per slide, swiped horizontally.
  const stripRef = useRef(null);
  const [slide, setSlide] = useState(0);
  const onStripScroll = () => {
    const el = stripRef.current;
    if (!el || !el.firstElementChild) return;
    const step = el.firstElementChild.getBoundingClientRect().width + 12;
    setSlide(Math.min(mobileImages.length - 1, Math.round(el.scrollLeft / step)));
  };
  const goTo = (i) => {
    const el = stripRef.current;
    el?.children[i]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <article className={styles.card}>
      {mobileImages.length > 0 && (
        <div className={styles.mobileMedia}>
          <div className={styles.strip} ref={stripRef} onScroll={onStripScroll} aria-label={`${title} screenshots`}>
            {mobileImages.map((img) => (
              <figure key={img.src} className={styles.slide}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <figcaption>{img.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className={styles.dots}>
            {mobileImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                aria-label={`Show ${img.caption}`}
                aria-current={i === slide}
                className={`${styles.dot} ${i === slide ? styles.dotActive : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      )}

      <div className={`${styles.media} ${mobileImages.length > 0 ? styles.desktopOnly : ""}`}>
        <div className={styles.stage}>
          <AnimatePresence mode="wait">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt}
              className={styles.image}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </AnimatePresence>
        </div>
        <div className={styles.thumbs} role="tablist" aria-label={`${title} screenshots`}>
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
              onClick={() => setActive(i)}
            >
              <img src={img.src} alt="" />
              <span>{img.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.body}>
        <span className={styles.eyebrow}>
          <span className={styles.liveDot} aria-hidden />
          {eyebrow}
        </span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.tech}>{tech}</p>
        <p className={styles.description}>{description}</p>

        <ul className={styles.highlights}>
          {highlights.map((h) => {
            const Icon = ICONS[h.icon];
            return (
              <li key={h.title}>
                <span className={styles.icon}>
                  <Icon size={18} aria-hidden />
                </span>
                <span>
                  <strong>{h.title}</strong> {h.text}
                </span>
              </li>
            );
          })}
        </ul>

        <dl className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
        {footnote && <p className={styles.footnote}>{footnote}</p>}
      </div>
    </article>
  );
}

export default FeaturedProject;
