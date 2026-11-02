import { getCollection, type CollectionEntry } from 'astro:content';
import { projectsPath, type Lang } from '../i18n';

export type Project = CollectionEntry<'projects'> | CollectionEntry<'projectsDe'>;
export type Category = Project['data']['categories'][number];

const collectionOf = { en: 'projects', de: 'projectsDe' } as const;

export const categoryLabels: Record<Lang, Record<Category, string>> = {
  en: { web: 'Web', app: 'Apps', graphic: 'Graphic' },
  de: { web: 'Web', app: 'Apps', graphic: 'Grafik' },
};

/** All projects of one language in portfolio order. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const projects: Project[] = await getCollection(collectionOf[lang]);
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export const projectNo = (index: number) => String(index + 1).padStart(2, '0');

/** The slug is the file name, so it is the same in both languages. */
export const projectHref = (lang: Lang, slug: string) => `${projectsPath[lang]}${slug}/`;

/** Static paths for the project pages of one language, each with its neighbours for the pager. */
export async function projectPaths(lang: Lang) {
  const projects = await getProjects(lang);
  const count = projects.length;
  const neighbour = (index: number) => ({
    no: projectNo(index),
    title: projects[index].data.title,
    href: projectHref(lang, projects[index].id),
  });
  return projects.map((project, index) => ({
    params: { slug: project.id },
    props: {
      lang,
      project,
      no: projectNo(index),
      prev: neighbour((index - 1 + count) % count),
      next: neighbour((index + 1) % count),
    },
  }));
}
