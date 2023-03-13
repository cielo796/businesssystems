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
  const PerPageblog = 15
  const pageCountblog = Math.ceil(result.data.allMicrocmsInformation.totalCount / PerPage)

  for (let i = 0; i < pageCountblog; i++) {
    createPage({
      path: `/informationnews/${i + 1}`,
      component: path.resolve("./src/templates/informationpageblog.js"),
      context: {
        limit: PerPageblog,
        skip: i * PerPageblog,
        pageCountblog,
        currentPageblog:i + 1
      },
    })
  }

  })
}