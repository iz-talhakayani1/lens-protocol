// const ENDPOINT = 'https://api.testnet.lens.dev/graphql';

// const graphqlQuery = {
//   query: `
//     query {
//       posts(request: { pageSize: TEN }) {
//         items {
//           id
//           author {
//             username {
//               value
//             }
//           }
//           metadata {
//             ... on TextOnlyMetadata {
//               content
//             }
//           }
//         }
//         pageInfo {
//           prev
//           next
//         }
//       }
//     }
//   `,
// };

// const fetchPosts = async () => {
//   const response = await fetch(ENDPOINT, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(graphqlQuery),
//   });

//   const data = await response.json();
//   console.log('fetchPosts ~ data:', data);
//   return data;
// };

// export { fetchPosts };

import axios from 'axios';
// import { client } from '../lens-protocol/client';
// import { ExploreProfilesOrderByType, LimitType } from '@lens-protocol/client';

const LENS_API_URL = 'https://api.testnet.lens.dev/graphql';

export const getApps = async () => {
  const query = `
    query AppsQuery($request: AppsRequest!) {
  apps(request: $request) {
    items {
      address
      graphAddress
      metadata {
        description
        developer
        logo
        name
        tagline
        platforms
        privacyPolicy
        termsOfService
        url
      }
      owner
      verificationEnabled
      createdAt
      treasuryAddress
      namespaceAddress
      defaultFeedAddress
      sponsorshipAddress
    }
    pageInfo {
      prev
      next
    }
  }
}`;

  const variables = {
    request: {
      pageSize: 'FIFTY',
      cursor: null,
    },
  };

  const response = await axios.post(LENS_API_URL, {
    query,
    variables,
  });
  console.log('getApps ~ response.data:', response.data);

  return response.data;
};

export const getPosts = async () => {
  const query = `query Posts($request: PostsRequest!, $reactionsRequest2: StatsReactionRequest!) {
  posts(request: $request) {
    items {
      ... on Post {
        id
        feed {
          address
        }
        app {
          address
          owner
          createdAt
        }
        timestamp
        mentions {
          ... on AccountMention {
            account
            namespace
          }
        }
        stats {
          comments
          reposts
          quotes
          collects
          bookmarks
          reactions(request: $reactionsRequest2)
        }
        actions {
          ... on SimpleCollectActionSettings {
            collectNft
            amount {
              asset {
                ... on Erc20 {
                  name
                  symbol
                  decimals
                  contract {
                    address
                    chainId
                  }
                }
              }
              value
            }
            followerOnly
            recipient
            referralFee
            endsAt
            recipients {
              recipient
              split
            }
          }
        }
      }
      ... on Repost {
        id
        author {
          address
          score
          createdAt
          metadata {
            bio
            coverPicture
            name
          }
        }
        app {
          address
        }
      }
    }
  }
}`;

  const variables = {
    request: {
      pageSize: 'FIFTY',
      cursor: null,
    },
    reactionsRequest2: {
      type: 'UPVOTE',
    },
  };

  const response = await axios.post(LENS_API_URL, {
    query,
    variables,
  });
  console.log('getPosts ~ response.data:', response.data);

  return response.data;
};

// export const fetchFeed = async () => {
//   try {
//     const feed = await client.explore.profiles({
//       limit: LimitType.Ten, // Number of items to fetch,
//       orderBy: ExploreProfilesOrderByType.MostPosts,
//     });

//     console.log('Feed:', feed.items);
//   } catch (error) {
//     console.error('Error fetching feed:', error);
//   }
// };
