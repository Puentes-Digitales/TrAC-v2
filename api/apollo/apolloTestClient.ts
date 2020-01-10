import "dotenv/config";

import { createTestClient } from "apollo-server-integration-testing";

import { apolloServer } from "./server";

export const apolloTestClient = ({
  headers,
}: { headers?: Record<string, string> } = {}) =>
  createTestClient({
    apolloServer,
    extendMockRequest: {
      headers,
    },
  });