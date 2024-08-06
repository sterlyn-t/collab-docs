"use client";
import React from "react";
import {
  ClientSideSuspense,
  LiveblocksProvider,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = (ProviderProps: ProviderProps) => {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
      <ClientSideSuspense fallback={<Loader />}>
        {ProviderProps.children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
