/**
 * Lumora Intelligence Loop — Demonstration Content Contract
 *
 * Stage fiction for the interactive conceptual demonstration (see the
 * experience-architecture decision record in docs/website/adr/):
 * illustrative scenario data composed for the exhibit, NOT product claims.
 * The workbench presents Lumora's academic intelligence model (Context
 * Ingest → Understanding → Decision Support → Action) as a conceptual
 * demonstration; it must never imply unimplemented product functionality
 * is live (STATUS: beta; exhibit-fiction note in docs/website/copy.md §4).
 *
 * Literal-string authority: docs/website/copy.md §4 / §4.1–§4.4 (string
 * parity enforced by qa-checklist §2.8). Extracted verbatim from
 * LumoraStage.tsx on 2026-08-31 (content-layer contract,
 * component-inventory.md §2.3).
 */

export type LumoraDemoStepId = 'context' | 'understanding' | 'advisory' | 'action';

export interface LumoraDemoSourceItem {
  title: string;
  subtitle: string;
  tag: string;
  active?: boolean;
}

export interface LumoraDemoStep {
  id: LumoraDemoStepId;
  stepNum: string;
  tabLabel: string;
  badge: string;
  headline: string;
  narrative: string;
  sourceContext: LumoraDemoSourceItem[];
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

export const LUMORA_DEMO_STEPS: Record<LumoraDemoStepId, LumoraDemoStep> = {
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

export const LUMORA_DEMO_STEP_ORDER: LumoraDemoStepId[] = ['context', 'understanding', 'advisory', 'action'];
