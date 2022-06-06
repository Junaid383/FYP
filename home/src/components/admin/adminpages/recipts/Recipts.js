import "./recipts.css";
import React from "react";
import { Link } from "react-router-dom";

function Recipts() {
  const Button = ({ type }) => {
    return <button className={"widgetLggButton " + type}> {type}</button>;
  };

  return (
    <div className="recipts">
      <div className="widgetLgg">
        <h3 className="widgetLgggTitle">Recipts</h3>
        <table className="widgetLggTable">
          <tr className="">
            <th className="widgetLggTh">Customer</th>
            <th className="widgetLggTh">Date</th>
            <th className="widgetLggTh">Amount</th>
            <th className="widgetLggTh">Status</th>
          </tr>

          <tr className="widgetLggTr">
            <td className="widgetLggUser">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt=""
                className="widgetLggImg"
              />
              <span className="widgetLggName">Muhammad Junaid</span>
            </td>
            <td className="widgetLggDate">2 Jan 2022</td>
            <td className="widgetLggAmount">$234.5</td>
            <td className="widgetLggStatus">
              <Link to={`/admin/recipts/${1}`}>
                {/* <Button type="Approved" /> */}
                <button className="reciptView">View</button>
              </Link>
            </td>
          </tr>

          <tr className="widgetLggTr">
            <td className="widgetLggUser">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt=""
                className="widgetLggImg"
              />
              <span className="widgetLggName">Muhammad Junaid</span>
            </td>
            <td className="widgetLggDate">2 Jan 2022</td>
            <td className="widgetLggAmount">$234.5</td>
            <td className="widgetLggStatus">
              <Link to={`/admin/recipts/${1}`}>
                {/* <Button type="Approved" /> */}
                <button className="reciptView">View</button>
              </Link>
            </td>
          </tr>

          <tr className="widgetLggTr">
            <td className="widgetLggUser">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt=""
                className="widgetLggImg"
              />
              <span className="widgetLggName">Muhammad Junaid</span>
            </td>
            <td className="widgetLggDate">2 Jan 2022</td>
            <td className="widgetLggAmount">$234.5</td>
            <td className="widgetLggStatus">
              <Link to={`/admin/recipts/${1}`}>
                {/* <Button type="Approved" /> */}
                <button className="reciptView">View</button>
              </Link>
            </td>
          </tr>

          <tr className="widgetLggTr">
            <td className="widgetLggUser">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt=""
                className="widgetLggImg"
              />
              <span className="widgetLggName">Muhammad Junaid</span>
            </td>
            <td className="widgetLggDate">2 Jan 2022</td>
            <td className="widgetLggAmount">$234.5</td>
            <td className="widgetLggStatus">
              <Link to={`/admin/recipts/${1}`}>
                {/* <Button type="Approved" /> */}
                <button className="reciptView">View</button>
              </Link>
            </td>
          </tr>

          <tr className="widgetLggTr">
            <td className="widgetLggUser">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt=""
                className="widgetLggImg"
              />
              <span className="widgetLggName">Muhammad Junaid</span>
            </td>
            <td className="widgetLggDate">2 Jan 2022</td>
            <td className="widgetLggAmount">$234.5</td>
            <td className="widgetLggStatus">
              <Link to={`/admin/recipts/${1}`}>
                {/* <Button type="Approved" /> */}
                <button className="reciptView">View</button>
              </Link>
            </td>
          </tr>

          <tr className="widgetLggTr">
            <td className="widgetLggUser">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt=""
                className="widgetLggImg"
              />
              <span className="widgetLggName">Muhammad Junaid</span>
            </td>
            <td className="widgetLggDate">2 Jan 2022</td>
            <td className="widgetLggAmount">$234.5</td>
            <td className="widgetLggStatus">
              <Link to={`/admin/recipts/${1}`}>
                {/* <Button type="Approved" /> */}
                <button className="reciptView">View</button>
              </Link>
            </td>
          </tr>
        </table>

        {/* </table> */}
      </div>
    </div>
  );
}

export default Recipts;
