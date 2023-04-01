import React from "react";
import { useState, useEffect } from "react";

function Cart() {
  const [summ, setSumm] = useState(0);
  const [phone, setPhone] = useState("");
  const [addres, setAddres] = useState("");
  const [agree, setAgree] = useState(false);

  const goodFLs = [
    {
      id: 12,
      title: "Кроссовки как у Pharrell Williams",
      sizes: {
        size: "10 US",
        available: true,
      },
      quantity: 3,
      price: 12000,
    },
    {
      id: 21,
      title: "Туфли принцессы",
      sizes: {
        size: "12 US",
        available: true,
      },
      quantity: 1,
      price: 3000,
    },
  ];

  function summCalc() {
    let summ = 0;
    for (let i = 0; i < goodFLs.length; i++) {
      summ += goodFLs[i].price * goodFLs[i].quantity;
    }
    setSumm(summ);
  }

  const handleDellgoods = (e) => {
    console.log(e.target.id);
  };

  const handlePostForm = (e) => {
    e.preventDefault();
    if (agree && addres["value"].length > 0 && phone["value"].length > 0) {
      const order = {
        goods: goodFLs,
        phone: phone["value"],
        addres: addres["value"],
      };
      console.log(order);
    }
  };

  const handleSetAgree = () => {
    setAgree(true);
  };

  const handleChangePhone = (e) => {
    setPhone({ value: e.target.value });
  };

  const handleChangeAddres = (e) => {
    setAddres({ value: e.target.value });
  };

  useEffect(() => {
    summCalc();
  }, []);

  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Размер</th>
              <th scope="col">Кол-во</th>
              <th scope="col">Стоимость</th>
              <th scope="col">Итого</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            {goodFLs.map((object) => {
              return (
                <tr key={object.id}>
                  <td scope="row">{object.id}</td>
                  <td>{object.title}</td>
                  <td>{object.sizes.size}</td>
                  <td>{object.quantity}</td>
                  <td>{object.price} руб.</td>
                  <td className="summ">
                    {object.quantity * object.price} руб.
                  </td>
                  <td>
                    <button
                      id={object.id}
                      onClick={handleDellgoods}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="5" className="text-right">
                Общая стоимость
              </td>
              <td>{summ} руб.</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card">
          <form className="card-body">
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <br></br>
              <input
                onChange={handleChangePhone}
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Ваш Телефон"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Адрес доставки</label>
              <br></br>
              <input
                onChange={handleChangeAddres}
                type="text"
                className="form-control"
                id="address"
                placeholder="Адрес доставки"
              />
            </div>
            <div className="form-group form-check">
              <input
                onClick={handleSetAgree}
                type="checkbox"
                className="form-check-input"
                id="agreement"
              />
              <label htmlFor="agreement" className="form-check-label">
                Согласен с правилами доставки
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-outline-secondary"
              onClick={handlePostForm}
            >
              Оформить
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export { Cart };
