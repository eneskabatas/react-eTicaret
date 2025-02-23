import axios from "axios"
import { createContext, useEffect, useReducer, useState } from "react"


export const CartContext = createContext()

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":

            const cartItemIndex = state.items.findIndex((item) => {
                return item.id === action.product.id
            })

            let updatesItems = [...state.items]

            if (cartItemIndex !== -1) {
                updatesItems[cartItemIndex] = {
                    ...state.items[cartItemIndex],
                    amount:
                    // state.items[cartItemIndex].amount + action.product.amount
                        state.items[cartItemIndex].amount + 1
                }
            } else {
                // updatesItems = [...state.items, action.product]
                updatesItems = [...state.items, {...action.product, amount :1}]
            }
            
            const newTotalAmount = updatesItems.reduce(
                (acc,item) => acc + item.price * item.amount,
                0
            )

            return {
                items: updatesItems,
                // totalAmount: state.totalAmount + action.product.price * action.product.amount
                totalAmount: newTotalAmount
            }
        case "REMOVE":
            const filteredItems = state.items.filter((item) => item.id !== action.id)
            const itemToRemove = state.items.find((item) => item.id === action.id)
            
            return {
                items: filteredItems,
                totalAmount: state.totalAmount - itemToRemove.price * itemToRemove.amount
            }
        case "CLEAR":
            return {
                items:defaultCartState.items,
                totalAmount:defaultCartState.totalAmount
            }

        case "INCREMENT":
            const incrementItems = state.items.map((item) =>
                item.id === action.id ? { ...item, amount: item.amount + 1 } : item
            );
            return {
                ...state,
                items: incrementItems,
                totalAmount: state.totalAmount + state.items.find((item) => item.id === action.id).price
            };

        case "DECREMENT":
            const decrementedItems = state.items.map((item) => {
                if (item.id === action.id && item.amount > 1) {
                    return { ...item, amount: item.amount - 1 };
                } else {
                    return item;
                }
            });
            return {
                ...state,
                items: decrementedItems,
                totalAmount: decrementedItems.reduce((total, item) => total + item.price * item.amount, 0)
            };

            case 'LOAD_FROM_LOCAL_STORAGE':
                return {
                  ...state,
                  items:action.cart.items,
                  totalAmount: action.cart.totalAmount 
                };

        default:
            return state
    }
}

export const CartProvider = (props) => {

    const [cartShow, setCartShow] = useState(false)
    const [name, setName] = useState("")
    const [cartNbr, setCartNbr] = useState("")
    const [catchTitle, setCatchTitle] = useState("")
    const [ccvNbr, setCcvNbr] = useState("")
    const [alertShow, setAlertShow] = useState(false)
    const [datas, setDatas] = useState([])
    const [search,setSearch] = useState("")
    const [mens,setMen] = useState([])
    const [scrollY, setScrollY] = useState(0);
    const [scrollControl, setScrollControl] = useState(false);

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


    useEffect(()=>{
        if(cartState.items.length !== 0){
            saveLocal()
        }
      },[cartState])
      
      useEffect(()=>{
        getLocal()
      },[])

      useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            console.log(response.data)
            setDatas(
                search ? response.data.filter (product =>
                    product.title.toLowerCase().includes(search.toLowerCase())
                ) : response.data
            )

            setMen(
                // response.data.filter ( item => 
                //     item.category.toLowerCase().includes("men")
                // )
                search ? response.data.filter (product =>
                    product.title.toLowerCase().includes(search.toLowerCase())
                )
                 : response.data.filter (item =>
                    item.category.toLowerCase().includes("men's clothing")
                 )
            )
        })
      },[search])

    const saveLocal = () => {
        localStorage.setItem('cartState', JSON.stringify(cartState))
      }

      const getLocal = () => {
        if(localStorage.getItem("cartState") === null ){
            localStorage.setItem("cartState",JSON.stringify(defaultCartState))
        }else{
            dispatchCartAction({type: 'LOAD_FROM_LOCAL_STORAGE', cart: JSON.parse(localStorage.getItem("cartState"))})
        }
      }

      const handleOrderBtn = (e) => {
        e.preventDefault()
        try{
            if(cartNbr.length == 0){
                throw "boş cart geçilemez"
            }
            if(ccvNbr.length == 0){
                throw "boş ccv geçilemez"
            }
            if(cartNbr.length > 11 ){
                throw "kart numaranızı 11 haneden fazla girdiniz"
            }
            if(cartNbr.length < 11){
                throw "kart numaranızı 11 haneden az girdiniz"
            }
            if(ccvNbr.length > 3){
                throw "ccv nuramanız fazla"
            }
            if(ccvNbr.length < 3){
                throw "ccv numaranız eksik"
            }

            const body = {
                cartNbr:cartNbr,
                ccvNbr:ccvNbr,
            }
            
            alert("Ödemeniz tamamlandı")
            console.log(body)
        }catch(e){
            setCatchTitle(e)
            console.log(e)
            setAlertShow(true)
            setTimeout(()=>{
                setAlertShow(false)
            },2000)
        }
      }

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

      useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
     
    const cartContext = {

        cartShow,
        setCartShow,

        items: cartState.items,
        totalAmount: cartState.totalAmount.toFixed(2),

        addItem: (product) => {
            dispatchCartAction({ type: "ADD", product })
        },

        removeItem: (id) => {
            dispatchCartAction({ type: "REMOVE", id })
            localStorage.removeItem('cartState')
        },

        clearItem: () => {
            dispatchCartAction({ type: "CLEAR" })
            localStorage.removeItem('cartState')
        },

        incrementAmount: (id) => {
            dispatchCartAction({ type: "INCREMENT", id });
        },

        decrementAmount: (id) => {
            dispatchCartAction({ type: "DECREMENT", id });
        },

        changeName: (e) => {
            setName(e.target.value)
        },

        changeCartNbr : (e) => {
            setCartNbr(e.target.value)
        },

        changeCcv: (e) => {
            setCcvNbr(e.target.value)
        },

        changeSearch: (e) => {
            setSearch(e.target.value)
        },

        handleOrderBtn,
        catchTitle,
        alertShow,
        datas,
        mens,
        scrollToTop,
        scrollY,
        scrollControl,
        setScrollControl,

    }


    return <CartContext.Provider value={cartContext}> {props.children} </CartContext.Provider>
}

