import { useState } from "react";
import Counters from "./components/Counters";
import Movies from "./components/Movies";
import NavBar from "./routing-com/navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Products from "./routing-com/products";
import Posts from "./routing-com/admin/posts";
import Dashboard from "./routing-com/admin/dashboard";
import Home from "./routing-com/home";
import ProductDetails from "./routing-com/productDetails";
import NotFound from "./routing-com/notFound";
import Users from "./routing-com/admin/users";
import NavMenu from "./components/NavMenu";
import Rentals from "./components/Rentals";
import Customers from "./components/Customers";
import MoviesId from "./components/MoviesId";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import ToastEx from "./components/ToastEx";
import MovieForm from "./components/MovieForm";

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
      <NavMenu />
      <main className="container">
        <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/movies/:id" element={<MoviesId />} />
          <Route path="/register" element={<Register />} />
          <Route path="/toast" element={<ToastEx />} />
          <Route path="/movies/new" element={<MovieForm />} />
        </Routes>
        {/* <Counters
          counters={counters}
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        /> */}

        {/* <NavBar /> */}
        <div className="content">
          {/* <Routes>
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="/products" exact render={(props) => <Products sortBy="newest" {...props} />} />
            <Route path="/products" element={<Products />} exact />
            <Route path="/posts" element={<Posts />} exact />
            <Route path="/posts/:year?/:month?" element={<Posts />} exact />
            <Route path="/admin" element={<Dashboard />} exact />
            <Route path="/" element={<Home />} exact />
            <Route path="*" element={<NotFound />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/posts" element={<Posts />} />
          </Routes> */}
        </div>
      </main>
    </>
  );
};

export default App;
