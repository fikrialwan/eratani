import { useContext } from "react";
import { DummyContext } from "./context";

export default function useDummy() {
  const { data, setData } = useContext(DummyContext);
  return { data, setData };
}
