import { Provider } from 'react-redux'
import { useStore } from '../redux/store'

import '../styles/globals.css'
import 'antd/dist/antd.min.css'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
