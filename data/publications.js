/*
 * Publications.
 *
 * ── HOW TO ADD ONE ──────────────────────────────────────────────────────────
 * Copy an entry, edit it, put it at the top. The Publications section and its
 * sidebar nav link appear automatically whenever this array is non-empty.
 *
 * Fields:
 *   authors  — full author list. Wrap your own name in ** ** to bold it.
 *   title    — paper title, no trailing period
 *   venue    — conference / journal, plus symposium or track
 *   year     — number or string
 *   status   — optional badge: "To appear", "Under review", "In preparation",
 *              "Preprint". Omit once the paper is published and citable.
 *   links    — optional: { pdf, doi, arxiv, code, poster, slides }
 *
 * Convention used below: first-author papers first, then co-authored, newest
 * first within each. Change the array order if you'd rather sort purely by date.
 * ────────────────────────────────────────────────────────────────────────────
 */

const PUBLICATIONS = [
  {
    authors:
      "**Sankalp Vaish**, Sumukh Veeramalla, Rishank Singh, Caroline Summerour, John Batsis, Xiaohui Liang",
    title:
      "CogDrift-4D: Hierarchical Multimodal Modeling of Temporal Behavioral Decay for MCI Detection",
    venue:
      "IEEE International Conference on E-health Networking, Application & Services (Healthcom)",
    year: 2026,
    // TODO: set status to "To appear" if accepted but not yet presented, or
    // remove the field entirely once it is published. Add a doi/pdf link below.
    links: {},
  },
  {
    authors:
      "**Sankalp Vaish**, Nana Lin, Umang Shah, Rishank Singh, Xiaohui Liang, Marc Pomplun",
    title:
      "An Enhanced Facial Authentication Approach: Optimized Preprocessing and Automated Filtering for Secure and Reliable Authentication",
    venue:
      "IEEE Global Communications Conference (GLOBECOM), Communication & Information System Security Symposium",
    year: 2026,
    links: {},
  },
  {
    authors:
      "**Sankalp Vaish**, Rishank Singh, Sumukh Veeramalla, Caroline Summerour, John Batsis, Xiaohui Liang",
    title: "Task-Centric Multimodal Learning for Cognitive Impairment Detection",
    venue:
      "IEEE Global Communications Conference (GLOBECOM), Selected Areas in Communications: E-Health",
    year: 2026,
    links: {},
  },
  {
    authors:
      "Rishank Singh, Youxiang Zhu, **Sankalp Vaish**, Caroline Summerour, Xiaohui Liang, John Batsis",
    title:
      "CDBench: Benchmarking Large Language Models for Conversation-Based Dementia Detection",
    venue:
      "IEEE Global Communications Conference (GLOBECOM), Selected Areas in Communications: E-Health",
    year: 2026,
    links: {},
  },
  {
    authors:
      "Rishank Singh, **Sankalp Vaish**, Xiaohui Liang, John Batsis, Jennifer Grace Poole, Danae Gross",
    title: "Clinical Geriatric Functional Assessment using Wearable Sensing and Machine Learning",
    venue:
      "IEEE International Conference on E-health Networking, Application & Services (Healthcom)",
    year: 2024,
    links: {},
  },
];
