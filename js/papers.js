// ======================================================
// Past Paper Index — Add new papers here!
// ======================================================

const SUBJECTS = [
  {
    id: 'physics-0625',
    name: 'IGCSE Physics',
    code: '0625',
    icon: '⚛️',
    desc: 'Cambridge IGCSE Physics (0625) — Papers 2, 4, 6',
    papers: [
      // --- 2023 Paper 4 ---
      { year: 'June 2023', paper: '4', variant: '1', type: 'QP', file: 'papers/physics/0625/June 2023 (v1) QP - Paper 4 CAIE Physics IGCSE.pdf' },
      { year: 'June 2023', paper: '4', variant: '1', type: 'MS', file: 'papers/physics/0625/June 2023 (v1) MS - Paper 4 CAIE Physics IGCSE.pdf' },
      { year: 'June 2023', paper: '4', variant: '2', type: 'QP', file: 'papers/physics/0625/June 2023 (v2) QP - Paper 4 CAIE Physics IGCSE.pdf' },
      { year: 'June 2023', paper: '4', variant: '2', type: 'MS', file: 'papers/physics/0625/June 2023 (v2) MS - Paper 4 CAIE Physics IGCSE.pdf' },
      { year: 'June 2023', paper: '4', variant: '3', type: 'QP', file: 'papers/physics/0625/June 2023 (v3) QP - Paper 4 CAIE Physics IGCSE.pdf' },
      { year: 'June 2023', paper: '4', variant: '3', type: 'MS', file: 'papers/physics/0625/June 2023 (v3) MS - Paper 4 CAIE Physics IGCSE.pdf' },

      // --- 2023 Paper 2 ---
      { year: 'June 2023', paper: '2', variant: '1', type: 'QP', file: 'papers/physics/0625/0625_s23_qp_21.pdf' },
      { year: 'June 2023', paper: '2', variant: '1', type: 'MS', file: 'papers/physics/0625/0625_s23_ms_21.pdf' },
      { year: 'June 2023', paper: '2', variant: '2', type: 'QP', file: 'papers/physics/0625/0625_s23_qp_22.pdf' },
      { year: 'June 2023', paper: '2', variant: '2', type: 'MS', file: 'papers/physics/0625/0625_s23_ms_22.pdf' },
      { year: 'June 2023', paper: '2', variant: '3', type: 'QP', file: 'papers/physics/0625/0625_s23_qp_23.pdf' },
      { year: 'June 2023', paper: '2', variant: '3', type: 'MS', file: 'papers/physics/0625/0625_s23_ms_23.pdf' },

      // --- 2022 Paper 2 ---
      { year: 'June 2022', paper: '2', variant: '2', type: 'QP', file: 'papers/physics/0625/0625_s22_qp_22.pdf' },

      // --- 2023 Paper 6 ---
      { year: 'June 2023', paper: '6', variant: '1', type: 'QP', file: 'papers/physics/0625/June 2023 (v1) QP - Paper 6 CAIE Physics IGCSE.pdf' },
      { year: 'June 2023', paper: '6', variant: '2', type: 'QP', file: 'papers/physics/0625/June 2023 (v2) QP - Paper 6 CAIE Physics IGCSE.pdf' },
      { year: 'June 2023', paper: '6', variant: '3', type: 'QP', file: 'papers/physics/0625/June 2023 (v3) QP - Paper 6 CAIE Physics IGCSE.pdf' },
      { year: 'June 2022', paper: '6', variant: '1', type: 'QP', file: 'papers/physics/0625/June 2022 (v1) QP - Paper 6 CAIE Physics IGCSE.pdf' },
      { year: 'June 2022', paper: '6', variant: '2', type: 'QP', file: 'papers/physics/0625/June 2022 (v2) QP - Paper 6 CAIE Physics IGCSE.pdf' },
      { year: 'June 2022', paper: '6', variant: '3', type: 'QP', file: 'papers/physics/0625/June 2022 (v3) QP - Paper 6 CAIE Physics IGCSE.pdf' },
      { year: 'June 2021', paper: '6', variant: '1', type: 'QP', file: 'papers/physics/0625/June 2021 (v1) QP - Paper 6 CIE Physics IGCSE.pdf' },
      { year: 'June 2021', paper: '6', variant: '2', type: 'QP', file: 'papers/physics/0625/June 2021 (v2) QP - Paper 6 CIE Physics IGCSE.pdf' },
      { year: 'June 2021', paper: '6', variant: '3', type: 'QP', file: 'papers/physics/0625/June 2021 (v3) QP - Paper 6 CIE Physics IGCSE.pdf' },
    ]
  },

  {
    id: 'maths-9709',
    name: 'A Level Mathematics',
    code: '9709',
    icon: '📐',
    desc: 'Cambridge A Level Mathematics (9709) — Pure 1/2/3, Mechanics, Statistics',
    papers: [
      { year: 'Oct/Nov 2024', paper: '3', variant: '3', type: 'QP', file: 'papers/maths/9709/9709_w24_qp_33.pdf' },
      { year: 'Oct/Nov 2024', paper: '3', variant: '3', type: 'MS', file: 'papers/maths/9709/9709_w24_ms_33.pdf' },
    ]
  },

  {
    id: 'further-maths-9231',
    name: 'Further Mathematics',
    code: '9231',
    icon: '🔢',
    desc: 'Cambridge A Level Further Maths (9231) — Further Pure, Mechanics, Statistics',
    papers: [
      // Add further maths past papers here as you collect them
    ]
  },

  {
    id: 'maths-0580',
    name: 'IGCSE Mathematics',
    code: '0580',
    icon: '📏',
    desc: 'Cambridge IGCSE Mathematics (0580) — Core & Extended',
    papers: [
      // Add IGCSE maths papers here
    ]
  }
];

const TYPE_LABELS = { QP: 'Question Paper', MS: 'Mark Scheme', GT: 'Grade Threshold', IN: 'Insert' };

function getAllPapers() {
  const all = [];
  SUBJECTS.forEach(s => {
    s.papers.forEach(p => {
      all.push({ ...p, subjectId: s.id, subjectName: s.name });
    });
  });
  return all;
}
