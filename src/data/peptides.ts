export interface Peptide {
  id: string;
  slug: string;
  name: string;
  group: 'WEIGHT LOSS' | 'GROWTH HORMONE' | 'HEALING & RECOVERY' | 'COGNITIVE' | 'LONGEVITY';
  evidence: string;
  blurb: string;
  tag: string;
}

export const PEPTIDES: Peptide[] = [
  { id: 'PEP_001', slug: '5-amino-1mq', name: '5-AMINO-1MQ', group: 'WEIGHT LOSS', evidence: 'Preclinical only', blurb: 'A small molecule inhibitor of nicotinamide N-methyltransferase (NNMT) being explored for effects on adipose metabolism and body composition.', tag: 'Metabolic' },
  { id: 'PEP_002', slug: 'adipotide', name: 'ADIPOTIDE (FTPP)', group: 'WEIGHT LOSS', evidence: 'Preclinical only', blurb: 'A proapoptotic peptidomimetic targeting blood vessels of white adipose tissue. Reported significant weight loss in primate studies.', tag: 'Anti-obesity' },
  { id: 'PEP_003', slug: 'aod-9604', name: 'AOD-9604', group: 'WEIGHT LOSS', evidence: 'Limited human data', blurb: 'A modified fragment of human growth hormone studied for fat metabolism without the blood-sugar effects of full-length GH.', tag: 'Fat metabolism' },
  { id: 'PEP_004', slug: 'bpc-157', name: 'BPC-157', group: 'HEALING & RECOVERY', evidence: 'Preclinical / anecdotal', blurb: 'A synthetic peptide derived from a protein found in gastric juice, widely reported for tissue repair and tendon-to-bone healing.', tag: 'Tissue repair' },
  { id: 'PEP_005', slug: 'tb-500', name: 'TB-500 / THYMOSIN BETA-4', group: 'HEALING & RECOVERY', evidence: 'Preclinical / anecdotal', blurb: 'A synthetic version of a naturally occurring peptide reported to support cell migration, angiogenesis and recovery.', tag: 'Recovery' },
  { id: 'PEP_006', slug: 'cjc-1295-no-dac', name: 'CJC-1295 NO DAC', group: 'GROWTH HORMONE', evidence: 'Limited human data', blurb: 'A modified growth-hormone-releasing hormone (GHRH) analog used to increase endogenous GH secretion in a pulsatile pattern.', tag: 'GH secretagogue' },
  { id: 'PEP_007', slug: 'ipamorelin', name: 'IPAMORELIN', group: 'GROWTH HORMONE', evidence: 'Limited human data', blurb: 'A selective growth-hormone secretagogue and ghrelin-receptor agonist noted for a clean side-effect profile in reports.', tag: 'GH secretagogue' },
  { id: 'PEP_008', slug: 'semaglutide', name: 'SEMAGLUTIDE', group: 'WEIGHT LOSS', evidence: 'Approved (Rx)', blurb: 'A GLP-1 receptor agonist used clinically for blood-sugar control and weight management. Mimics the incretin hormone GLP-1.', tag: 'GLP-1 agonist' },
  { id: 'PEP_009', slug: 'selank', name: 'SELANK', group: 'COGNITIVE', evidence: 'Limited human data', blurb: 'A synthetic analog of the immunomodulatory peptide tuftsin, studied in Russia for effects on anxiety-like behavior and focus.', tag: 'Nootropic' },
  { id: 'PEP_010', slug: 'epitalon', name: 'EPITALON (EPITHALON)', group: 'LONGEVITY', evidence: 'Preclinical', blurb: 'A synthetic tetrapeptide reported to regulate the pineal gland and telomerase activity in animal longevity studies.', tag: 'Longevity' },
  { id: 'PEP_011', slug: 'ghk-cu', name: 'GHK-CU (COPPER PEPTIDE)', group: 'HEALING & RECOVERY', evidence: 'Some human data', blurb: 'A copper-binding tripeptide present in plasma, studied for skin remodeling, wound signaling and antioxidant activity.', tag: 'Skin / repair' },
  { id: 'PEP_012', slug: 'glutathione', name: 'GLUTATHIONE', group: 'LONGEVITY', evidence: 'Some human data', blurb: 'The body’s primary endogenous antioxidant tripeptide, supplemented for oxidative-stress and detox-pathway support.', tag: 'Antioxidant' },
  { id: 'PEP_013', slug: 'semax', name: 'SEMAX', group: 'COGNITIVE', evidence: 'Limited human data', blurb: 'A synthetic ACTH(4-10) analog developed in Russia. Reported nootropic and neuroprotective effects through BDNF modulation.', tag: 'Nootropic' },
];

export const PEPTIDE_GROUPS = ['ALL', 'WEIGHT LOSS', 'GROWTH HORMONE', 'HEALING & RECOVERY', 'COGNITIVE', 'LONGEVITY'] as const;
