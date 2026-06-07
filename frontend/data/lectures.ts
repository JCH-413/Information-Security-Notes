import type { Video } from "@/lib/types";

/**
 * Single place to register lectures.
 *
 * To add a lecture:
 *   1. Drop its study-notes `.html` file into `content/`.
 *   2. Add an entry below (file name, url slug, title, description, videos).
 *
 * The HTML is parsed automatically in `lib/content.ts` — each `<section>`
 * becomes a navigable topic. Nothing else needs to change.
 */
export interface LectureSource {
  id: string;
  /** File name inside `content/`. */
  file: string;
  /** URL slug → /lectures/[slug] */
  slug: string;
  title: string;
  description: string;
  videos: Video[];
}

export const lectureSources: LectureSource[] = [
  {
    id: "01",
    file: "intro-information-security-notes.html",
    slug: "intro-information-security",
    title: "Introduction to Information Security",
    description: "Course introduction: foundational InfoSec concepts and vocabulary, the seven-area landscape (cyber defense, operations, forensics, secure development, policy, risk, human factors), CIA triad and ITU‑T X.800 services, RMIAS model, active vs passive attacks, and a phishing breach case study with prevention/detection/response.",
    videos: [{ url: "" }],
  },
  {
    id: "02",
    file: "malware-and-cyber-attacks-notes.html",
    slug: "malware-and-cyber-attacks",
    title: "Malware and Cyber Attacks 1",
    description: "Survey of malware and network attacks: threats to confidentiality and integrity, malware taxonomy and families (worms, viruses, bots, trojans, ransomware, spyware), attack vectors and social engineering (phishing, vishing, smishing), detection/classification techniques, and mitigation best practices.",
    videos: [{ url: "" }],
  },
  {
    id: "03",
    file: "malware-part-2-notes.html",
    slug: "malware-part-2",
    title: "Malware and Cyber Attacks 2",
    description: "In-depth malware study: purpose-based taxonomy (concealment, infection, information-stealing, profit), examples (trojans, rootkits, viruses, worms, keyloggers, ransomware, botnets), detection approaches (signature, change, anomaly), malware analysis, incident response, and classification into families using static/dynamic signatures.",
    videos: [{ url: "" }],
  },
  {
    id: "04",
    file: "cyber-threat-spectrum-notes.html",
    slug: "cyber-threat-spectrum",
    title: "Cyber Threat Spectrum",
    description: "Survey of the cyber-threat landscape: secure-design principles, major frameworks (NIST CSF, ISO/IEC 27001, GDPR, CIS), insider and competitor threats (espionage), the attack lifecycle, and practical governance-based defenses (identify/protect/detect/respond/recover).",
    videos: [{ url: "" }],
  },
  {
    id: "05",
    file: "buffer-overflow-notes.html",
    slug: "buffer-overflow",
    title: "Buffer Overflow",
    description: "Practical buffer-overflow module: memory and stack layout, stack frames, strcpy-style vulnerabilities, exploit construction (offsets/shellcode), and mitigations (ASLR, stack canaries, safe coding).",
    videos: [{ url: "" }],
  },
  {
    id: "06",
    file: "web-security-basics-notes.html",
    slug: "web-security-basics",
    title: "Web Security 1 Basics",
    description: "Foundations of web security: browser/server/database architecture, HTTP, cookies & sessions, JavaScript engines and sandboxing, and common web risks.",
    videos: [{ url: "" }],
  },
  {
    id: "07",
    file: "web-security-csrf-notes.html",
    slug: "web-security-csrf",
    title: "Web Security 2 CSRF",
    description: "CSRF explained: automatic cookie attachment, forged GET/POST attacks, examples, and server-side defenses such as secret tokens and referer checks.",
    videos: [{ url: "" }],
  },
  {
    id: "08",
    file: "web-security-xss-notes.html",
    slug: "web-security-xss",
    title: "Web Security 3 XSS",
    description: "XSS deep dive: persistent vs non-persistent XSS, real-world worms (Samy), attack demos (add-friend, profile edit), propagation, and countermeasures (filters, CSP, sandboxing).",
    videos: [{ url: "" }],
  },
  {
    id: "09",
    file: "web-security-sql-injection-notes.html",
    slug: "web-security-sql-injection",
    title: "Web Security 4 SQL Injection",
    description: "Practical SQL injection coverage: vulnerable query patterns, login-bypass (OR 1=1, comment tricks), data modification attacks, multi-statement risks, and recommended defenses (parameterized queries, input validation).",
    videos: [{ url: "" }],
  },
  {
    id: "10",
    file: "crypto_classical_notes.html",
    slug: "classical-cryptography",
    title: "Classical Cryptography",
    description:
      "Survey of classical cryptography: substitution and transposition ciphers (Caesar, Affine, Playfair, Hill, Vigenère, Rail Fence, Row Transposition) and rotor machines, with worked examples and cryptanalysis notes.",
    videos: [
      { url: "https://youtu.be/JtbKh_12ctg?si=Cn9uACa1tqbluk9z", title: "Caesar Cipher" },
      { url: "https://youtu.be/iyESl17IqFQ?si=p5SNaaEs3B8o5mO0", title: "Affine Cipher" },
      { url: "https://youtu.be/UURjVI5cw4g?si=WeRexex9oC1I7xxb", title: "Playfair Cipher" },
      { url: "https://youtu.be/-EQ8UomTrAQ?si=rMfsEn5O0IxWLnIJ", title: "Hill Cipher" },
      { url: "https://youtu.be/Ic4BzVggNY8?si=eeTrxnVvPdgNTOT_", title: "Vigenère Cipher" },
      { url: "https://youtu.be/knE4G8DGLoY?si=MFAeqFIAVhsr9MvW", title: "Rail Fence" },
      { url: "https://youtu.be/cPQXaYUMOjQ?si=AtvtJ9qxCvg7MkvE", title: "Row Transposition" },
    ],
  },
  {
    id: "11",
    file: "des_notes.html",
    slug: "des",
    title: "Data Encryption Standard (DES)",
    description:
      "Detailed DES coverage: Feistel structure, IP/FP, round function (expansion, S-boxes, P-box), key schedule, and security considerations (meet-in-the-middle, 3DES).",
    videos: [{ url: "https://youtu.be/j53iXhTSi_s?si=82Mo6bKY6k3wNCWY" }],
  },
  {
    id: "12",
    file: "AES_StudyNotes_Sections.html",
    slug: "aes",
    title: "Advanced Encryption Standard (AES)",
    description:
      "Exam-focused AES notes: parameters, 4x4 state representation, round operations (SubBytes, ShiftRows, MixColumns, AddRoundKey), key schedule, and worked diagrams.",
    videos: [{ url: "https://youtu.be/I68uBhHdnM4?si=woDjrlmOIni0_nQ7" }],
  },
  {
    id: "13",
    file: "SHA512_Hashing_StudyNotes.html",
    slug: "sha-512",
    title: "Hashing & SHA-512",
    description:
      "Hashing fundamentals and SHA-512: padding/length rules, buffer/register initialization, 80-round compression steps, avalanche property, and worked examples.",
    videos: [{ url: "https://youtu.be/b6HebMn05Kk" }],
  },
  {
    id: "14",
    file: "RSA_Algorithm_StudyNotes.html",
    slug: "rsa-algorithm",
    title: "The RSA Algorithm",
    description:
      "RSA explained: key generation (p,q,φ(n),e,d), encryption/decryption formulas, worked numerical example, and security assumptions (integer factorization).",
    videos: [
      { url: "https://youtu.be/hm8s6FAc4pg", title: "RSA — Part 1" },
      { url: "https://youtu.be/4zahvcJ9glg", title: "RSA — Part 2" },
      { url: "https://youtu.be/oOcTVTpUsPQ", title: "RSA — Part 3" },
    ],
  },
  {
    id: "15",
    file: "DiffieHellman_StudyNotes.html",
    slug: "diffie-hellman",
    title: "Diffie-Hellman Key Exchange",
    description:
      "Diffie–Hellman key exchange: public parameters, computing public/private values, shared-secret derivation, the discrete-log security assumption, and worked examples.",
    videos: [
      {
        title: "Diffie-Hellman Key Exchange: How to Share a Secret",
        url: "https://youtu.be/85oMrKd8afY?si=dKbcIWZ62ZtVezuc",
      },
    ],
  },
  {
    id: "16",
    file: "Lecture_16_Cryptography_PKI_StudyNotes.html",
    slug: "public-key-infrastructure",
    title: "Cryptography & Public Key Infrastructure",
    description:
      "Practical PKI: CA/RA roles, digital certificates (X.509), CRL/OCSP, certificate lifecycle, trust chains, and certificate validation flows.",
    videos: [{ url: "https://youtu.be/0ctat6RBrFo" }],
  },
  {
    id: "17",
    file: "User_Authentication_Access_Control_Wireless_Security_Firewall_notes.html",
    slug: "user-authentication-access-control-wireless-security-firewall",
    title: "User Authentication, Access Control, Wireless Security, and Firewall Notes",
    description:
      "Authentication & access control primer: NIST model, authentication factors, KDC/Kerberos, replay mitigation, and best practices.",
    videos: [{ url: "" }],
  },
];
