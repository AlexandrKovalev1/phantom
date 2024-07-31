import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../../../app/store';
import {selectProducts} from '../../model/productsSlice';
import {S} from './ItemProductPage.styles';
import {PurchaseBlock} from './PurchaseBlock/PurchaseBlock';
import {useProduct} from "../../lib/useProduct";

export const ItemProductPage = () => {
    const {product} = useProduct()

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, []);

    return (
        <S.Wrapper>
            <S.CoverBlock>
                <S.Cover src={product?.cover}/>
            </S.CoverBlock>
            <S.HeadingBlock>
                <h2>{product?.Title}</h2>
                <span>{product?.Type}</span>
            </S.HeadingBlock>
            <PurchaseBlock/>
            <S.DescriptionBlock>{product?.description}</S.DescriptionBlock>
        </S.Wrapper>
    );
};
