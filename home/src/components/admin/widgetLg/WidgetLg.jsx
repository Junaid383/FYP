
import "./widgetLg.css"

export default function WidgetLg() {


  const Button = ({ type }) => {
    return (
      <button className={"widgetLgButton " + type}> {type}</button>
    )
  }

  return <div className="widgetLg">
    <h3 className="widgetLgTitle">Latest Transactions</h3>
    <table className="widgetLgTable">
      <tr className="widgetLgTr">
        <th className="widgetLgTh">Customer</th>
        <th className="widgetLgTh">Date</th>
        <th className="widgetLgTh">Amount</th>
        <th className="widgetLgTh">Status</th>
      </tr>
      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png" alt="" className="widgetLgImg" />
          <span className="widgetLgName">Muhammad Junaid</span>
        </td>
        <td className="widgetLgDate">2 Jan 2022</td>
        <td className="widgetLgAmount">$234.5</td>
        <td className="widgetLgStatus"><Button type="Approved" /></td>

      </tr>

      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png" alt="" className="widgetLgImg" />
          <span className="widgetLgName">Muhammad Junaid</span>
        </td>
        <td className="widgetLgDate">2 Jan 2022</td>
        <td className="widgetLgAmount">$234.5</td>
        <td className="widgetLgStatus"><Button type="Declined" /></td>

      </tr>

      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png" alt="" className="widgetLgImg" />
          <span className="widgetLgName">Muhammad Junaid</span>
        </td>
        <td className="widgetLgDate">2 Jan 2022</td>
        <td className="widgetLgAmount">$234.5</td>
        <td className="widgetLgStatus"><Button type="Pending" /></td>

      </tr>

      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png" alt="" className="widgetLgImg" />
          <span className="widgetLgName">Muhammad Junaid</span>
        </td>
        <td className="widgetLgDate">2 Jan 2022</td>
        <td className="widgetLgAmount">$234.5</td>
        <td className="widgetLgStatus"><Button type="Approved" /></td>

      </tr>

      <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png" alt="" className="widgetLgImg" />
          <span className="widgetLgName">Muhammad Junaid</span>
        </td>
        <td className="widgetLgDate">2 Jan 2022</td>
        <td className="widgetLgAmount">$234.5</td>
        <td className="widgetLgStatus"><Button type="Pending" /></td>

      </tr>
    </table>
  </div>;
}
