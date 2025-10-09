import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

// ----------------------------------------------------
// 1. BLOG コレクション (既存)
// ----------------------------------------------------
const blogCollection = defineCollection({
  // ファイルベースのコンテンツなので 'content' にするのが一般的ですが、loader: glob を使用しているので、
  // 以前の定義である 'blog' の部分を blogCollection として分離します。
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      order: z.number().optional(),
      image: image().optional(),
      tags: z.array(z.string()).optional(),
      authors: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
    }),
})

// ----------------------------------------------------
// 2. AUTHORS コレクションの追加
// ----------------------------------------------------
const authorsCollection = defineCollection({
  // authors はユーザーデータなどが入ったデータファイル(例: .json, .yaml, .md, .mdx)かと思われます。
  // MD/MDX ではないデータファイルの場合は type: 'data' になります。
  // AuthorCard.astro のコードから、Author.data に以下のプロパティがあることがわかります。
  type: 'content', // または 'data'。内容が.mdxならcontent、.json/.ymlならdata
  schema: () =>
    z.object({
      name: z.string(),
      avatar: z.string().optional(), // `avatar` を取得しています
      bio: z.string().optional(),    // `bio` を取得しています
      pronouns: z.string().optional(), // `pronouns` を取得しています
      website: z.string().url().optional(), // SocialLinksで使用
      github: z.string().url().optional(), // SocialLinksで使用
      twitter: z.string().url().optional(), // SocialLinksで使用
      linkedin: z.string().url().optional(), // SocialLinksで使用
      mail: z.string().email().optional(), // SocialLinksで使用
      // 必要に応じて他のフィールドも追加
    }),
})

// ----------------------------------------------------
// 3. PROJECTS コレクションの追加
// ----------------------------------------------------
const projectsCollection = defineCollection({
  // projects の内容が .mdx なら type: 'content'、データのみなら type: 'data'
  // data-utils.ts のコードから、Project.data に以下のプロパティがあることがわかります。
  type: 'content', // または 'data'
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string().optional(),
      startDate: z.coerce.date(), // data-utils.ts でソートに使用
      endDate: z.coerce.date().optional(),
      image: image().optional(), // ProjectCard.astro で使用
      link: z.string().url().optional(), // ProjectCard.astro で使用
      tags: z.array(z.string()).optional(),
      // 必要に応じて他のフィールドも追加
    }),
})

// ----------------------------------------------------
// 4. collections にすべて追加
// ----------------------------------------------------
export const collections = {
  blog: blogCollection,
  authors: authorsCollection, // これが最重要
  projects: projectsCollection, // これが最重要
}