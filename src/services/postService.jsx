import {client} from '../utils/api-client';

// const serverUrl = process.env.REACT_APP_API_BASE_URL;
// console.log('api', serverUrl);

const serverUrl = 'http://api.mediastack.com/v1/news?access_key=800ff35a489edc2c5bab0b6d017d5c35';

export const postService = {
  getPosts: async () => {
    try {
      const url = `${serverUrl}/posts`;
      const method = 'GET';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
  createPost: async (reqbody) => {
    try {
      const url = `${serverUrl}/post/create`;
      const method = 'POST';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  updatePost: async (postId, reqbody) => {
    try {
      const url = `${serverUrl}/post/edit/${postId}`;
      const method = 'PATCH';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  deletePost: async (postId) => {
    try {
      const url = `${serverUrl}/post/delete/${postId}`;
      const method = 'DELETE';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  searchPost: async (data) => {
    try {
      const url = `${serverUrl}/search`;
      const method = 'POST';
      const response = await client(url, method, {...data});
      if (!response) throw new Error('Cannot Create bundle');
      return response;
    } catch (e) {
      throw e;
    }
  },
};
