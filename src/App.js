import { useState } from "react";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";

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

  return (
    <>
      <Navbar
        totalCounters={counters.filter((counter) => counter.value > 0).length}
      />
      <main className="container">
        <Movies />
        {/* <Counters
          counters={counters}
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        /> */}
      </main>
    </>
  );
};

export default App;
