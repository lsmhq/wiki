export const isMobile = () => {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        // IOS处理
        return true
    } else if (/(Android)/i.test(navigator.userAgent)) {
        // Android处理
        return true
    } else if (/(Windows Phone)/i.test(navigator.userAgent)) {
        // Windows Phone处理
        return true
    }
    return false
}