import './components/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import ShowComment from './components/showComment'
import Joke from './components/joker'
import Home from './components/homeWeather'
import Container from './components/container'
import Headline from './components/head'
import Contents from './components/contents'
import Controls from './components/controls'

function App() {

  return (
       <>
      <Container>
    <div className="px-4 py-5 my-5 text-center">
    <Headline/>
  <div className="col-lg-6 mx-auto">
    <Contents/>
  <Controls/>
  </div>
</div>
    </Container>
    </>
  )
}

export default App
