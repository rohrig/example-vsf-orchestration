import { AuthContext, TODO } from '..'

/**
 * Definition of all API-client methods available in {@link https://docs.vuestorefront.io/v2/advanced/context.html#context-api | context}.
 */
export interface Endpoints {

  /**
   * Get auth token.
   */
  getAuthToken(
    context: AuthContext,
    params: { credentials: string }
  ): Promise<{ data: string }>;
}
