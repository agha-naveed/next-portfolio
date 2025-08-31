// components/TransitionContext.tsx
"use client";

import { createContext, useContext } from "react";

export const TransitionContext = createContext({
  playTransition: (navigate: () => void) => {},
});

export const useTransition = () => useContext(TransitionContext);
