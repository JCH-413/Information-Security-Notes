import type { Lecture } from "@/lib/types";

/**
 * Single source of truth for all lecture content.
 *
 * To add a lecture: append an object below. Routes, the sidebar, search and
 * topic navigation all update automatically. No other file needs to change.
 *
 * `content` is plain text for now — blank lines separate paragraphs and lines
 * beginning with "- " render as bullet list items.
 */
export const lectures: Lecture[] = [
  {
    id: "1",
    slug: "introduction-to-information-security",
    title: "Introduction to Information Security",
    description:
      "Foundational concepts: what we protect, why it matters, and the core principles every security program is built on.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    topics: [
      {
        id: "1-1",
        slug: "cia-triad",
        title: "The CIA Triad",
        content:
          "The CIA triad is the cornerstone model of information security. It defines three goals that every control ultimately serves.\n\n- Confidentiality: ensuring information is accessible only to those authorized to see it.\n- Integrity: safeguarding the accuracy and completeness of data and processing methods.\n- Availability: ensuring authorized users have reliable access to information when needed.\n\nMost real-world incidents can be framed as a failure of one or more of these properties.",
      },
      {
        id: "1-2",
        slug: "threats-vs-vulnerabilities",
        title: "Threats vs. Vulnerabilities",
        content:
          "A vulnerability is a weakness that could be exploited. A threat is a potential cause of an unwanted incident. Risk is the intersection of the two together with impact.\n\nRisk = Threat x Vulnerability x Impact.\n\nUnderstanding this relationship lets you prioritize: a severe vulnerability with no credible threat may matter less than a minor one under active attack.",
      },
      {
        id: "1-3",
        slug: "defense-in-depth",
        title: "Defense in Depth",
        content:
          "Defense in depth layers multiple independent controls so that the failure of any single control does not lead to compromise.\n\nTypical layers include the perimeter, the network, the host, the application, and the data itself. Each layer buys time and increases the cost of a successful attack.",
      },
    ],
  },
  {
    id: "2",
    slug: "cryptography-basics",
    title: "Cryptography Basics",
    description:
      "How symmetric and asymmetric cryptography keep data confidential and verifiable, and where each is used in practice.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    topics: [
      {
        id: "2-1",
        slug: "symmetric-encryption",
        title: "Symmetric Encryption",
        content:
          "Symmetric encryption uses a single shared secret key for both encryption and decryption. It is fast and well-suited to bulk data.\n\nAES is the modern standard. The central challenge is key distribution: both parties must somehow share the key securely before communicating.",
      },
      {
        id: "2-2",
        slug: "asymmetric-encryption",
        title: "Asymmetric Encryption",
        content:
          "Asymmetric (public-key) cryptography uses a mathematically linked key pair: a public key that can be shared freely and a private key kept secret.\n\nData encrypted with the public key can only be decrypted with the private key. This elegantly solves key distribution but is far slower than symmetric encryption, so the two are usually combined.",
      },
      {
        id: "2-3",
        slug: "hashing",
        title: "Hashing & Integrity",
        content:
          "A cryptographic hash function maps arbitrary input to a fixed-size digest. Good hashes are one-way and collision-resistant.\n\nHashes verify integrity (did the data change?) and are used to store passwords safely when combined with a salt. SHA-256 is a common choice; MD5 and SHA-1 are considered broken for security use.",
      },
    ],
  },
  {
    id: "3",
    slug: "network-security",
    title: "Network Security",
    description:
      "Securing data in transit: the controls, protocols, and architectures that protect communication across untrusted networks.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    topics: [
      {
        id: "3-1",
        slug: "firewalls",
        title: "Firewalls",
        content:
          "A firewall enforces a policy about which traffic may pass between network zones. Packet filters inspect headers; stateful firewalls track connections; next-gen firewalls add application awareness.\n\nThe guiding principle is default-deny: permit only what is explicitly required.",
      },
      {
        id: "3-2",
        slug: "tls",
        title: "TLS & HTTPS",
        content:
          "TLS provides confidentiality, integrity, and authentication for data in transit. The handshake uses asymmetric cryptography to agree on a symmetric session key, then switches to symmetric encryption for speed.\n\nCertificates, issued by trusted authorities, bind a public key to an identity and let clients verify they are talking to the right server.",
      },
    ],
  },
];

/** Lookup helper used by the dynamic lecture route. */
export function getLectureBySlug(slug: string): Lecture | undefined {
  return lectures.find((lecture) => lecture.slug === slug);
}
