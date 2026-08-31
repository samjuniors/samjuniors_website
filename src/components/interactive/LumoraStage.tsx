'use client';

import { useState } from 'react';
import styles from './LumoraStage.module.css';

type Mode = 'spatial' | 'inference' | 'export';

const modeDetails = {
  spatial: {
    title: 'Spatial Canvas Coordination',
    desc: 'Direct node graph for anchoring 3D spatial models, camera trajectories, and interactive geometry.',
    icon: '3D',
    target: 'WebGL / WebGPU',
    latency: '<16ms',
  },
  inference: {
    title: 'Local Context Engine',
    desc: 'On-device reasoning pipeline assisting layout generation without telemetry or private data egress.',
    icon: 'AI',
    target: 'Local Engine',
    latency: '0ms Network',
  },
  export: {
    title: 'Deterministic Target Export',
    desc: 'Compiles spatial logic directly into clean native, web, and XR runtimes without proprietary lock-in.',
    icon: '</>',
    target: 'Multi-Runtime',
    latency: 'Native Speed',
  },
};

export function LumoraStage() {
  const [activeMode, setActiveMode] = useState<Mode>('spatial');
  const details = modeDetails[activeMode];

  return (
    <section id="lumora" className={styles.stage} aria-labelledby="lumora-heading">
      <div className={styles.intro}>
        <div className={styles.eyebrow}>Flagship Platform</div>
        <h2 id="lumora-heading" className={styles.headline}>
          Lumora — Spatial Logic & Authoring
        </h2>
        <p className={styles.lead}>
          Our first major platform expression. Lumora merges spatial computing with high-precision authoring tools, giving builders sovereign control over next-generation digital environments.
        </p>
      </div>

      {/* Authentic Restrained Product Workbench */}
      <div className={styles.workbench} role="region" aria-label="Lumora Platform Workbench">
        <div className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>lumora-workbench // environment_v1</span>
          </div>
          <div className={styles.topbarModes} role="tablist" aria-label="System Modes">
            <button
              role="tab"
              aria-selected={activeMode === 'spatial'}
              className={`${styles.modeBtn} ${activeMode === 'spatial' ? styles.active : ''}`}
              onClick={() => setActiveMode('spatial')}
            >
              Spatial Graph
            </button>
            <button
              role="tab"
              aria-selected={activeMode === 'inference'}
              className={`${styles.modeBtn} ${activeMode === 'inference' ? styles.active : ''}`}
              onClick={() => setActiveMode('inference')}
            >
              Context Engine
            </button>
            <button
              role="tab"
              aria-selected={activeMode === 'export'}
              className={`${styles.modeBtn} ${activeMode === 'export' ? styles.active : ''}`}
              onClick={() => setActiveMode('export')}
            >
              Target Export
            </button>
          </div>
        </div>

        <div className={styles.workbenchBody}>
          <div className={styles.treePanel}>
            <div className={styles.panelTitle}>Active Hierarchy</div>
            <button
              type="button"
              className={`${styles.treeNode} ${activeMode === 'spatial' ? styles.activeNode : ''}`}
              onClick={() => setActiveMode('spatial')}
            >
              ├─ SpatialMesh.node
            </button>
            <button
              type="button"
              className={`${styles.treeNode} ${activeMode === 'inference' ? styles.activeNode : ''}`}
              onClick={() => setActiveMode('inference')}
            >
              ├─ LocalInference.stream
            </button>
            <button
              type="button"
              className={`${styles.treeNode} ${activeMode === 'export' ? styles.activeNode : ''}`}
              onClick={() => setActiveMode('export')}
            >
              └─ TargetRuntime.export
            </button>
          </div>

          <div className={styles.canvasStage}>
            <div className={styles.canvasGrid} aria-hidden="true" />
            <div className={styles.schematicBox}>
              <div className={styles.schematicIcon} aria-hidden="true">
                {details.icon}
              </div>
              <h3 className={styles.schematicTitle}>{details.title}</h3>
              <p className={styles.schematicDesc}>{details.desc}</p>
            </div>
          </div>

          <div className={styles.inspectorPanel}>
            <div className={styles.panelTitle}>Properties</div>
            <div className={styles.propRow}>
              <span className={styles.propLabel}>Runtime Target</span>
              <span className={styles.propValue}>{details.target}</span>
            </div>
            <div className={styles.propRow}>
              <span className={styles.propLabel}>Execution Latency</span>
              <span className={styles.propValue}>{details.latency}</span>
            </div>
            <div className={styles.propRow}>
              <span className={styles.propLabel}>Data Telemetry</span>
              <span className={styles.propValue}>Zero Egress</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Ledger */}
      <div className={styles.featureLedger}>
        <div className={styles.featureItem}>
          <h3>Tactile Authoring</h3>
          <p>
            Designed for engineers, designers, and spatial architects who require deterministic responsiveness and sub-millimeter precision.
          </p>
        </div>
        <div className={styles.featureItem}>
          <h3>Local-First Reasoning</h3>
          <p>
            Runs machine intelligence models directly on client hardware. Zero private code, geometry, or telemetry leaves your local environment.
          </p>
        </div>
        <div className={styles.featureItem}>
          <h3>Clean Universal Output</h3>
          <p>
            Outputs clean, standards-compliant formats ready for immediate deployment to web, mobile, and native XR execution layers.
          </p>
        </div>
      </div>
    </section>
  );
}
