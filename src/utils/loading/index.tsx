let count = 0

export const showLoading = () => {
    if (count === 0) {
        const loading = document.getElementById('initialize-loading')
        loading?.style.setProperty('display', 'flex')
    }
    count++
}

export const hideLoading = () => {
    if (count >= 1) {
        count--
    }
    if (count === 0) {
        const loading = document.getElementById('initialize-loading')
        loading?.style.setProperty('display', 'none')
    }
}
