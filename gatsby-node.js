/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
 
  return graphql(
    `
      {
        allMicrocmsInformation {
          totalCount
          edges {
            node {
                id
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

  result.data.allMicrocmsInformation.edges.forEach( edge => {
      createPage({
        path: `/information/${edge.node.id}`,
        component: path.resolve(`./src/templates/info-post.js`),
        context: {
          id: edge.node.id
        }
      })
  })
  // 記事一覧設定
  const PerPage = 15
  const pageCount = Math.ceil(result.data.allMicrocmsInformation.totalCount / PerPage)

  
  for (let i = 0; i < pageCount; i++) {
    createPage({
      path: `/information/${i + 1}`,
      component: path.resolve("./src/templates/informationpage.js"),
      context: {
        limit: PerPage,
        skip: i * PerPage,
        pageCount,
        currentPage:i + 1
      },
    })
  }
  // NEWS一覧生成
  const PerPageNews = 15
  const pageCountNews = Math.ceil(result.data.allMicrocmsInformation.totalCount / PerPage)

  for (let i = 0; i < pageCountNews; i++) {
    createPage({
      path: `/informationnews/${i + 1}`,
      component: path.resolve("./src/templates/informationpagenews.js"),
      context: {
        limit: PerPageNews,
        skip: i * PerPageNews,
        pageCountNews,
        currentPageNews:i + 1
      },
    })
  }

  })
}

// 末尾のスラッシュを削除するヘルパー関数
const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))

// Gatsby の onCreatePage API を使用
exports.onCreatePage = ({ page, actions }) => {
  // actions オブジェクトから createRedirect 関数を取得
  const { createRedirect } = actions

  // ページのパスに '.html' が含まれていない場合、またはルートパス ('/') ではない場合に実行
  if(!page.path.includes('.html') && page.path !== '/') {
    // 末尾にスラッシュがあるパスからスラッシュを削除したパスへのリダイレクトを作成
    createRedirect({ fromPath: `${page.path}/`, toPath: page.path, isPermanent: true })
  }
}