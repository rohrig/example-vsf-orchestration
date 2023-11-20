import { InvoiceContext, TODO } from '..'

/**
 * Definition of all API-client methods available in {@link https://docs.vuestorefront.io/v2/advanced/context.html#context-api | context}.
 */
export interface Endpoints {

  /**
   * getInvoices(orderIds: string[]): Promise<{ invoiceLinks: string[] }>
   * 
   * accepts a list of orderIds and returns a list of invoice links
   */
  getInvoices(
    context: InvoiceContext,
    params: { orderIds: number[] }
  ): Promise<{ invoiceLinks: string[] }>;
}
