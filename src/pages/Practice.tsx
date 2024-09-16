import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/store";
import {
  increaseCount,
  decreaseCount,
} from "../redux/features/practice/practiceSlice";

export default function Practice() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { count } = useAppSelector((state) => state.counter);
  // const [timeLeft, setTimeLeft] = useState<number>(3600000);

  // useEffect(() => {
  //   if (timeLeft <= 0) return; // Stop if the timeLeft is 0

  //   const intervalId = setInterval(() => {
  //     setTimeLeft((prevTime) => prevTime - 10); // Decrement by 10 ms (update more frequently)
  //   }, 10);

  //   return () => clearInterval(intervalId); // Clean up the interval on component unmount
  // }, [timeLeft]);

  // const formatTime = (milliseconds: number) => {
  //   const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  //   const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  //   const ms = Math.floor((milliseconds % 1000) / 10); // Show 2 digits for ms

  //   return `${hours.toString().padStart(2, "0")}:${minutes
  //     .toString()
  //     .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${ms
  //     .toString()
  //     .padStart(2, "0")}`;
  // };

  return (
    <div className="flex flex-center" style={{ height: "100vh" }}>
      <div className="card">
        <h1 className="text-center mb-10">This is the practice route</h1>

        {/* <h2>Countdown: {formatTime(timeLeft)}</h2> */}
        <p>Current count: {count}</p>
        <button
          className="mb-10"
          onClick={() => dispatch(increaseCount())}
          style={{ display: "block" }}
        >
          Count Increase
        </button>
        <button
          className="mb-10"
          onClick={() => dispatch(decreaseCount())}
          style={{ display: "block" }}
        >
          Count Decrease
        </button>

        <button className="mb-10" onClick={() => setShowModal(true)}>
          Open Modal
        </button>

        <input type="text" placeholder="Enter text" className="mb-10" />
        <input type="email" placeholder="Enter email" className="mb-10" />
        <input type="password" placeholder="Enter password" className="mb-10" />

        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">Modal Title</div>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
              <p>Modal content goes here.</p>
              <img
                src="https://picsum.photos/200/300"
                alt="Random from Picsum"
                className="mb-10"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
