/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script key="zoho-forms-script" type="text/javascript" src="https://forms.zohopublic.com/js/zf_v1/iframe.js"></script>
  ]);
};

export const onPreRenderHTML = function onPreRenderHTML({
    getHeadComponents,
    replaceHeadComponents,
  }) {
    const headComponents = getHeadComponents();
    headComponents.sort((a, b) => {
      if (a.type === b.type || (a.type !== 'style' && b.type !== 'style')) {
        return 0;
      }
  
      if (a.type === 'style') {
        return 1;
      } else if (b.type === 'style') {
        return -1;
      }
  
      return 0;
    });
  
    replaceHeadComponents(headComponents);
  };

// import React from 'react';

// export const onRenderBody = ({ setHeadComponents }) => {
//   setHeadComponents([
//     <script key="zoho-forms-script" type="text/javascript" src="https://forms.zohopublic.com/js/zf_v1/iframe.js"></script>
//   ]);
// };


// exports.onPreRenderHTML = function onPreRenderHTML({
//     getHeadComponents,
//     replaceHeadComponents,
//   }) {
//     const headComponents = getHeadComponents();
//     headComponents.sort((a, b) => {
//       if (a.type === b.type || (a.type !== 'style' && b.type !== 'style')) {
//         return 0;
//       }
  
//       if (a.type === 'style') {
//         return 1;
//       } else if (b.type === 'style') {
//         return -1;
//       }
  
//       return 0;
//     });
  
//     replaceHeadComponents(headComponents);
//   };