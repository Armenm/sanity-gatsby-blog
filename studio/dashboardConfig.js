export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d122eddc099cdd0f695d435',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-44o2wz2b',
                  apiId: 'b2ae5f57-126c-43b0-9eee-2ffbd0fae881'
                },
                {
                  buildHookId: '5d122edd480815d289b105cd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-w174x5s3',
                  apiId: '30ffc0c5-0bdf-4756-afdc-455bd9b9a149'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Armenm/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-w174x5s3.netlify.com', category: 'apps'}
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
