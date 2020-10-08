import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CoinGecko from 'coingecko-api';
const coinGeckoClient = new CoinGecko();

const formatPercent = number =>
  new Number(number).toFixed(2)

const formatDollar = (number,maximumSignificantDigits) =>
  new Intl.NumberFormat(
    'en-US',
    {
      style: 'currency',
      currency: 'usd',
      maximumSignificantDigits
    })
    .format(number);

export default function Home(props) {
  const { data } = props.result;
  return (
    <div className={styles.container}>
      <Head>
        <title>Cryto Price Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br></br>
      <h1>Cryto Price Dashboard</h1>
      <div class="container shadow-sm p-3 mb-5 bg-white rounded">
      <table className='table'>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>24H Change</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map(coin => (
            <tr key={coin.id}>
              <td>
                <img 
                  src={coin.image} 
                  style={{width: 25, height: 25, marginRight: 10}}
                />
                {coin.symbol.toUpperCase()}
              </td>
              <td>
                <span
                  className={coin.price_change_percentage_24h >0 ? (
                    'text-success'
                  ) : 'text-danger'}
                  >
                  {formatPercent(coin.price_change_percentage_24h)}%
                </span>
              </td>
              <td>{formatDollar(coin.current_price,20)}</td>
              <td>{formatDollar(coin.market_cap,12)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export async function getServerSideProps(context){
  const params = {
    order: CoinGecko.ORDER.MARKET_CAP_DESC
  }
  const result = await coinGeckoClient.coins.markets({params});
  return {
    props: {
      result
    }
  };
}
