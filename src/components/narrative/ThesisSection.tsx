import { companyContent } from '@/content/company';
import { Reveal } from '@/components/interactive/Reveal';
import styles from './ThesisSection.module.css';

/**
 * Scene 02 — Thesis (ADR-001 §3, design-system §6.8.6).
 *
 * The calm reading zone: the scene narrows from the overture's 1240px
 * container to a ≤980px editorial measure (the width/density change of the
 * scene rhythm), and first-entry reveals pace the reading — one reveal for
 * the header, one for the cycle spine, and a ≤3-sibling stagger for the
 * conviction blocks. The editorial composition itself (asymmetric dual
 * flow) is preserved unchanged.
 */
export function ThesisSection() {
  return (
    <section id="thesis" className={styles.thesis} aria-labelledby="thesis-heading">
      <div className={styles.thesisInner}>
        {/* Section Header Statement */}
        <Reveal className={styles.headerArea}>
          <div className={styles.labelRow}>
            <span className={styles.indexNumber}>02</span>
            <span className={styles.divider}>/</span>
            <span className={styles.label}>Building Philosophy</span>
          </div>
          <h2 id="thesis-heading" className={styles.statement}>
            Technology should compound in value over decades, not fade with the <em>next cycle</em>.
          </h2>
          <p className={styles.statementLead}>
            We deliberately avoid disposable wrappers and speculative hype. Durable
            software comes from real utility, rigorous engineering craft, and
            keeping human judgement in the loop where the stakes are highest.
          </p>
        </Reveal>

        {/* Asymmetric Dual Flow: The 6-Stage Building Cycle & Deep Philosophy */}
        <div className={styles.editorialGrid}>
          {/* Left Spine: The 6-Stage Building Cycle */}
          <Reveal className={styles.cycleColumn} aria-label="The SamJuniors Building Cycle">
            <div className={styles.columnLabel}>The Building Cycle</div>
            <ol className={styles.cycleList}>
              {companyContent.buildingCycle.map((stage) => (
                <li key={stage.stage} className={styles.cycleStep}>
                  <div className={styles.stepMarker}>
                    <span className={styles.stepNum}>0{stage.stage}</span>
                    <span className={styles.stepLine} aria-hidden="true" />
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{stage.title}</h3>
                    <p className={styles.stepDesc}>{stage.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Right Flow: Core Convictions */}
          <div className={styles.convictionColumn}>
            <div className={styles.columnLabel}>Core Convictions</div>
            <Reveal className={styles.proseBlock}>
              <h3 className={styles.proseHeading}>Durable Compounding vs. Ephemeral Novelty</h3>
              <p className={styles.proseText}>
                Every system we engineer is designed to eliminate deep structural friction in professional and academic workflows. Rather than packaging superficial API wrappers, we build foundational tools that grow more dependable with everyday use.
              </p>
            </Reveal>

            <Reveal className={styles.proseBlock} delay={90}>
              <h3 className={styles.proseHeading}>Human Mastery Over Passive Automation</h3>
              <p className={styles.proseText}>
                Computing should expand human judgement, not quietly replace it. We
                build instruments that give professionals speed and comprehension
                while keeping the person accountable for the outcome in control of
                it — recommendation is the machine&apos;s job, the decision is theirs.
              </p>
            </Reveal>

            <Reveal className={styles.proseBlock} delay={180}>
              <h3 className={styles.proseHeading}>Truthful Systems</h3>
              <p className={styles.proseText}>
                A system should tell you how confident it is, show its working, and
                keep a record of who decided what. We would rather surface an
                uncertain result for review than present a confident-looking answer
                nobody can audit.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
