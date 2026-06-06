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
    id: "10",
    file: "crypto_classical_notes.html",
    slug: "classical-cryptography",
    title: "Classical Cryptography",
    description:
      "Notes on classical cryptography techniques and algorithms. Caesar Cipher, Affine Cipher, Playfair Cipher, Hill Cipher, Vigenère Cipher, Rail Fence, Row Transposition, Rotor Machine",
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
      "Notes on the Data Encryption Standard, its structure, and a step-by-step walkthrough of the encryption process.",
    videos: [{ url: "https://youtu.be/j53iXhTSi_s?si=82Mo6bKY6k3wNCWY" }],
  },
  {
    id: "12",
    file: "AES_StudyNotes_Sections.html",
    slug: "aes",
    title: "Advanced Encryption Standard (AES)",
    description:
      "The Advanced Encryption Standard, its structure, and a step-by-step walkthrough of the encryption process.",
    videos: [{ url: "https://youtu.be/I68uBhHdnM4?si=woDjrlmOIni0_nQ7" }],
  },
  {
    id: "13",
    file: "SHA512_Hashing_StudyNotes.html",
    slug: "sha-512",
    title: "Hashing & SHA-512",
    description:
      "Why hashing exists, hash-function requirements, the SHA family, and SHA-512 step by step — padding, the message schedule, the 80-round compression, and a worked example.",
    videos: [{ url: "https://youtu.be/b6HebMn05Kk" }],
  },
  {
    id: "14",
    file: "RSA_Algorithm_StudyNotes.html",
    slug: "rsa-algorithm",
    title: "The RSA Algorithm",
    description:
      "Public-key encryption end to end: key generation, encryption and decryption, a full worked example, the Extended Euclidean Algorithm, security, and timing attacks.",
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
      "Sharing a secret over an open channel: the key-exchange algorithm, the discrete logarithm problem, worked examples, the man-in-the-middle attack, and real-world uses.",
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
      "Asymmetric cryptography, digital certificates, the chain of trust, TLS certificate types, digital signatures, code signing, time stamping, and S/MIME.",
    videos: [{ url: "https://youtu.be/0ctat6RBrFo" }],
  },
  {
    id: "17",
    file: "User_Authentication_Access_Control_Wireless_Security_Firewall_notes.html",
    slug: "user-authentication-access-control-wireless-security-firewall",
    title: "User Authentication, Access Control, Wireless Security, and Firewall Notes",
    description:
      "Notes on user authentication, access control, wireless security, and firewall configurations.",
    videos: [{ url: "" }],
  },
];
