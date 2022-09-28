import React, {useState} from 'react';
import styles from "./paginator.module.css";


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPotionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Назад</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPotionPageNumber)
            .map((p) => {
                return <span className={({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Далее</button>
        }

    </div>
}

export default Paginator