/**
 * Feature flags untuk mengaktifkan/menonaktifkan halaman & fitur situs.
 *
 * Ubah nilai menjadi `false` untuk menonaktifkan fitur. Efeknya:
 *  - Halaman terkait me-return 404 (termasuk /blog/[slug] untuk `blog`).
 *  - Item navigasi di Navbar disembunyikan.
 *  - Section highlight terkait di halaman utama ikut hilang
 *    (kecuali dioverride lewat `homeHighlights`).
 *  - Tombol "Read More" di hero (mengarah ke /about) ikut hilang.
 *
 * `homeHighlights` bersifat opsional — set `undefined` agar mengikuti
 * flag halamannya, atau set boolean untuk kontrol terpisah. Contoh:
 * `projects: true` + `homeHighlights.projects: false` → halaman /projects
 * tetap ada, tapi tidak ditampilkan di home.
 */
export interface FeatureFlags {
  /** Halaman /about (Profile) */
  about: boolean;
  /** Halaman /projects */
  projects: boolean;
  /** Halaman /blog + /blog/[slug] */
  blog: boolean;
  /** Halaman /photos (gallery) */
  photos: boolean;
  /** Section highlight di home. Default (undefined): mengikuti flag halaman. */
  homeHighlights: {
    projects: boolean;
    blog: boolean;
    photos: boolean;
  };
}

interface RawFeatureFlags extends Omit<FeatureFlags, "homeHighlights"> {
  homeHighlights: {
    projects?: boolean;
    blog?: boolean;
    photos?: boolean;
  };
}

/** ── Ubah konfigurasi di sini ─────────────────────────────── */
const rawFlags: RawFeatureFlags = {
  about: true,
  projects: true,
  blog: false,
  photos: true,
  homeHighlights: {
    projects: undefined,
    blog: false,
    photos: undefined,
  },
};
/** ─────────────────────────────────────────────────────────── */

export const features: FeatureFlags = {
  about: rawFlags.about,
  projects: rawFlags.projects,
  blog: rawFlags.blog,
  photos: rawFlags.photos,
  homeHighlights: {
    projects: rawFlags.homeHighlights.projects ?? rawFlags.projects,
    blog: rawFlags.homeHighlights.blog ?? rawFlags.blog,
    photos: rawFlags.homeHighlights.photos ?? rawFlags.photos,
  },
};

/** Helper: true jika pathname termasuk fitur yang dinonaktifkan. */
export function isDisabledPath(pathname: string): boolean {
  if (!features.about && pathname.startsWith("/about")) return true;
  if (!features.projects && pathname.startsWith("/projects")) return true;
  if (!features.blog && pathname.startsWith("/blog")) return true;
  if (!features.photos && pathname.startsWith("/photos")) return true;
  return false;
}
