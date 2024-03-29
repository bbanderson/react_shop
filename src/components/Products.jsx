import useActions from "../hooks/useActions";
import useProduct from "../hooks/useProduct";

export default function Prototypes() {
  const products = useProduct();
  const { addToOrders } = useActions();
  return (
    <main>
      <div className="prototypes">
        {products.map((prototype) => {
          const { id, title, artist, desc, thumbnail, price, pieUrl } =
            prototype;
          const click = () => {
            addToOrders(id);
          };
          return (
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_blank" rel="noreferrer">
                <div
                  style={{
                    padding: "25px 0 33px",
                  }}
                >
                  <video
                    src={thumbnail}
                    className="prototype__artwork prototype__edit"
                    style={{
                      objectFit: "contain",
                    }}
                    autoPlay
                    loop
                    playsInline
                  />
                </div>
              </a>

              <div className="prototype__body">
                <div className="prototype__title">
                  <div
                    className="btn btn--primary float--right"
                    onClick={click}
                  >
                    <i className="icon icon--plus" />
                  </div>
                  {title}
                </div>
                <p className="prototype__price">$ {price}</p>
                <p className="prototype__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
