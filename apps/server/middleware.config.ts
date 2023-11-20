import dotenv from 'dotenv';
dotenv.config();

import { AuthContext } from "../../packages/auth-api";
import { CommerceContext } from "../../packages/commerce-api";
import { InvoiceContext } from "../../packages/invoice-api";

const config = {
  integrations: {
    auth: {
      location: '../../packages/auth-api/server',
      configuration: {},
    },
    commerce: {
      location: '../../packages/commerce-api/server',
      configuration: {},
    },
    invoice: {
      location: '../../packages/invoice-api/server',
      configuration: {},
    },
    mozart: {
      extensions: (extensions: any) => [
        ...extensions,
        {
          name: "orchestrate-custom-extension",
          extendApiMethods: {
            getInvoices: async (context, params) => {

              // You authorize with an auth provider, you get a token
              const authClient = await context.getApiClient("auth") as AuthContext
              const authToken = (await authClient.api.getAuthToken({ credentials: params.secret })).data
              // You use the token to fetch list of orders from an e-commerce provider
              const commerceClient = await context.getApiClient("commerce") as CommerceContext
              const ordersRes = await commerceClient.api.getOrders({ authToken })
              // get array of orderIds
              const orderIds: number[] = []

              ordersRes.orders.forEach(order => {
                orderIds.push(order.id)
              });

              // use OrderID's to fetch invoices from an invoice provider
              const invoiceClient = await context.getApiClient("invoice") as InvoiceContext
              const invoiceLinks = await invoiceClient.api.getInvoices({ orderIds })

              return invoiceLinks;
            },
          },
        },
      ],
      location: "../../packages/api-client/server",
      configuration: {},
    }
  },
};

export default config;
