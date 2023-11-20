import { Endpoints } from '../../types';

export const getAuthToken: Endpoints['getAuthToken'] = async (
  context,
  params
) => {
  console.log('exampleEndpoint has been called');

  // Example request could look like this:
  // return await context.client.get(`example-url?id=${params.id}`);
  return { data: 'auth-token-123' };
};
