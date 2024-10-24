import { useState } from "react";
import { DummyContext } from "./context";
import { dummyData } from "../data/dummy";

export default function DummyProvider({ children }: React.PropsWithChildren) {
  const [data, setData] = useState(dummyData);

  return (
    <DummyContext.Provider value={{ data, setData }}>
      {children}
    </DummyContext.Provider>
  );
}
