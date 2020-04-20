/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
      id
      name
      videos {
        items {
          id
          albumId
          bucket
          labels
        }
        nextToken
      }
    }
  }
`;
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
      id
      name
      videos {
        items {
          id
          albumId
          bucket
          labels
        }
        nextToken
      }
    }
  }
`;
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
      id
      name
      videos {
        items {
          id
          albumId
          bucket
          labels
        }
        nextToken
      }
    }
  }
`;
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
      id
      albumId
      album {
        id
        name
        videos {
          nextToken
        }
      }
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      labels
    }
  }
`;
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
      id
      albumId
      album {
        id
        name
        videos {
          nextToken
        }
      }
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      labels
    }
  }
`;
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
      id
      albumId
      album {
        id
        name
        videos {
          nextToken
        }
      }
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      labels
    }
  }
`;
