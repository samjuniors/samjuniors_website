'use client';

import { useState } from 'react';
import styles from './LumoraStage.module.css';

type AcademicStep = 'context' | 'understanding' | 'advisory' | 'action';

interface StepData {
  id: AcademicStep;
  stepNum: string;
  tabLabel: string;
  badge: string;
  headline: string;
  narrative: string;
  sourceContext: Array<{ title: string; subtitle: string; tag: string; active?: boolean }>;
  centerGraphic: {
    statusBadge: string;
    stageTitle: string;
    stageSubtitle: string;
  };
  diagnostics: Array<{ label: string; value: string }>;
  bottomStatus: {
    engineState: string;
    privacy: string;
    nextHint: string;
  };
}

const ACADEMIC_STEPS: Record<AcademicStep, StepData> = {
  context: {
    id: 'context',
    stepNum: '01',
    tabLabel: '1. Context Ingest',
    badge: 'Phase 01 // Fragmented Academic Input',
    headline: 'Fragmented Academic Signals Converge',
    narrative: 'Course syllabi, research milestones, exam dates, and degree requirements exist in isolated silos. Lumora continuously unifies these signals into an active academic state.',
    sourceContext: [
      { title: 'CS 3410: Distributed Systems', subtitle: 'Course Syllabus & Labs', tag: 'Ingested', active: true },
      { title: 'MATH 4210: Nonlinear Optimization', subtitle: 'Problem Sets & Exams', tag: 'Ingested', active: true },
      { title: 'Senior Thesis: Consensus Protocols', subtitle: 'Department Milestone Track', tag: 'Active' },
      { title: 'Degree Audit: Core Requirements', subtitle: 'Institutional Record', tag: 'Synced' },
    ],
    centerGraphic: {
      statusBadge: 'Raw Signals Unified',
      stageTitle: 'Continuous Academic Ingest',
      stageSubtitle: '4 Disconnected Syllabi & Schedules Resolved',
    },
    diagnostics: [
      { label: 'Ingested Signals', value: '4 Courses · 18 Credit Units' },
      { label: 'Raw Deadlines', value: '14 Deliverables across 6 Weeks' },
      { label: 'Signal Coherence', value: 'Resolving Course Interdependencies' },
      { label: 'Privacy Vault', value: 'Local Air-Gapped Student Record' },
    ],
    bottomStatus: {
      engineState: 'Context Engine: Ingest Complete',
      privacy: 'Zero Private Data Sent to Cloud',
      nextHint: 'Proceed to Situation Understanding →',
    },
  },
  understanding: {
    id: 'understanding',
    stepNum: '02',
    tabLabel: '2. Understanding',
    badge: 'Phase 02 // Situation Analysis',
    headline: 'Lumora Synthesizes the Situation',
    narrative: 'Rather than passively displaying deadlines, Lumora models workload pressure and cognitive collision points weeks before they occur.',
    sourceContext: [
      { title: 'Workload Diagnostic: Week 8', subtitle: 'Critical Collision Forecast', tag: '⚠ Collision', active: true },
      { title: 'Distributed Systems Exam', subtitle: 'Midterm 2 · 30% Weight', tag: 'High Stake' },
      { title: 'Thesis Chapter 3 Proofs', subtitle: 'Advisor Milestone Deliverable', tag: 'Due W8' },
      { title: 'Optimization Problem Set 4', subtitle: 'Theoretical Derivations', tag: 'Due W8' },
    ],
    centerGraphic: {
      statusBadge: 'Collision Detected',
      stageTitle: 'Week 8 Academic Collision',
      stageSubtitle: '3 Major Deliverables Cluster within a 48-Hour Window',
    },
    diagnostics: [
      { label: 'Detected Friction', value: 'Severe Workload Spike in Week 8' },
      { label: 'Cognitive Risk', value: 'High probability of rushed exam prep' },
      { label: 'Prerequisite Balance', value: 'Theory & Systems colliding simultaneously' },
      { label: 'Analysis Mode', value: 'Contextual Trajectory Simulation' },
    ],
    bottomStatus: {
      engineState: 'Diagnostic: Friction Point Pinpointed',
      privacy: 'Local Contextual Synthesis',
      nextHint: 'Proceed to Decision Support →',
    },
  },
  advisory: {
    id: 'advisory',
    stepNum: '03',
    tabLabel: '3. Decision Support',
    badge: 'Phase 03 // Grounded Guidance',
    headline: 'Explainable Advice Before Crisis Points',
    narrative: 'Lumora generates grounded, transparent recommendations to rebalance study time, protect deep comprehension, and relieve peak stress.',
    sourceContext: [
      { title: 'Advisory: Shift Thesis Proofs', subtitle: 'Pacing Optimization', tag: 'Recommended', active: true },
      { title: 'Exam Review Window', subtitle: '+6.5 Hours Preserved', tag: 'Protected' },
      { title: 'Office Hours Synthesis', subtitle: '3 Targeted Proof Questions', tag: 'Prepared' },
      { title: 'Term Roadmap Impact', subtitle: 'Zero Delay on Final Defense', tag: 'Validated' },
    ],
    centerGraphic: {
      statusBadge: 'Grounded Recommendation',
      stageTitle: 'Advance Thesis Proofing to Week 7',
      stageSubtitle: 'Preserves 6.5 Hours of Dedicated Midterm Review',
    },
    diagnostics: [
      { label: 'Strategic Recommendation', value: 'Front-load Chapter 3 proof milestones' },
      { label: 'Preserved Deep Work', value: '+6.5 Hours for Systems revision' },
      { label: 'Reasoning Rationale', value: 'Eliminates peak panic without debt' },
      { label: 'Human Autonomy', value: '100% Student-Decided Strategy' },
    ],
    bottomStatus: {
      engineState: 'Mentor Engine: Rationale Verified',
      privacy: 'Explainable Algorithmic Output',
      nextHint: 'Proceed to Focus Action →',
    },
  },
  action: {
    id: 'action',
    stepNum: '04',
    tabLabel: '4. Action Workspace',
    badge: 'Phase 04 // Human Action & Focus',
    headline: 'Direct Movement into Deep Execution',
    narrative: 'Once approved, Lumora transitions the plan directly into an active, distraction-free study sprint with linked primary references and private notes.',
    sourceContext: [
      { title: 'Sprint: Consensus Lemmas', subtitle: 'Deep Work Block // 90m', tag: 'In Progress', active: true },
      { title: 'Primary Source: Raft Spec', subtitle: 'Ongaro & Ousterhout (2014)', tag: 'Attached' },
      { title: 'Problem Set Practice Lab', subtitle: 'Scheduled for Tomorrow', tag: 'Synced' },
      { title: 'Student Notes Vault', subtitle: 'Encrypted & Local', tag: 'Secured' },
    ],
    centerGraphic: {
      statusBadge: 'Focus Sprint Active',
      stageTitle: 'Distributed Consensus Proof Session',
      stageSubtitle: '42m Elapsed in 90m Protected Deep-Work Block',
    },
    diagnostics: [
      { label: 'Active Session', value: 'Proof verification for Section 5.2' },
      { label: 'Linked References', value: 'Ongaro & Ousterhout (2014) §5.2' },
      { label: 'Distraction State', value: 'Shielded Workspace Active' },
      { label: 'Progress Tracking', value: 'Milestone 2.1 on Schedule' },
    ],
    bottomStatus: {
      engineState: 'Workspace: Deep Execution Active',
      privacy: 'All Notes Stored on Client Hardware',
      nextHint: 'Cycle Complete // Autonomous Control',
    },
  },
};

const STEP_KEYS: AcademicStep[] = ['context', 'understanding', 'advisory', 'action'];

export function LumoraStage() {
  const [activeStep, setActiveStep] = useState<AcademicStep>('context');
  const current = ACADEMIC_STEPS[activeStep];
  const currentIndex = STEP_KEYS.indexOf(activeStep);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % STEP_KEYS.length;
    setActiveStep(STEP_KEYS[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + STEP_KEYS.length) % STEP_KEYS.length;
    setActiveStep(STEP_KEYS[prevIdx]);
  };

  return (
    <section id="lumora" className={styles.stage} aria-labelledby="lumora-heading">
      {/* Section Header */}
      <div className={styles.intro}>
        <div className={styles.eyebrowRow}>
          <span className={styles.indexNumber}>03</span>
          <span className={styles.eyebrowDivider}>/</span>
          <span className={styles.eyebrow}>Flagship Expression</span>
        </div>
        <h2 id="lumora-heading" className={styles.headline}>
          Lumora — AI-Native Academic Operating System
        </h2>
        <p className={styles.lead}>
          Our first major flagship platform. Lumora turns fragmented coursework, research deadlines, syllabi, and degree requirements into continuous understanding, grounded advisory guidance, and focused action.
        </p>
      </div>

      {/* Cinematic Intelligence Workbench */}
      <div className={styles.workbench} role="region" aria-label="Lumora Intelligence Cycle Demonstration">
        {/* Top Window Chrome with Step Progression Tabs */}
        <div className={styles.windowChrome}>
          <div className={styles.windowBrand}>
            <div className={styles.windowDots} aria-hidden="true">
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <div className={styles.windowTitle}>
              <span className={styles.titleIcon}>◈</span>
              <span>lumora_os // academic_intelligence_loop</span>
            </div>
          </div>

          <div className={styles.stepTabs} role="tablist" aria-label="Academic Intelligence Progression">
            {STEP_KEYS.map((key) => {
              const item = ACADEMIC_STEPS[key];
              const isSelected = activeStep === key;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={isSelected}
                  className={`${styles.tabBtn} ${isSelected ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveStep(key)}
                >
                  <span className={styles.tabNum}>{item.stepNum}</span>
                  <span>{item.tabLabel.replace(/^\d+\.\s*/, '')}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Workbench Body */}
        <div className={styles.workbenchBody}>
          {/* Column 1: Academic Sources Hierarchy */}
          <aside className={styles.sourcesPanel} aria-label="Academic Sources and Inputs">
            <div className={styles.panelHeader}>
              <span>Academic Context</span>
              <span className={styles.panelBadge}>Resolved</span>
            </div>
            <ul className={styles.sourcesList}>
              {current.sourceContext.map((item) => (
                <li key={item.title} className={item.active ? styles.sourceItemActive : styles.sourceItem}>
                  <div className={styles.sourceDetails}>
                    <span className={styles.sourceTitle}>{item.title}</span>
                    <span className={styles.sourceSubtitle}>{item.subtitle}</span>
                  </div>
                  <span className={styles.sourceTag}>{item.tag}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Column 2: Center Demonstration Stage */}
          <main className={styles.canvasArea} aria-label="Intelligence Demonstration Stage">
            {/* Viewport Top HUD */}
            <div className={styles.canvasHud}>
              <span className={styles.hudBadge}>{current.centerGraphic.statusBadge}</span>
              <span className={styles.hudInfo}>{current.centerGraphic.stageSubtitle}</span>
            </div>

            {/* Central Graphic Area */}
            <div className={styles.canvasCenter}>
              <div className={styles.canvasGrid} aria-hidden="true" />

              {/* State 01: Context Ingest Visual */}
              {activeStep === 'context' && (
                <div className={styles.visualCard}>
                  <div className={styles.cardHeaderRow}>
                    <span className={styles.cardTitle}>Resolved Academic Signal</span>
                    <span className={styles.cardTag}>Active Stream</span>
                  </div>
                  <div className={styles.timelineRows}>
                    <div className={styles.timelineRow}>
                      <span className={styles.weekLabel}>CS 3410</span>
                      <div className={styles.barItem}>Distributed Systems · Lab 3 &amp; Consensus Readings</div>
                    </div>
                    <div className={styles.timelineRow}>
                      <span className={styles.weekLabel}>MATH 4210</span>
                      <div className={styles.barItem}>Nonlinear Optimization · Convex Analysis P-Set</div>
                    </div>
                    <div className={styles.timelineRow}>
                      <span className={styles.weekLabel}>Thesis</span>
                      <div className={styles.barItem}>Formal Verification of Leader Election Lemmas</div>
                    </div>
                  </div>
                </div>
              )}

              {/* State 02: Situation Understanding Visual */}
              {activeStep === 'understanding' && (
                <div className={styles.visualCard}>
                  <div className={styles.cardHeaderRow}>
                    <span className={styles.cardTitle}>Academic Trajectory Forecast</span>
                    <span className={styles.cardWarningTag}>Friction Point</span>
                  </div>
                  <div className={styles.timelineRows}>
                    <div className={styles.timelineRow}>
                      <span className={styles.weekLabel}>Week 07</span>
                      <div className={styles.barItem}>Standard Pacing · 2 Problem Sets · Normal Load</div>
                    </div>
                    <div className={styles.timelineRow}>
                      <span className={styles.weekLabel}>Week 08</span>
                      <div className={styles.barWarning}>
                        <span className={styles.warningIcon}>⚠</span>
                        <span>Midterm Exam 2 + Thesis Chapter 3 Draft due simultaneously</span>
                      </div>
                    </div>
                    <div className={styles.timelineRow}>
                      <span className={styles.weekLabel}>Week 09</span>
                      <div className={styles.barItem}>Elective Sequencing Window · Thesis Peer Review</div>
                    </div>
                  </div>
                </div>
              )}

              {/* State 03: Decision Advisory Visual */}
              {activeStep === 'advisory' && (
                <div className={styles.advisoryContainer}>
                  <div className={styles.advisoryTop}>
                    <span className={styles.advisoryPill}>Mentor Recommendation</span>
                    <span className={styles.advisoryImpact}>High Impact (+6.5h)</span>
                  </div>
                  <h4 className={styles.advisoryHeadline}>Shift Thesis Chapter 3 Proofs 4 Days Forward</h4>
                  <p className={styles.advisoryBody}>
                    By finalizing formal consensus proofs in Week 7 instead of Week 8, you open 6.5 hours of calm, high-retention review for the Distributed Systems midterm without compromising thesis depth.
                  </p>
                  <div className={styles.advisoryBottom}>
                    <span className={styles.verifiedTag}>✓ Student-Validated Strategy</span>
                    <span className={styles.explainableTag}>Explainable Rationale</span>
                  </div>
                </div>
              )}

              {/* State 04: Action Workspace Visual */}
              {activeStep === 'action' && (
                <div className={styles.workspaceContainer}>
                  <div className={styles.workspaceHeader}>
                    <div className={styles.timerBadge}>
                      <span className={styles.pulseDot} aria-hidden="true" />
                      <span>Focus Sprint // 42:18 Elapsed</span>
                    </div>
                    <span className={styles.trackLabel}>Senior Thesis / Proof Analysis</span>
                  </div>
                  <div className={styles.workspaceObjective}>
                    <span className={styles.objectiveLabel}>Active Objective</span>
                    <p className={styles.objectiveText}>Verify Raft leader election safety lemmas against edge-case network partitions.</p>
                  </div>
                  <div className={styles.workspaceTags}>
                    <span className={styles.tagItem}>Ref: Ongaro &amp; Ousterhout (2014)</span>
                    <span className={styles.tagItem}>Notes: Local &amp; Air-Gapped</span>
                  </div>
                </div>
              )}

              {/* Explanation Caption */}
              <div className={styles.explanationArea}>
                <div className={styles.explanationBadge}>{current.badge}</div>
                <h3 className={styles.explanationTitle}>{current.headline}</h3>
                <p className={styles.explanationText}>{current.narrative}</p>
              </div>
            </div>

            {/* Viewport Bottom Status Bar with Step Navigation Controls */}
            <div className={styles.canvasFooter}>
              <div className={styles.statusInfo}>
                <span className={styles.engineTag}>{current.bottomStatus.engineState}</span>
                <span className={styles.privacyTag}>{current.bottomStatus.privacy}</span>
              </div>
              <div className={styles.stepControls}>
                <button
                  type="button"
                  onClick={handlePrev}
                  className={styles.controlBtn}
                  aria-label="Previous Step"
                >
                  ←
                </button>
                <span className={styles.stepIndicator}>
                  {currentIndex + 1} / {STEP_KEYS.length}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className={styles.controlBtnPrimary}
                  aria-label="Next Step"
                >
                  Next Step →
                </button>
              </div>
            </div>
          </main>

          {/* Column 3: Grounded Diagnostics Inspector */}
          <aside className={styles.diagnosticsPanel} aria-label="Academic Diagnostics">
            <div className={styles.panelHeader}>
              <span>Diagnostics</span>
              <span className={styles.panelBadge}>Grounded</span>
            </div>
            <div className={styles.diagnosticsList}>
              {current.diagnostics.map((diag) => (
                <div key={diag.label} className={styles.diagItem}>
                  <span className={styles.diagLabel}>{diag.label}</span>
                  <span className={styles.diagValue}>{diag.value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* Architectural Philosophy Bridge beneath the Workbench (No repetitive card tiles) */}
      <div className={styles.philosophyBridge}>
        <div className={styles.bridgeContent}>
          <div className={styles.bridgeEyebrow}>The Purpose of an Academic OS</div>
          <p className={styles.bridgeQuote}>
            &ldquo;Traditional institutions provide immense knowledge; Lumora provides the operating system to master it. By resolving fragmented records into grounded clarity, we give builders, researchers, and students sovereign agency over their intellectual trajectory.&rdquo;
          </p>
        </div>
        <div className={styles.bridgeLedger}>
          <div className={styles.ledgerRow}>
            <span className={styles.ledgerKey}>Context Convergence</span>
            <span className={styles.ledgerVal}>Continuous synthesis of syllabi, milestones, and exams into a single active timeline.</span>
          </div>
          <div className={styles.ledgerRow}>
            <span className={styles.ledgerKey}>Grounded Guidance</span>
            <span className={styles.ledgerVal}>Explainable recommendations that pinpoint cognitive friction weeks before deadlines collide.</span>
          </div>
          <div className={styles.ledgerRow}>
            <span className={styles.ledgerKey}>Sovereign Action</span>
            <span className={styles.ledgerVal}>Distraction-free focus execution with zero cloud telemetry or private data extraction.</span>
          </div>
        </div>
      </div>
    </section>
  );
}



