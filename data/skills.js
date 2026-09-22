/*
 * Skills, grouped and labeled.
 *
 * The old page rendered 30 unlabeled glyphs whose names lived only in a
 * `title` attribute — invisible when skimming, unreliable for screen readers.
 * Each entry now carries a visible name; `icon` is an optional devicon class.
 *
 * If an icon class doesn't exist in the loaded devicon version the glyph
 * renders empty and the pill falls back to text alone, so a wrong or missing
 * icon degrades gracefully rather than breaking the layout.
 */

const SKILL_GROUPS = [
  {
    group: "Machine Learning & AI",
    items: [
      { name: "PyTorch", icon: "devicon-pytorch-original" },
      { name: "TensorFlow", icon: "devicon-tensorflow-original" },
      { name: "scikit-learn" },
      { name: "OpenCV", icon: "devicon-opencv-plain" },
      { name: "Pandas", icon: "devicon-pandas-original" },
      { name: "NumPy", icon: "devicon-numpy-original" },
      { name: "NLTK" },
    ],
  },
  {
    group: "Research Areas",
    items: [
      { name: "Large Language Models" },
      { name: "Vision-Language Models" },
      { name: "Transformers" },
      { name: "Multimodal Learning" },
      { name: "Retrieval-Augmented Generation" },
      { name: "Neural Networks" },
      { name: "Computer Vision" },
    ],
  },
  {
    group: "Languages",
    items: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "C", icon: "devicon-c-plain" },
      { name: "C++", icon: "devicon-cplusplus-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "Solidity", icon: "devicon-solidity-plain" },
    ],
  },
  {
    group: "Web",
    items: [
      { name: "Django", icon: "devicon-django-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
      { name: "jQuery", icon: "devicon-jquery-plain" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
    ],
  },
  {
    group: "Data & Vector Stores",
    items: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "ChromaDB" },
      { name: "Qdrant" },
    ],
  },
  {
    group: "Cloud & LLM Platforms",
    items: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain" },
      { name: "Amazon Bedrock" },
      { name: "Ollama" },
      { name: "Langfuse" },
    ],
  },
  {
    group: "Tools & Infrastructure",
    items: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "npm", icon: "devicon-npm-original-wordmark" },
      { name: "Odoo" },
      { name: "HubSpot" },
    ],
  },
  {
    group: "Visualization & 3D",
    items: [
      { name: "Plotly" },
      { name: "Blender", icon: "devicon-blender-original" },
      { name: "Three.js", icon: "devicon-threejs-original" },
    ],
  },
];
