'use client';

import { useState } from 'react';
import styles from './LumoraWorkbench.module.css';

type Mode = 'spatial' | 'engine' | 'export';
type NodeKey = 'canvas' | 'inference' | 'compiler';

const modeData = {
  spatial: {
    title: 'Spatial Graph Synthesis',
    description:
      'Direct visual node canvas translating spatial authoring intent into deterministic, high-performance computing models.',
    tags: ['WebGL/Wasm', 'Sub-16ms Frame Budget', 'Spatial Graph'],
  },
  engine: {
    title: 'Contextual Intelligence Engine',
    description:
      'Local-first reasoning pipeline that assists creation without streaming private geometry or telemetry to cloud servers.',
    tags: ['Local-First', 'Zero Data Retention', 'Context Reasoning'],
  },
  export: {
    title: 'Universal Export Standard',
    description:
      'Deterministic compilation producing clean, portable code targets for web, native mobile, and XR runtimes.',
    tags: ['Zero Vendor Lock-in', 'Open Schemas', 'Multi-Platform'],
  },
};

const nodes = [
  { key: 'canvas' as NodeKey, name: 'Spatial Node Graph', meta: 'Direct spatial authoring' },
  { key: 'inference' as NodeKey, name: 'Intelligence Pipeline', meta: 'Local context assist' },
  { key: 'compiler' as NodeKey, name: 'Deterministic Runtime', meta: 'Multi-target compilation' },
];

export function LumoraWorkbench() {
  const [activeMode, setActiveMode] = useState<Mode>('spatial');
  const [activeNode, setActiveNode] = useState<NodeKey>('canvas');

  const currentMode = modeData[activeMode];

  return (
    <div className={styles.workbench} role="region" aria-label="Interactive Lumora Platform Preview">
      <div className={styles.topbar}>
        <div className={styles.systemLabel}>
          <span className={styles.liveIndicator} aria-hidden="true" />
          <span>LUMORA_ENVIRONMENT // V1.0_PREVIEW</span>
        </div>
        <div className={styles.modeTabs} role="tablist" aria-label="Workbench Modes">
          <button
            role="tab"
            aria-selected={activeMode === 'spatial'}
            className={`${styles.tabBtn} ${activeMode === 'spatial' ? styles.active : ''}`}
            onClick={() => setActiveMode('spatial')}
          >
            Spatial Graph
          </button>
          <button
            role="tab"
            aria-selected={activeMode === 'engine'}
            className={`${styles.tabBtn} ${activeMode === 'engine' ? styles.active : ''}`}
            onClick={() => setActiveMode('engine')}
          >
            Intelligence
          </button>
          <button
            role="tab"
            aria-selected={activeMode === 'export'}
            className={`${styles.tabBtn} ${activeMode === 'export' ? styles.active : ''}`}
            onClick={() => setActiveMode('export')}
          >
            Export
          </button>
        </div>
      </div>

      <div className={styles.viewport}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarTitle}>Active Systems</div>
          {nodes.map((node) => (
            <button
              key={node.key}
              type="button"
              className={`${styles.nodeItem} ${activeNode === node.key ? styles.activeNode : ''}`}
              onClick={() => setActiveNode(node.key)}
            >
              <div className={styles.nodeName}>{node.name}</div>
              <div className={styles.nodeMeta}>{node.meta}</div>
            </button>
          ))}
        </div>

        <div className={styles.canvasStage}>
          <div className={styles.visualizerBox}>
            <div className={styles.graphicRing} aria-hidden="true">
              <div className={styles.coreNode} />
            </div>
            <h3 className={styles.headline}>{currentMode.title}</h3>
            <p className={styles.desc}>{currentMode.description}</p>
            <div className={styles.tagRow}>
              {currentMode.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
