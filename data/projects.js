/*
 * Project data.
 *
 * To add a project: copy an object, edit it, done. No HTML to touch.
 *
 * links: fill in any of { code, demo, writeup }. Omit or leave "" to hide
 *        that button. Adding repo links to the featured projects is the
 *        single highest-value edit you can make to this site.
 */

const FEATURED_PROJECTS = [
  {
    title: "Gmail RAG Assistant",
    period: "Dec 2025 – Jan 2026",
    summary:
      "A privacy-preserving Retrieval-Augmented Generation system that indexes Gmail messages into a local vector database and answers natural-language questions over them using a locally hosted LLM — no email content leaves the machine.",
    tags: ["Python", "LLaMA 3", "RAG", "ChromaDB", "Ollama", "Google APIs"],
    links: { code: "", demo: "", writeup: "" }, // TODO: add repo URL
  },
  {
    title: "ML Model Training & Analytics Platform",
    period: "2025 – Jan 2026", // TODO: confirm start month
    summary:
      "A full-stack Django application for end-to-end data analysis, preprocessing and model training. Supports interactive visualizations, configurable train–test splits and scaling, multiple algorithms, and side-by-side comparison of run results.",
    tags: ["Python", "Django", "scikit-learn", "Plotly", "Pandas", "NumPy", "JavaScript"],
    links: { code: "", demo: "", writeup: "" }, // TODO: add repo URL
  },
  {
    title: "Dementia Detection via Alexa Interactions",
    period: "Aug 2025 – Dec 2025",
    summary:
      "A contactless system for assessing cognitive decline in older adults, analysing facial muscle activity and speech during structured Alexa interactions. Multimodal features were correlated against MoCA scores to validate the signal.",
    tags: ["Python", "OpenCV", "NLTK", "Multimodal Transformers"],
    // TODO: paste a DOI / IEEE Xplore URL into `paper` and a "Paper" link
    // appears on the card. This work underpins two publications:
    //   • CogDrift-4D (Healthcom 2026)
    //   • Task-Centric Multimodal Learning for Cognitive Impairment Detection
    //     (GLOBECOM 2026)
    // Pick whichever is the better citation, or split into two project entries.
    links: { paper: "", code: "", demo: "", writeup: "" },
  },
  {
    title: "Diabetes Distress",
    period: "Sep 2025 – Nov 2025",
    summary:
      "A voice-based sentiment analysis model that predicts distress levels from real patient audio and conversation transcripts, aimed at improving patient–doctor communication for people managing chronic disease.",
    tags: ["Python", "Unsupervised Learning", "NLTK", "scikit-learn"],
    award: "Public Choice Award — UMass Boston AI Hackathon",
    links: {
      code: "", // TODO: add repo URL
      demo: "",
      writeup: "https://stampleyresearchgroup.com/ai-diabetes-hackathon-team/",
    },
  },
  {
    title: "Federated Authentication & Hardware MFA",
    period: "May 2025 – Jun 2025",
    summary:
      "Worked with a local government to integrate ADFS into their server environment, enabling secure single sign-on across applications including Exchange. Implemented YubiKey-based multi-factor authentication, smart card authentication for Windows logins, and YubiKey auth for Fortinet VPN.",
    tags: ["ADDS", "ADFS", "YubiKey", "Fortinet VPN", "Microsoft Exchange"],
    links: { code: "", demo: "", writeup: "" },
  },
  {
    title: "Elevator Analysis",
    period: "Oct 2024 – Mar 2025",
    summary:
      "A real-time elevator detection system that identifies elevator regions from video, combining computer vision and machine learning to improve accuracy and responsiveness for intelligent monitoring and automation.",
    tags: ["Python", "OpenCV", "YOLOv8", "OCR"],
    links: { code: "", demo: "", writeup: "" }, // TODO: add repo URL
  },
  {
    title: "UMass Boston 3D Campus Model",
    period: "Sep 2023 – Dec 2023",
    summary:
      "An interactive 3D visualization of UMass Boston's buildings, modelled in Blender and rendered with Three.js. Includes per-floor maps for navigation and interior walkthroughs of the campus.",
    tags: ["Three.js", "Blender", "JavaScript", "HTML", "CSS"],
    links: { code: "", demo: "https://rishankumb.github.io/460/", writeup: "" },
  },
];

/*
 * Earlier and smaller projects. Rendered as a compact list behind a
 * "More projects" disclosure so the featured work above stays prominent.
 */
const ARCHIVE_PROJECTS = [
  {
    title: "Facial Recognition",
    period: "Jul 2024 – Nov 2024",
    summary:
      "An image scoring system that filters low-quality and misleading facial images before training. Trained on centroids of EfficientNet embeddings to improve recognition robustness and efficiency.",
    tags: ["Python", "OpenCV", "TensorFlow", "EfficientNet"],
    // TODO: this is the basis of your first-author GLOBECOM 2026 paper, "An
    // Enhanced Facial Authentication Approach". Add the DOI here — and consider
    // moving this entry up into FEATURED_PROJECTS now that it is published work.
    links: { paper: "" },
  },
  {
    title: "Age-Related Functional Decline Detection",
    period: "Apr 2024 – Jun 2024",
    summary:
      "Data analysis and model development for early detection of age-related functional decline. Built a classifier categorising change in physical function as improved, similar or declined, expanding the dataset by pairing features to remove the need for cross-validation.",
    tags: ["Python", "scikit-learn", "Neural Networks"],
    // TODO: relates to "Clinical Geriatric Functional Assessment using Wearable
    // Sensing and Machine Learning" (Healthcom 2024) — already published, so a
    // DOI should exist for this one.
    links: { paper: "" },
  },
  {
    title: "Object Detection and Tracking",
    period: "Jan 2024 – Mar 2024",
    summary:
      "An algorithm that tracks and counts people in video by computing Euclidean distance between centroids across frames, using YOLOv8 fine-tuned on a custom dataset.",
    tags: ["Python", "OpenCV", "YOLOv8"],
    links: {},
  },
  {
    title: "Predicting Hand Gestures",
    period: "Sep 2023 – Nov 2023",
    summary:
      "Collapsed multivariate data of 25 dimensions across 51 timesteps into atomic units via clustering, then trained models to classify six aircraft-carrier deck hand signals.",
    tags: ["Python", "scikit-learn", "TensorFlow", "Time Series"],
    links: {},
  },
  {
    title: "FaceRank",
    period: "Jun 2023 – Aug 2023",
    summary:
      "A MERN-stack web app collecting human rankings of the three best and three worst facial images from a set, then using that data to train a classifier to replicate the judgement automatically.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    links: {},
  },
  {
    title: "Real Estate Investment Website",
    period: "Feb 2023 – May 2023",
    summary:
      "A Django application listing properties available to buy by location, with a calculator for cash-on-cash ROI and cashflow derived from the underlying property data.",
    tags: ["Python", "Django", "Pandas", "NumPy", "JavaScript"],
    links: {},
  },
  {
    title: "Object Detection (Regression + Classification)",
    period: "Dec 2022 – Jan 2023",
    summary:
      "Combined bounding-box regression with target class prediction into a single model to detect multiple objects per image.",
    tags: ["Python", "scikit-learn", "Machine Learning"],
    links: {},
  },
  {
    title: "Forecast Cab Booking",
    period: "Oct 2022 – Dec 2022",
    summary:
      "Combined historical usage patterns with public weather data to predict city-level cab demand, informing how many cabs to deploy on a given day. Involved feature engineering and manual hyperparameter selection across several models.",
    tags: ["Python", "scikit-learn", "Feature Engineering"],
    links: {},
  },
  {
    title: "Auto Insurance Claim Prediction",
    period: "Aug 2022",
    summary:
      "Predicted whether a vehicle owner would initiate an insurance claim within the next year, handling severe class imbalance and comparing models and hyperparameters for best fit.",
    tags: ["Python", "scikit-learn", "Imbalanced Data"],
    links: {},
  },
  {
    title: "Handwritten Character Recognition",
    period: "Jul 2022",
    summary:
      "Converted handwritten text to machine-encoded text using deep learning, feature extraction and a CTC decode layer.",
    tags: ["Python", "Deep Learning", "OpenCV", "CTC"],
    links: {},
  },
  {
    title: "License Plate Recognition in Moving Vehicles",
    period: "Apr 2022",
    summary:
      "Detected moving cars and their license plates in video using OpenCV alongside pretrained object detection models.",
    tags: ["Python", "OpenCV", "Object Detection"],
    links: {},
  },
  {
    title: "Face Mask Recognition",
    period: "Mar 2022",
    summary:
      "A real-time deep learning model detecting whether a person is wearing a face mask, built by comparing pretrained backbones including MobileNetV2.",
    tags: ["Python", "OpenCV", "MobileNetV2"],
    links: {},
  },
  {
    title: "Property Sale Smart Contract",
    period: "Oct 2021",
    summary: "A system for buying and selling property implemented in Ethereum Solidity.",
    tags: ["Solidity", "Ethereum"],
    links: {},
  },
  {
    title: "Ballot Voting System",
    period: "Sep 2021",
    summary: "A voting algorithm implemented as an Ethereum Solidity smart contract.",
    tags: ["Solidity", "Ethereum"],
    links: {},
  },
  {
    // The original page had this title with its entire description commented out.
    // Description reconstructed from the commented markup; link restored.
    title: "Marvel Site Redesign",
    period: "May 2021",
    summary: "A redesign of the Marvel site built with HTML, CSS, JavaScript and jQuery.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery"],
    links: { demo: "https://sankalpvaish.github.io/Website/MARVEL/marvel.html" },
  },
  {
    title: "Browsing and Purchasing Cars",
    period: "Apr 2021",
    summary: "A car browsing and purchasing site built with HTML, CSS, JavaScript and jQuery.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery"],
    links: { demo: "https://sankalpvaish.github.io/Website/Sankalp/index.html" },
  },
  {
    title: "Housing Prices Competition",
    period: "Sep 2020",
    summary:
      "Predicted final sale price per home using advanced regression techniques including random forest and gradient boosting, with handling for substantial missing data.",
    tags: ["Python", "scikit-learn", "Regression"],
    links: {},
  },
  {
    title: "COVID-19 Trend Analysis",
    period: "Aug 2020",
    summary: "Analysed case data across countries and modelled trends in patient rates.",
    tags: ["Python", "Data Analysis"],
    links: {},
  },
  {
    title: "DNA to Protein Translation",
    period: "Aug 2020",
    summary: "Translated DNA sequences into amino acid codes and then into proteins.",
    tags: ["Python", "Bioinformatics"],
    links: {},
  },
  {
    title: "Bird Migration Tracking",
    period: "Jul 2020",
    summary:
      "A tracking system plotting bird positions by latitude and longitude to surface migration trends, predicting routes taken across different times of year.",
    tags: ["Python", "Geospatial", "Data Analysis"],
    links: {},
  },
  {
    title: "Connect Dots Game Agent",
    period: "Jul 2020",
    summary:
      "A game-playing agent using a depth-limited game tree and heuristic evaluation, assuming optimal play from its opponent.",
    tags: ["Python", "Game Tree", "Minimax"],
    links: {},
  },
  {
    title: "Digital Book Decoding",
    period: "Jul 2020",
    summary:
      "Decoded encrypted books to recover author, language, title and unique word statistics.",
    tags: ["Python", "Text Processing"],
    links: {},
  },
  {
    title: "Date Normalization in Medical Records",
    period: "Jun 2020",
    summary:
      "Worked with messy medical data, using regular expressions to identify every date variant present, then normalising and sorting them consistently.",
    tags: ["Python", "Regex", "Data Cleaning"],
    links: {},
  },
  {
    title: "Spelling Recommender",
    period: "Jun 2020",
    summary:
      "Several spelling recommenders based on shortest edit distance, taking a misspelled word and recommending the correct one using NLTK.",
    tags: ["Python", "NLTK", "NLP"],
    links: {},
  },
];
