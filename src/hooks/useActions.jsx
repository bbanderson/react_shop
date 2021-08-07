import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions() {
  const { addToOrders, removeFromOrders, cleanOrder } =
    useContext(AppStateContext);
  return { addToOrders, removeFromOrders, cleanOrder };
}
