export interface MarkdownPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  keywords: string[];
  excerpt: string;
}

export interface MarkdownPostWithContent extends MarkdownPost {
  htmlContent: string;
}

// The previous scaled article corpus is intentionally quarantined. New articles
// must pass a source, accuracy, duplication, and editorial review before a slug
// is explicitly restored here.
export function getAllMarkdownPosts(): MarkdownPost[] {
  return [];
}

export async function getMarkdownPost(
  _slug: string
): Promise<MarkdownPostWithContent | null> {
  void _slug;
  return null;
}
