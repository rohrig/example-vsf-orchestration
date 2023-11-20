import { CommerceContext, TODO } from '..'

/**
 * Definition of all API-client methods available in {@link https://docs.vuestorefront.io/v2/advanced/context.html#context-api | context}.
 */

type Order = {
  id: number;
}
export interface Endpoints {

  /**
   getOrders(orderIds: string[]): Promise<TODO>
   */
  getOrders(
    context: CommerceContext,
    params: { authToken: string }
  ): Promise<{ orders: Order[] }>;
}
