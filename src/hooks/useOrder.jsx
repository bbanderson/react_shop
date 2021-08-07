import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useOrder() {
  const { orders } = useContext(AppStateContext);
  return orders;
}
