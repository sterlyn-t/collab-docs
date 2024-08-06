"use client";
import React from "react";
import {
  ClientSideSuspense,
  LiveblocksProvider,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import { getClerkUsers } from "@/lib/actions/user.actions";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = (ProviderProps: ProviderProps) => {
  return (
    <LiveblocksProvider
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkUsers({ userIds });
        return users;
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>
        {ProviderProps.children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
