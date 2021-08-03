import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
	const counter = useSelector(state => state.counter.counter);
	const toggle = useSelector(state => state.counter.showCounter);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const increase = val => {
		dispatch(counterActions.increase(val));
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{toggle && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increase.bind(null, 5)}>Increase by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
