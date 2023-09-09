import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Menu } from '../shared/Menu/Menu';
import { Footer } from '../shared/Footer/Footer';

export function Router() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
