import { createContext } from "react";
import { IDummy } from "../interfaces/dummy.interface";

export const DummyContext = createContext<{
  data: IDummy[];
  setData: (data: IDummy[]) => void;
}>({
  data: [],
  setData: () => {},
});
