import { useState } from "react";
import Counters from "./components/Counters";
import Movies from "./components/Movies";
import NavBar from "./routing-com/navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./routing-com/products";
import Posts from "./routing-com/posts";
import Dashboard from "./routing-com/admin/dashboard";
import Home from "./routing-com/home";
import ProductDetails from "./routing-com/productDetails";
import NotFound from "./routing-com/notFound";

const App = () => {
  const initialCounters = [
    { id: 1, value: 5 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
  ];
  const [counters, setCounters] = useState(initialCounters);

  const handleDelete = (counterId) => {
    const updatedCounters = counters.filter(
      (counter) => counter.id !== counterId
    );
    setCounters(updatedCounters);
  };

  const handleReset = () => {
    const resetCounters = counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    setCounters(resetCounters);
  };

  const handleIncrement = (counter) => {
    const newCounters = [...counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    setCounters(newCounters);
  };

  const handleDecrement = (counter) => {
    const newCounters = [...counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value--;
    setCounters(newCounters);
  };
  const shouldShowCustomMessage = true;
  return (
    <>
      {/* <Navbar
        totalCounters={counters.filter((counter) => counter.value > 0).length}
      /> */}
      <main className="container">
        {/* <Movies /> */}
        {/* <Counters
          counters={counters}
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        /> */}

        <NavBar />
        <div className="content">
          <Routes>
            <Route path="products/:id" element={<ProductDetails />} />
            {/* <Route path="/products" exact render={(props) => <Products sortBy="newest" {...props} />} /> */}
            <Route path="/products" element={<Products />} exact />
            <Route path="/posts" element={<Posts />} exact />
            <Route path="/posts/:year?/:month?" element={<Posts />} exact />
            <Route path="/admin" element={<Dashboard />} exact />
            <Route path="/" element={<Home />} exact />
            <Route path="*" element={<NotFound />}  />
            
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
