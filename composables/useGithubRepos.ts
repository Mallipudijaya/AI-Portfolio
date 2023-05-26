import type { Endpoints } from '@octokit/types'
import { KeysOf } from 'nuxt/dist/app/composables/asyncData'

type listUserReposParameters =
  Endpoints['GET /repos/{owner}/{repo}']['parameters']
type listUserReposResponse = Endpoints['GET /repos/{owner}/{repo}']['response']['data']

export default async () => {
  const { data: repos } = await useLazyAsyncData(
    'repos',
    () =>
      $fetch<listUserReposResponse[]>('https://api.github.com/users/owlnai/repos', {
        query: {
          type: 'all',
        },
      }),
    {
      server: false,
      transform: repos =>
        repos
          .filter((repo) => {
            return !repo.fork && !repo.private && repo.name !== '.github'
          })
          .sort((a, b) => {
            return b.stargazers_count - a.stargazers_count
          }),
      pick: ['name', 'description', 'html_url', 'stargazers_count', 'forks_count', 'language', 'updated_at'] as string[],
    },
  )
}
