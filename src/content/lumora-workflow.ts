/**
 * Lumora — Real Product Workflow (content contract)
 *
 * Authoritative source: the Lumora product repository (samjuniors/Lumoraglm) —
 * its PRD, PRODUCT-CONSTITUTION.md, product decision records, and Prisma
 * schema. Every string below describes assessment behaviour that the product
 * actually implements or explicitly specifies.
 *
 * Governing constraints for anyone editing this file:
 *  - Lumora is an AI-native academic *assessment and progression* platform. It
 *    is not a student productivity suite, a course-material aggregator, a
 *    scheduler, or a workload predictor. Do not reintroduce those claims.
 *  - Lumora's evaluation runs on a hosted model (Google Gemini). Do not make
 *    privacy claims about on-device processing, isolated offline records, or
 *    data never leaving the institution.
 *  - Status is pre-launch beta. Do not describe anything here as generally
 *    available.
 *  - Do not restate internal business economics (market sizing, revenue,
 *    margins, competitor pricing) or present internal accuracy targets as
 *    established external facts.
 *  - src/app/product-truth.test.tsx enforces the removed claims against both
 *    source text and rendered output. Reword rather than adding an exception.
 */

export type LumoraWorkflowStepId = 'intake' | 'evaluation' | 'triage' | 'release';

export interface LumoraWorkflowStep {
  id: LumoraWorkflowStepId;
  /** Display ordinal. */
  order: string;
  /** Short label used in navigation and rails. */
  label: string;
  /** Who acts at this step. */
  actor: string;
  headline: string;
  narrative: string;
  /** Literal, checkable facts about this step. */
  detail: Array<{ label: string; value: string }>;
  /** Where control sits at this step. */
  decision: string;
  /** What moves to the next step. */
  handoff: string;
}

export const LUMORA_WORKFLOW_STEPS: Record<LumoraWorkflowStepId, LumoraWorkflowStep> = {
  intake: {
    id: 'intake',
    order: '01',
    label: 'Submission Intake',
    actor: 'Teacher sets up · student submits',
    headline: 'Work arrives against a rubric, not into a void',
    narrative:
      'A teacher defines the course, the assignment, and the rubric or answer key the work will be judged against. Students submit against that definition from a browser or a phone. Nothing is evaluated until there is something concrete to evaluate it against.',
    detail: [
      { label: 'Set up by the teacher', value: 'Course → assignment → rubric or answer key' },
      { label: 'Submitted by the student', value: 'Web workspace or mobile submission' },
      { label: 'Grading mode', value: 'Chosen per assignment, from fully manual to AI-assisted' },
      { label: 'Precondition', value: 'No evaluation without a rubric or answer key' },
    ],
    decision: 'The teacher decides what counts as correct before any AI sees the work.',
    handoff: 'Submission queued for evaluation',
  },
  evaluation: {
    id: 'evaluation',
    order: '02',
    label: 'AI Evaluation',
    actor: 'Lumora evaluation pipeline',
    headline: 'Evaluated against the teacher’s own criteria',
    narrative:
      'The submission is evaluated by Google Gemini against the rubric or answer key the teacher supplied — not against a generic model opinion. Each evaluation produces a proposed score and rubric-level feedback. Jobs that fail are held in a visible dead-letter queue for retry instead of being silently dropped.',
    detail: [
      { label: 'Evaluation engine', value: 'Google Gemini' },
      { label: 'Graded against', value: 'The teacher’s rubric or answer key' },
      { label: 'Produces', value: 'A proposed score and rubric-level feedback' },
      { label: 'Failure handling', value: 'Dead-letter queue — visible, retryable, never silent' },
    ],
    decision: 'Output is a proposal. At this point nothing is a grade and nothing is visible to the student.',
    handoff: 'Proposed score passed to triage',
  },
  triage: {
    id: 'triage',
    order: '03',
    label: 'Confidence Triage',
    actor: 'Lumora calibration',
    headline: 'Not all AI output is treated as equally trustworthy',
    narrative:
      'Every evaluation is assigned a calibrated confidence band — High, Medium, or Review — so a teacher can see where their attention is actually required. Calibration is derived from the platform’s own record: historical accuracy, how often educators override, rubric quality, and evaluation consistency.',
    detail: [
      { label: 'Bands', value: 'High · Medium · Review' },
      { label: 'Calibrated from', value: 'Historical accuracy and educator override frequency' },
      { label: 'Also weighted by', value: 'Rubric quality and evaluation consistency' },
      { label: 'Purpose', value: 'Direct the teacher’s attention — never replace it' },
    ],
    decision: 'Banding routes work to the teacher. It does not grant permission to skip them.',
    handoff: 'Banded queue surfaced to the teacher',
  },
  release: {
    id: 'release',
    order: '04',
    label: 'Teacher Review & Release',
    actor: 'Teacher',
    headline: 'No grade reaches a student without a teacher releasing it',
    narrative:
      'The teacher works a queue. Each item can be approved, edited, overridden, returned for revision, or re-run. Release is a separate, deliberate action — and only after release does the student see the score and its rubric-level feedback, with progression and mastery updating from there.',
    detail: [
      { label: 'Teacher actions', value: 'Approve · edit score · edit feedback · override · re-run · return for revision' },
      { label: 'Release', value: 'An explicit step, separate from evaluation' },
      { label: 'Accountability', value: 'Every decision written to an immutable audit log' },
      { label: 'Student receives', value: 'Released score and feedback — then progression updates' },
    ],
    decision: 'The educator is the release gate. There is no automatic release path.',
    handoff: 'Released to the student · progression and mastery update',
  },
};

export const LUMORA_WORKFLOW_STEP_ORDER: LumoraWorkflowStepId[] = [
  'intake',
  'evaluation',
  'triage',
  'release',
];

/** Load-bearing product principle. Stated in the product's own terms. */
export const LUMORA_PRINCIPLE =
  'AI recommends. Humans decide. Every grade released to a student requires educator action.';
