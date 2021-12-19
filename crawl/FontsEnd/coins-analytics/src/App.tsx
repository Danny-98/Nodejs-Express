import React from "react";
import DashBoardIcon from "./assets/icons/ic_dashboard.png";
import "./App.css";
import dummyData from "./sharks.json";
import { AddressState, token } from "./redux/addressInfo";
import { useApp } from "./lib/appHook";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

type TopFive = {
  topFive: Array<token>;
};

function App() {
  const { holders, handleAdressClick } = useApp();
  return (
    <div className="App">
      <MenuLeft holders={holders} onAddressClick={handleAdressClick} />
      <DashBoard  />
    </div>
  );
}
const MenuLeft = ({ holders, onAddressClick }: any) => {
  return (
    <div className="menu">
      <div className="menu_title">
        <p>Holders.</p>
      </div>
      <div className="menu_item_container">
        <ul>
          <li>
            <div className="menu_item">
              <img src={DashBoardIcon} alt="ic_dashboard" />
              <p>Owner</p>
            </div>
          </li>
          {holders.map(
            (
              { holder, transactions, tokenHolding }: AddressState,
              index: number
            ) => {
              return (
                <li key={holder.address + index}>
                  <div className="menu_item">
                    <img src={DashBoardIcon} alt="ic_dashboard" />
                    <p
                      onClick={() =>
                        onAddressClick({ transactions, tokenHolding })
                      }
                    >
                      {holder.address}
                    </p>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

const DashBoard = ({ topFive }: any) => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <Top5Item topFive={topFive} />
      <Analytics />
    </div>
  );
};

const DashboardHeader = () => {
  return (
    <div className="dashboard_header">
      <div className="dashboard_title">
        <h1 className="addres_title">Analytic</h1> <h1>Dashboard</h1>
      </div>
      <div className="search_bar">
        <input type="text" placeholder="Token to analytic" />
      </div>
    </div>
  );
};

const Top5Item = ({ topFive }: TopFive) => {
  return (
    <div className="top_five">
      {topFive.map((item) => (
        <Item key={item.symbol}>
          <a
            href={`https://etherscan.io/token/${item.contracAddress}`}
            target="_blank"
            rel="noreferrer"
          >
            <h2>{item.symbol}</h2>
          </a>
          <h3>{item.quantity}</h3>
          <h4>{item.value}</h4>
        </Item>
      ))}
    </div>
  );
};

const Analytics: React.FunctionComponent = () => {
  const { trendings } = useSelector((state: RootState) => state.address);
  return (
    <div className="analytics">
      <div className="main_chart_container">
        <div className="row_chart_container">
          <Item>
            <div className="pie_chart_header">
              <h3>Transactions</h3>
            </div>
            <div id="row_chart" />
          </Item>
        </div>
        <div className="pie_chart_container">
          <Item>
            <div className="pie_chart_header">
              <h3>TokenHolding</h3>
              <p>$0123165431232413</p>
            </div>
            <div id="pie_chart" />
          </Item>
        </div>
      </div>
      <div className="sub_chart_container">
        <Item styles={{ marginRight: "32px" }}>
          <div className="sub_chart_header">
            <h3>Trending</h3>
          </div>
          <div className="trending_table">
            <table className="trending">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>thumb</th>
                  <th>Name</th>
                  <th>Symbol</th>
                  <th>Price/BTC</th>
                </tr>
              </thead>

              <tbody>
                {trendings.map(({ item }) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.market_cap_rank}</td>
                      <td>
                        <img src={item.thumb} alt="thum" />{" "}
                      </td>
                      <td>{item.name}</td>
                      <td>
                        <a
                          href={`https://www.coingecko.com/en/coins/${item.id}`}
                          target="_blank"
                        >
                          {item.symbol}
                        </a>
                      </td>
                      <td>{item.price_btc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Item>
        <Item>
          <div className="sub_chart_header">
            <h3>Top Shark</h3>
          </div>
          <div className="top_shark_table">
            <table className="top_shark">
              <tbody>
                {dummyData.map(({ holder }) => {
                  return (
                    <tr key={holder.rank}>
                      <td>{holder.address}</td>
                      <td>{holder.value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Item>
      </div>
    </div>
  );
};

const Item: React.FunctionComponent<any> = ({ children, styles }) => {
  return (
    <div style={styles} className="item_container">
      {children}
    </div>
  );
};
export default App;
