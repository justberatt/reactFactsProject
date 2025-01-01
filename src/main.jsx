import { createRoot } from 'react-dom/client'
import Header from '../src/components/Header'
import MainContent from '../src/components/MainContent'
import Footer from '../src/components/Footer'

const root = createRoot(document.getElementById('root'))

function Page() {
    return (
      <>
        <Header />
        <MainContent />
        <Footer />
      </>
    )
}

root.render(
    <Page />
)
