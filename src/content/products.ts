import { Product } from './types';
import { LUMORA_PRINCIPLE } from './lumora-workflow';

/**
 * Product Ecosystem Registry
 *
 * Source of truth: the Lumora product repository (samjuniors/Lumoraglm).
 * Capabilities listed under `capabilities` are implemented and observable in
 * the product today; anything not yet available belongs in `roadmap` and must
 * be labelled as such. Do not add speculative capabilities, and do not restate
 * internal business economics or internal accuracy targets here.
 *
 * The registry is intentionally product-agnostic: the website's information
 * architecture must not be hardwired around a single product, and "flagship"
 * must never simply mean "newest" (docs/company/foundation.md).
 */
export const products: Product[] = [
  {
    slug: 'lumora',
    name: 'Lumora',
    category: 'AI-native academic assessment & progression platform',
    tagline: 'AI-assisted grading that only a teacher can release.',
    shortDescription:
      'Lumora evaluates student submissions against the teacher’s own rubric, tells the teacher how much to trust each evaluation, and requires an explicit human release before any grade reaches a student.',
    problem:
      'Grading at scale forces a choice between depth and time. Teachers either give every student real rubric-level feedback and lose their week to it, or they move fast and the feedback thins out. Fully automated grading resolves the time problem by removing the educator — which is the part that actually matters.',
    audience: {
      primary: 'Teachers and instructors',
      secondary: ['Students', 'Institution administrators', 'Independent educators'],
    },
    status: 'beta',
    statusLabel: 'Pre-launch · Phase 1 core workflow beta · in active development',
    principle: LUMORA_PRINCIPLE,
    isFlagship: true,
    workflow: [
      {
        id: 'intake',
        order: '01',
        label: 'Submission Intake',
        summary: 'Course, assignment, and rubric or answer key are defined first. Students submit against that definition.',
      },
      {
        id: 'evaluation',
        order: '02',
        label: 'AI Evaluation',
        summary: 'Google Gemini evaluates the submission against the teacher’s criteria and proposes a score with rubric-level feedback.',
      },
      {
        id: 'triage',
        order: '03',
        label: 'Confidence Triage',
        summary: 'Each evaluation is banded High, Medium, or Review using calibration from the platform’s own accuracy and override record.',
      },
      {
        id: 'release',
        order: '04',
        label: 'Teacher Review & Release',
        summary: 'The teacher approves, edits, overrides, re-runs, or returns the work — then releases it. Release is the only path to the student.',
      },
    ],
    capabilities: [
      {
        title: 'Teacher grading queue',
        description:
          'A single queue of submissions grouped by confidence band, with per-submission score, confidence, and review state — built around reviewing and releasing, not around a dashboard.',
        isPlaceholder: false,
      },
      {
        title: 'Gemini evaluation pipeline',
        description:
          'Submissions are evaluated against the assignment’s rubric or answer key. Queue depth, failures, and latency are observable, and failed jobs are held in a dead-letter queue rather than dropped.',
        isPlaceholder: false,
      },
      {
        title: 'Calibrated confidence bands',
        description:
          'Every evaluation carries a High, Medium, or Review band so teachers can spend their attention where the model is least certain.',
        isPlaceholder: false,
      },
      {
        title: 'Human review, override, and release gate',
        description:
          'Approve, edit the score, edit the feedback, override, request a re-run, or return for revision. Nothing becomes visible to a student without an explicit release action.',
        isPlaceholder: false,
      },
      {
        title: 'Immutable decision audit trail',
        description:
          'Evaluation and release decisions are recorded to an append-only activity log, so a released grade can always be traced to the educator who released it.',
        isPlaceholder: false,
      },
      {
        title: 'Student mobile workspace',
        description:
          'Students submit from a phone, track what is due, and read released rubric-level feedback and progression once a teacher has released it.',
        isPlaceholder: false,
      },
      {
        title: 'Independent educator setup',
        description:
          'Course-first onboarding for educators without an institution behind them: create a course, share a submission link, and start reviewing.',
        isPlaceholder: false,
      },
    ],
    roadmap: [
      {
        title: 'LMS and SIS integration',
        description: 'Roster sync and grade passback to existing institutional systems. Not available today.',
        horizon: 'planned',
      },
      {
        title: 'Full assessment intelligence',
        description: 'Cohort-level mastery analysis and advanced progression analytics beyond per-assignment feedback.',
        horizon: 'planned',
      },
      {
        title: 'Institutional compliance and SSO',
        description: 'Institution-wide identity federation and a dedicated compliance administration surface.',
        horizon: 'planned',
      },
      {
        title: 'Conversational student guidance',
        description: 'Interactive AI tutoring and multi-language support for students. Deliberately out of scope for the assessment core.',
        horizon: 'planned',
      },
    ],
    evidence: [
      {
        id: 'teacher-workspace',
        type: 'product-surface',
        title: 'Teacher workspace and grading queue',
        description:
          'The primary surface. It opens on the decision the teacher has to make, not on analytics.',
        observed: [
          'Next action states the pending count and offers approve, edit, or override — release is described as the step that makes a grade visible to students.',
          'The grading queue groups submissions by confidence band and shows per-row score, confidence, and review state.',
          'The evaluation pipeline reports queue depth, failed (dead-letter) jobs, average latency, and success rate.',
          'Calibration is tracked as approval and override rates across logged decisions.',
        ],
        isDemoData: true,
        isPlaceholder: false,
      },
      {
        id: 'student-mobile',
        type: 'product-surface',
        title: 'Student mobile workspace',
        description: 'What the other side of the release gate looks like on a phone.',
        observed: [
          'Submission is designed as a sub-minute action from a phone.',
          'Grades appear only as released items, each carrying rubric-level feedback.',
          'Course progression is shown alongside due and overdue work.',
        ],
        isDemoData: true,
        isPlaceholder: false,
      },
      {
        id: 'independent-educator',
        type: 'product-surface',
        title: 'Independent educator onboarding',
        description: 'Course-first setup for an educator with no institution behind them.',
        observed: [
          'Quick-start path is create a course, share a submission link, invite students.',
          'Submission links are shareable join URLs — no institutional account required.',
          'The workspace is explicitly labelled as demonstration data.',
        ],
        isDemoData: true,
        isPlaceholder: false,
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getFlagshipProduct(): Product {
  const flagship = products.find((p) => p.isFlagship);
  if (!flagship) {
    return products[0];
  }
  return flagship;
}
