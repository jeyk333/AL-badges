import { gql } from '@apollo/client';

export const GET_LAST_ACTIVITIES = gql`
  subscription MyQuery {
    logs(limit: 6, order_by: { block_timestamp: desc }) {
      block_timestamp
      decoded(path: "amount1Out")
      transaction_hash
    }
  }
`;
