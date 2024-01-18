import { useState } from 'react';
import './index.css';

const List = () => {
    const objects = [{ name: 'shoe', category: 'accesories' }, { name: 'chappal', category: 'accesories' }]
    const [selectedProducts, setSelectedProducts] = useState([])
    const [isSelected, setIsSelected] = useState(false)

    const checkIfAlreadySelected = (object) => {
        const isSelected = selectedProducts.some(product => product.name === object.name)
        return isSelected
    }


    const onClickHandler = (object) => {
        if (!checkIfAlreadySelected(object)) {
            setSelectedProducts([...selectedProducts, object])
        }
        else {
            const prod = selectedProducts.filter(prod => prod.name !== object.name)
            setSelectedProducts(prod)
        }
    }

    const divStyle = {
        width: '100px',
        height: '100px',
        backgroundImage: `url(../../logo192.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '2px solid gray',
        marginBottom: '4px'
    };

    const selectedProduct = {
        backgroundImage: 'url(../../logo192.png)',
        width: '400px',
        height: '400px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',


    }

    return (
        <div className='wrapperContainer'>
            <div className='listWrapper'>
                <div className='listButtonsContainer'>
                    <button>
                        Active Products
                    </button>
                    <button>
                        Not active Products
                    </button>
                </div>
                {objects.map(object => (
                    <>
                        <div style={divStyle}> {object.name}</div>
                        <input type='checkbox' onChange={() => onClickHandler(object)} value={object.name} />
                    </>
                ))}
            </div>
            <div className='selectedProduct'>
                <div style={selectedProduct}> jj</div>

            </div>
        </div>
    )

}

export default List