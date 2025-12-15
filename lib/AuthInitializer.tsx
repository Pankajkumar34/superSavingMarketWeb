"use client";

import { useEffect } from "react";
import { loadUserThunk } from "./thunkApis/authThunks";
import { useAppDispatch } from "@/utils/hooks/hooks";

export default function AuthInitializer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUserThunk()); 
  }, []);

  return null;
}
