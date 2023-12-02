import { useState} from 'react';
import style from'./App.module.css';

const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
function App() {

	const [operand1, setOperand1] = useState('0')
	const [operand2, setOperand2] = useState('')
	const [operator, setOperator] = useState('')

	const handleClick = (arg) => {

		if (operand1 === "0") {
			setOperand1(arg)
		} else if (operator) {
			setOperand2((prev) => prev + arg)
		} else {
			setOperand1((prevState) => prevState + arg)	
		}

	}
	const handleOperators = (arg) => {
		if (operand1 !== '0') {
			setOperator(arg)
		}
	}
	const handleResult = () => {
		switch (operator) {
			case '+': {
				setOperand1(Number(operand1) + Number(operand2))
				setOperand2('')
				setOperator('')
			}
			default:
				break;
			case '-': {
				setOperand1('')
				setOperand2(Number(operand1) - Number(operand2))
				setOperator('')
			}
				break;
		}	
	}
	const handleClear = () => {
		setOperand1('0')
		setOperand2('')
		setOperator('')
	}

	const displayValue = operand1 + operator + operand2

	return (
		<div className='App' >
			<div className={style.Display}>{displayValue}</div>
			<div className={style.Buttons} >
				{arr.map((item, index) => {
					return (
						<div key={index} onClick={() => handleClick(item)} className={style.Button} >
							{item}
						</div>
					)
				}
				)}
			</div>
			<div className={style.Operators}>
				<button onClick={() => handleOperators('+')} >
					+
				</button>

				<button onClick={() => handleOperators('-')} >
					-
				</button>

				<button onClick={handleResult} >
					=
				</button>
				<button onClick={handleClear} >
					C
				</button>
			</div>
		</div>
	);
}

export default App;

