import { Endpoints } from '../../types';

export const getInvoices: Endpoints['getInvoices'] = async (
  context,
  params
) => {

  return {
    invoiceLinks: [
      'https://example.com/invoice/123456',
      'https://example.com/invoice/654321',
      'https://example.com/invoice/987654'
    ]
  };
};
