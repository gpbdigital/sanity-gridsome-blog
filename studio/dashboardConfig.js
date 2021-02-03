export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601ac243f318870127158f96',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-7ax751we',
                  apiId: 'ad06614e-1a8f-4355-bd3d-ca4f331cbada'
                },
                {
                  buildHookId: '601ac243f31887009c158fbc',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-vg2n1qnz',
                  apiId: '57092baf-6e83-4670-b3ad-d0054fabef52'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gpbdigital/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-vg2n1qnz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
