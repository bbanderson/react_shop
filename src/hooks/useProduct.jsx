import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useProduct() {
  const { products } = useContext(AppStateContext);
  return products;
}
