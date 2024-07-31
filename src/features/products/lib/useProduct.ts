import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../app/store";
import {selectProducts} from "../model/productsSlice";

export const useProduct=()=>{
    const { id: idProduct } = useParams();

    const products = useAppSelector(selectProducts);
    const product = products.find(p => p.id === idProduct);

    return {
        product
    }
}