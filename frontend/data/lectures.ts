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
    id: "1",
    file: "Lecture_16_Cryptography_PKI_StudyNotes.html",
    slug: "public-key-infrastructure",
    title: "Cryptography & Public Key Infrastructure",
    description:
      "Asymmetric cryptography, digital certificates, the chain of trust, TLS certificate types, digital signatures, code signing, time stamping, and S/MIME.",
    videos: [{ url: "https://youtu.be/0ctat6RBrFo" }],
  },
  {
    id: "2",
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
    id: "3",
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
    id: "4",
    file: "SHA512_Hashing_StudyNotes.html",
    slug: "sha-512",
    title: "Hashing & SHA-512",
    description:
      "Why hashing exists, hash-function requirements, the SHA family, and SHA-512 step by step — padding, the message schedule, the 80-round compression, and a worked example.",
    videos: [{ url: "https://youtu.be/b6HebMn05Kk" }],
  },
  {
    id: "5",
    file: "AES_StudyNotes_Sections.html",
    slug: "aes",
    title: "Advanced Encryption Standard (AES)",
    description:
      "The Advanced Encryption Standard, its structure, and a step-by-step walkthrough of the encryption process.",
    videos: [{ url: "https://youtu.be/I68uBhHdnM4?si=woDjrlmOIni0_nQ7" }],
  },
];
