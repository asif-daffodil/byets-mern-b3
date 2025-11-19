import { useSelector } from "react-redux";

const CountCompo = () => {
    const count = useSelector((state) => state.counter.value);
    return (
        <span className="text-center fs-1 mx-3">{count}</span>
    );
};

export default CountCompo;