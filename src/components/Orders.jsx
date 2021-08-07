import { useCallback, useMemo } from "react";
import useActions from "../hooks/useActions";
import useOrder from "../hooks/useOrder";
import useProduct from "../hooks/useProduct";

export default function Orders() {
  const orders = useOrder();
  const products = useProduct();
  const { removeFromOrders, cleanOrder } = useActions();

  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const product = products.find((product) => product.id === id);
        return product.price * quantity;
      })
      .reduce((pre, cur) => pre + cur, 0);
  }, [orders, products]);

  if (orders.length === 0) {
    return (
      <aside>
        <div className="empty">
          <div className="title">주문 내역이 없습니다.</div>
          <div className="description">+ 버튼을 눌러 상품을 선택해 주세요.</div>
        </div>
      </aside>
    );
  }

  return (
    <aside>
      <div className="order">
        <div className="body">
          {orders.map((order) => {
            const { id } = order;
            const product = products.find((product) => product.id === id);

            const onRemoveOrder = () => {
              removeFromOrders(id);
            };

            return (
              <div className="item" key={id}>
                <div className="img">
                  <video src={product.thumbnail} />
                </div>
                <div className="content">
                  <p className="title">
                    {product.title} X {order.quantity}
                  </p>
                </div>
                <div className="action">
                  <p className="price">$ {product.price * order.quantity}</p>
                  <button className="btn btn--link" onClick={onRemoveOrder}>
                    <i className="icon icon--cross" />
                  </button>
                </div>
              </div>
            );
          })}
          <div className="title">주문 내역이 없습니다.</div>
          <div className="description">+ 버튼을 눌러 상품을 선택해 주세요.</div>
        </div>
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">Total</div>
            <div className="action">
              <div className="price">$ {totalPrice}</div>
            </div>
            <button className="btn btn--link" onClick={cleanOrder}>
              <i className="icon icon--delete" />
            </button>
          </div>
          <button
            className="btn btn--secondary"
            style={{ width: "100%", marginTop: 10 }}
          >
            결제
          </button>
        </div>
      </div>
    </aside>
  );
}
