import { setArray, toSwap, addCurrentIndex, resetCurentIndex , resetIndexAt, addToSorted, resetSwap } from '../redux/actions';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function quickSort(n, dispatch, pauseTime, func) {
    let arr = [...n];
    sort(arr,0,arr.length - 1, dispatch, pauseTime, func);
}

async function sort(n,l,r, dispatch, pauseTime, func) { 
    let i = l, j = r, p = n[Math.floor((l+r)/2)];

    while(i <= j) {
        dispatch(resetCurentIndex());
        while(n[i] < p) {
            dispatch(resetIndexAt(0));
            dispatch(addCurrentIndex(i));
            await sleep(pauseTime / 3);
            i++;
        }
        while(n[j] > p) {
            dispatch(resetIndexAt(1));
            dispatch(addCurrentIndex(j));
            await sleep(pauseTime / 3);
            j--;
        }
        if(i <= j) {
            let temp = n[i];
            n[i] = n[j];
            n[j] = temp;
            dispatch(setArray(n));
            await sleep(pauseTime / 3);
            dispatch(toSwap(i,j));
            await sleep(pauseTime / 3);
            dispatch(resetSwap());
            i++;
            j--;
            dispatch(resetCurentIndex());
            dispatch(addCurrentIndex(i));
            dispatch(addCurrentIndex(j));
        }
    }
    dispatch(setArray(n));
    await sleep(pauseTime / 3);
   
    if(j > l) await sort(n, l, j, dispatch, pauseTime, func);
    else {dispatch(addToSorted(j));dispatch(addToSorted(j+1)); await sleep(pauseTime / 3);}
    if(i < r) await sort(n, i, r, dispatch, pauseTime, func);
    else {dispatch(addToSorted(i));dispatch(addToSorted(i+1));await sleep(pauseTime / 3);}
}