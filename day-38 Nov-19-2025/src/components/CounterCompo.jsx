import { useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../features/counter/counterSlice";
import CountCompo from "./CountCompo";

const CounterCompo = () => {
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6 mx-auto border rounded shadow p-3 text-center">
                    <button className="btn btn-success" onClick={() => dispatch(increment())}>+</button>
                    <CountCompo />
                    <button className="btn btn-danger" onClick={() => dispatch(decrement())}>-</button>
                    <button className="btn btn-dark" onClick={() => dispatch(incrementByAmount(2))}>+2</button>

                </div>
            </div>
        </div>
    );
};

export default CounterCompo;